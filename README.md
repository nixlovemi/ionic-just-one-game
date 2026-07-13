# Ionic Just One (Board Game Web/Mobile Port)
### A digital mobile & web implementation of the award-winning cooperative board game "Just One", engineered with reactive game-state pipelines, dynamic deck-shuffling logic, and deterministic score penalties.

💻 **Live WebApp URL:** [https://crochepassoapasso.com.br/uma-palavra/home](https://crochepassoapasso.com.br/uma-palavra/home)

---

## 📐 Game Design & Architectural Overview
This repository contains a full digital port of the tabletop party game "Just One", built using the **Ionic 5** and **Angular 8** framework ecosystem. 

The application translates analog social board game mechanics into a single-device web/mobile experience. The core architecture acts as a deterministic state machine, managing deck depletion, tracking score states, handling view toggle triggers, and enforcing strict ruleset game loops asynchronously.

---

## 🚀 Key Game Engineering & Algorithmic Patterns

- **Unique Random Deck Generation Pipeline:** Programmed an index-tracking extraction loop (`getNewWords`) that dynamically samples a global dictionary payload. The algorithm aggregates a temporary active pool of 13 unique items (`nbrOfCards`) while utilizing lookahead array searches (`.includes()`) against a persistent memory exclusion matrix (`getUsedIdx`) to prevent duplicated cards within the same lifecycle game session.
- **Rule-Compliant State Penalty Machine:** Engineered an advanced state transition handler (`goNextCard`) that rigorously executes the core physical board game penalization logic. When an invalid guess (`ERR`) is triggered, the engine instantly mutates the image matrix asset nodes (`cCardImgErr`), indexes the score boundaries, and executes an automated cascade skip to penalize and eliminate the consecutive card (`currentIdx + 1`) from the current playable layout.
- **Dynamic Asset & View Toggle Routing:** Handled fluid rendering states (`showWord` flags) to hide secret keyword configurations during player pass turns, alongside navigation safety controls (`navigateForward`) to push final game analytics seamlessly into separate ending viewport screens.
- **Native Device Handshakes & Hybrid Storage:** Configured native abstraction layer platforms (`Cordova`) mapped alongside underlying file management systems (`cordova-plugin-file`) and persistent hardware caching databases (`cordova-sqlite-storage`) to establish cross-platform layout support on iOS mobile frameworks.

---

## 🛠️ Technical Stack & Tooling

- **Application Environment:** Ionic Framework v5 & Angular 8 Core Ecosystem
- **Programming Standards:** TypeScript, Native DOM Event Binding Interfaces
- **Hybrid Bridge Engineering:** Cordova Engine Architectures & Plugin Wrappers (SQLite, Local File System Storage)
- **Core Algorithms:** Array inclusion deduplications, pseudo-random seed indexing, multi-branch conditional state loops
