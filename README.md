# RetroMatch // Arcade Game Version

RetroMatch is a fast-paced, browser-based memory card matching game styled like an 8-bit 1980s arcade cabinet. Built as a front-end web application, it tests the player's memory and speed using a vibrant synthwave aesthetic.

**[View the Live Project Here](https://wgregorycoding-eng.github.io/retro-match/)**

---

## 🎯 1. User Experience (UX)

### Project Goals
The main goal of RetroMatch was to build a fun, nostalgic casual game that runs smoothly directly in the browser. Technically, it serves as a milestone project to demonstrate robust DOM manipulation, state management in pure JavaScript, responsive layout design, and persistent browser storage—all without needing a backend.

### User Stories
* **First-time players:** I want to understand how to play immediately from looking at the screen, see a clear "START GAME" button, and have the game scale perfectly whether I'm playing on my phone or a desktop.
* **Returning players:** I want to track my score and time while playing, have my highest score saved so I can try to beat it later, and be blocked from accidentally breaking the game rules by spam-clicking.

### Design & Theme
* **Typography:** Uses the 'Press Start 2P' Google Font to capture that classic pixelated arcade look.
* **Color Palette:** A dark cyber-punk theme using Deep Void Black (`#0a0a16`), Neon Cyan (`#00f0ff`), Neon Magenta (`#ff0055`), and Cyber Green (`#39ff14`).
* **Layout:** A clean, centralized layout. The top section acts as the arcade HUD (displaying stats and buttons), leading down into a perfectly centered 4×4 grid for the game board.

---

## ⚡ 2. Core Features

* **Dynamic HUD:** Real-time tracking for the player's current score, an active session timer, and the saved high score.
* **3D Card Flip Animation:** Uses CSS 3D transforms (`perspective` and `backface-visibility`) to give the cards a realistic flipping effect when clicked.
* **Click-Spam Safeguard:** Includes a board-locking mechanism (`lockBoard = true`). If a player tries to click multiple cards rapidly, the board ignores extra inputs until the current turn resolves.
* **Time-Bonus Multiplier:** To reward fast play, players get a mathematical bonus added to their final score based on how quickly they cleared the board.
* **High Score Persistence:** Uses `localStorage` to save user scores. If a new score beats the historical high score, the HUD updates instantly.

---

## 🛠️ 3. Technologies Used

* **HTML5:** For semantic layout structure.
* **CSS3:** For custom styling, 3D card animations, and glowing neon effects.
* **JavaScript (ES6+):** For the core game logic, card shuffling, timers, and high-score tracking.
* **Bootstrap v5.3.0:** Used for responsive grid alignments and the victory modal.
* **Google Fonts API:** For the arcade typography.

---

## 🧪 4. Testing & Validation

### Game Logic Testing
I manually tested the core gameplay mechanics across multiple scenarios to ensure the state updates correctly:

| Action / Test Case | Expected Result | Status |
| :--- | :--- | :--- |
| **Click "START GAME"** | Cards are duplicated, randomized, and a clean 16-card grid loads. | **PASSED** |
| **Click a face-down card** | The card flips over smoothly to reveal its symbol. | **PASSED** |
| **Click an already active card** | The double-click is ignored; the card stays flipped. | **PASSED** |
| **Match two identical cards** | Both cards stay flipped, lock into place, and score increases (+100 pts). | **PASSED** |
| **Click two different cards** | Cards stay visible for 1 second, flip back over, and score drops (-10 pts). | **PASSED** |
| **Spam-click 5 cards in < 1s** | The `lockBoard` variable successfully drops extra inputs during animations. | **PASSED** |
| **Clear all 8 pairs (Win)** | Timer stops, final time-bonus is added, and the Victory Modal appears. | **PASSED** |
| **Refresh page after winning** | High score persists and loads automatically from `localStorage`. | **PASSED** |

### Device & Browser Compatibility
The game was tested and works smoothly across Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge. I used developer tools to audit responsiveness on several viewports, including mobile (iPhone SE, iPhone 14 Pro, Galaxy S22), tablets (iPad Air/Mini), and standard desktop displays.

---

## 🐛 5. Bugs & Fixes

### Resolved Bugs
1. **The Rapid Click Exploit**
   * *Bug:* If a user clicked 3 or more cards really fast before a mismatched pair finished flipping back over, the game state broke and cards got stuck face-up.
   * *Fix:* Added a `lockBoard` boolean. The moment two cards are selected, `lockBoard` is set to `true`, blocking any further clicks until `unflipCards()` finishes running.

2. **The Same-Card Match Hack**
   * *Bug:* Clicking the exact same card twice was counted as a successful match and locked the card.
   * *Fix:* Added a strict reference check at the beginning of the click handler to ensure the second clicked card isn't identical to the first.

3. **Broken Assets Path**
   * *Bug:* The site initially loaded as a blank white screen locally because fonts and styles failed to fetch.
   * *Fix:* Caught a typo in the directory path (`assests/` instead of `assets/`). Corrected the folder structure to match the project's relative links.

### Intentional Design Choices
* **No Sound Effects:** While classic arcade games are known for audio chips, sudden autoplay audio can be disruptive. For this iteration, I focused entirely on a visual-first UX. I plan to add audio effects in a future update as a completely opt-in toggle.

---

## 🚀 6. Deployment

The project is tracked with Git and hosted on GitHub Pages via these steps:
1. Go to the repository settings on GitHub.
2. Select **Pages** from the left sidebar navigation.
3. Under **Build and deployment**, set the source to "Deploy from a branch".
4. Select the `main` branch and the root (`/`) directory.
5. Hit **Save**. The live build generates automatically.

---

## ✒️ 7. Credits & Attributions

* **Card Shuffling:** Implemented using a standard JavaScript adaptation of the Fisher-Yates Shuffle Algorithm.
* **Layout:** Responsive structure and modal containers adapted from the Bootstrap Documentation.
* **Fonts:** Typography served via the Google Fonts library.