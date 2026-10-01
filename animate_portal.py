import re

with open(r'src/components/home/ProjectsPortalView.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Add import
if 'framer-motion' not in code:
    code = code.replace('import React, { useState } from "react"', 'import React, { useState } from "react"\nimport { motion } from "framer-motion"')

# Add staggered entry for main wrapper
code = code.replace('<div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">', 
                    '<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">')

code = code.replace('</div>\n  )\n}\n', '</motion.div>\n  )\n}\n')

# Convert project cards to motion.div
code = code.replace('displayedProjects.map((project) => (', 'displayedProjects.map((project, idx) => (')

# We need to replace the start of the card
old_card_start = '<div\n                key={project.id}\n                className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group interactive-card"'
new_card_start = '<motion.div\n                key={project.id}\n                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -5 }}\n                className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group interactive-card"'
code = code.replace(old_card_start, new_card_start)

# We need to replace the end of the card, it's just before `))}`
code = code.replace('              </div>\n            ))}', '              </motion.div>\n            ))}')


with open(r'src/components/home/ProjectsPortalView.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
