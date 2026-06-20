# RetroMatch // Arcade Game Version

RetroMatch is a vibrant, browser-based 8-bit retro arcade-themed memory card matching game. Designed to replicate the engaging aesthetic of 1980s arcade cabinet screens, this dynamic front-end web application tests players' visual memory and speed while offering an immersive synthwave and pixelated user experience.

The live project can be viewed here: [Insert Live GitHub Pages URL Here]

---

## 🎯 1. User Experience (UX)

### Project Goals
The primary goal of RetroMatch is to provide a nostalgic, fast-paced, and highly interactive casual gaming experience directly inside the browser. It serves as a proof-of-concept milestone project demonstrating robust DOM manipulation, state-driven JavaScript, responsive grid layout logic, and persistent browser storage mechanics without requiring any back-end infrastructure.

### User Stories
* **As a first-time visitor:**
  * I want to instantly understand the purpose of the game from the visual interface.
  * I want to see a clear call-to-action (like a "START GAME" button) to begin playing immediately.
  * I want the interface to feel cohesive, well-structured, and easy to navigate on both my phone and my desktop.

* **As a returning player:**
  * I want to track my current score and elapsed time continuously as I interact with the canvas.
  * I want my highest-ever score to be saved securely in the browser so that I can challenge my past records over multiple sessions.
  * I want a failsafe mechanism that prevents accidental double-clicking or rapid click-spamming from breaking the game rules.

### Design Identity
* **Typography:** Utilizes Google Fonts' `'Press Start 2P'` to achieve an authentic pixelated arcade aesthetic across all headers, stats elements, and dynamic UI panels.
* **Color Palette:**
  * **Background Space:** Deep Void Black (`#0a0a16`)
  * **Primary UI Trim / Front Face:** Neon Cyan (`#00f0ff`)
  * **Secondary Borders / Cards Backing:** Neon Magenta (`#ff0055`)
  * **Success / Win Indicators:** Cyber Green (`#39ff14`)
* **Wireframe Layout:** Structured around a centralized focus canvas. The top layout houses the static and dynamic system metrics (Heads Up Display panel), followed cleanly by primary button elements, leading downward directly into a perfectly balanced $4 \\times 4$ CSS grid alignment.

---

## ⚡ 2. App Features & Core Architecture

### Active Interface Components
* **Dynamic Heads-Up Display (HUD):** Continuously monitors and pushes updates for the player's current score tally, active session clock runtime, and the saved global persistent high score.
* **3D Animated Isometric Card Flip:** Leverages hardware-accelerated CSS `perspective` and `backface-visibility` parameters, allowing cards to cleanly perform dynamic 180-degree physical rotations when engaged by click interactions.
* **Smart Board-Lock Mechanism (Anti-Spam Safeguard):** Integrates an asynchronous concurrency safety interlock (`lockBoard = true`). If a player attempts to spam-click multiple items simultaneously, the board safely queues event execution, preserving grading integrity.
* **Time-Bonus Multiplier Matrix:** Rewarding speed as well as accuracy, the engine evaluates completion times upon winning and calculates an added mathematical bonus score scaled recursively against the remaining clock window.
* **Persistent LocalStorage Storage Tracking:** Automatically serializes final point distributions to look up past score arrays in `localStorage`. If the new total clears the historic standard, the metric updates instantly in real-time.

---

## 🛠️ 3. Technologies Utilized

### Core Frameworks & Tooling
* **HTML5:** Provides semantic, SEO-friendly layout foundations and structure.
* **CSS3 (Custom Native Modules):** Governs advanced 3D transformation logic, keyframed color-pulsing glows, specific image rendering configurations, and theme variables.
* **JavaScript (ES6+ Custom Engine):** Powers the core algorithmic state machines, random generation vectors, interval timing mechanisms, and localized browser caching structures.
* **Bootstrap v5.3.0:** Ensures responsive grid columns, responsive margins, and the dynamic rendering of the Game Over/Victory modal container.
* **Google Fonts API:** Provides the typography standard used throughout the application workspace.

---

## 🧪 4. Testing Protocols & Validation

To ensure the application strictly adheres to the dynamic response requirements, extensive manual testing sweeps were executed across various cross-platform environments.

### Core Logic Verification Matrix

| Target Behavior | Input Action | Expected Technical Response | System Status |
| :--- | :--- | :--- | :--- |
| **Grid Generation** | Click `START GAME` | Array duplications occur; values shuffle; 16 card structures load. | **PASSED** |
| **Unique Card Click** | Click a single face-down item | The card flips up cleanly to expose its symbol. | **PASSED** |
| **Self-Click Loop Avoidance** | Click an identical active card | Double-click register is intercepted; logic halts safely. | **PASSED** |
| **Matched Items Lock** | Click two identical cards | Both elements lock in the flipped position; score gains +100pts. | **PASSED** |
| **Mismatched Reversion** | Click two distinct cards | Elements display for 1s, then flip face-down; score loses -10pts. | **PASSED** |
| **Confronting Click Spam** | Fast tap 5 items in < 1s | The `lockBoard` variable drops subsequent inputs during delays. | **PASSED** |
| **Win Condition Trigger** | Clear all 8 unique pairs | Clock halts; final scores process; Victory Modal emerges. | **PASSED** |
| **State Caching System** | Reload application after win | Data is pulled from `localStorage`; high score is displayed. | **PASSED** |

### Device & Viewport Adaptability Checks
* Validated smoothly inside Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge.
* Thoroughly audited utilizing developer viewport simulators spanning mobile standards (iPhone SE, iPhone 14 Pro, Samsung Galaxy S22), tablet dimensions (iPad Air, iPad Mini), and high-resolution desktop configurations. 

---

## 🚀 5. Deployment Procedures

The source workspace is actively managed under Git version tracking control and hosted publicly via GitHub Pages.

### Detailed Deployment Workflow
1. Navigate directly to your targeted repository workspace on the **GitHub Dashboard**.
2. Locate and click on the **Settings** gear icon within the repository navigation tabs.
3. Scroll down the left sidebar navigation layout until you hit the **Code and automation** segment; select **Pages**.
4. Inside the primary Build and deployment controls, verify the Source parameter is explicitly set to **"Deploy from a branch"**.
5. Under the Branch drop-down configuration settings, choose **`main`** (or your primary target folder layer) and retain the root routing setting (`/root`).
6. Click **Save**. Within a few moments, the automated build action sequence concludes, and an explicit live production page URL is displayed at the top of the pane.

---

## ✒️ 6. External Attributions

* **The Shuffling Methodology:** The randomized collection redistribution system relies on an implementation of the **Fisher-Yates Shuffle Algorithm**, standard across JavaScript matrix array processing.
* **Layout Blocks:** Grid alignment rules, utility layout spacings, and contextual container dimensions were adapted from the official [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/).
* **Arcade Typography:** Custom fonts are managed and served externally courtesy of the [Google Fonts Library Catalog](https://fonts.google.com/).
