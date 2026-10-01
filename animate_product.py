import re

with open(r'src/components/ProductView.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Add import
if 'framer-motion' not in code:
    code = code.replace('import React, { useState, useEffect } from "react"', 'import React, { useState, useEffect } from "react"\nimport { motion } from "framer-motion"')

code = code.replace('<div className="min-h-screen bg-background text-foreground font-sans flex flex-col">', 
                    '<motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.4}} className="min-h-screen bg-background text-foreground font-sans flex flex-col">')

code = code.replace('  )\n}', '  </motion.div>\n  )\n}')

with open(r'src/components/ProductView.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
