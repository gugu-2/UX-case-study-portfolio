import os
import re

DOCS_DIR = r"C:\Users\majip\Downloads\ux docs"

docs = {
    "Linear_App_UX_Documentation.md": {
        "title": "Linear App — High-Velocity Product Operations Architecture",
        "vision": "Engineered around extreme sub-50ms speed, local SQLite Wasm sync, keyboard-first home-row ergonomics, and bidirectional Git branch automation.",
        "journey": ["Setup workspace", "Connect Git repo", "Use keyboard shortcuts", "Create issues sub-50ms", "Auto-close via PR"],
        "matrix": "Focus on Keyboard Ergonomics, Wasm sync logic, sub-50ms latency UI.",
        "empathy": "Frustration with slow Jira boards. Wants instant sync and developer-centric workflows."
    },
    "Miro_Visual_Workspace_UX_Documentation.md": {
        "title": "Miro — Multiplayer Visual Workspace & Infinite Canvas",
        "vision": "Hardware-accelerated WebGL infinite canvas powering remote design sprints, interactive sticky note synthesis, and live cursors.",
        "journey": ["Create blank board", "Invite collaborators", "Add sticky notes", "Use templates", "Export frames"],
        "matrix": "Focus on WebGL canvas performance, WebSocket multiplayer sync, spatial interactions.",
        "empathy": "Needs to collaborate with remote team members. Frustrated by rigid list tools. Desires spatial, free-form ideation."
    },
    "Frame_so_Connected_Workspace_UX_Documentation.md": {
        "title": "Frame.so — Connected Team Workspace & Operating System",
        "vision": "A multiplayer connected OS eliminating SaaS fragmentation. Seamlessly link notes to engineering tasks and infinite whiteboards in a single view.",
        "journey": ["Create overarching Workspace", "Write a unified doc", "Link doc to a task board", "Search via global CMD+K modal", "Ship feature"],
        "matrix": "Focus on cross-app entity linking, CMD+K global search engines, unified navigation models.",
        "empathy": "Tired of context switching between 6 different apps. Wants a unified source of truth for docs, tasks, and boards."
    }
}

for filename, info in docs.items():
    filepath = os.path.join(DOCS_DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Update vision
        content = re.sub(r'(?<=# 01 — PRODUCT VISION).+?(?=# 02 —)', f'\n\n## 1.1 Core Vision\n{info["vision"]}\n\n', content, flags=re.DOTALL)
        
        # Update Empathy Map
        content = re.sub(r'(?<=# 04 — EMPATHY MAP SYNTHESIS).+?(?=# 05 —)', f'\n\n```\nUser Empathy Map:\n- Thinks/Feels: {info["empathy"]}\n- Says/Does: Uses the tool daily for core operational workflows.\n```\n\n', content, flags=re.DOTALL)
        
        # Update Journey Map
        journey_str = " -> ".join(info["journey"])
        content = re.sub(r'(?<=# 05 — 5-PHASE USER JOURNEY MAP).+?(?=# 06 —)', f'\n\n### The 5 Phases\n{journey_str}\n\n', content, flags=re.DOTALL)
        
        # Update Competency Matrix
        content = re.sub(r'(?<=# 06 — UX SKILLS & COMPETENCY MATRIX).+?(?=# 07 —)', f'\n\n### Key Focus Areas\n{info["matrix"]}\n\n', content, flags=re.DOTALL)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
            
print("Updated markdown files successfully.")
