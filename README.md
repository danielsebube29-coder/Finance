# 💰 Finance Web App

A modern, high-performance, single-page **Finance Management Application** built using a blazing-fast development pipeline. This app allows tracking, analyzing, and structuring assets and transactions dynamically.

---

## ⚡ Tech Stack

*   **Frontend Core:** React with TypeScript (TSX)
*   **Routing Architecture:** `@tanstack/react-router` (configured via `src/routes/`)
*   **Build Pipeline:** Vite
*   **Server Configuration:** Custom automated environment loading (`with-app-env.mjs`)
*   **Deployment Configuration:** Pre-configured for seamless Vercel integration

---

## 🚀 Quick Start Guide

Follow the sequential steps below matching your operating system or environment to fire up the application.

### 🔷 Option A: Android (Termux)
Ensure you have Node.js installed on your machine and launch using the specific WebAssembly module handling required for mobile processor architectures:
```bash
# 1. Install Node.js if missing
pkg update && pkg install nodejs -y

# 2. Install architecture-safe packages & mobile WASM binders
npm install --omit=optional
npm install @rolldown/binding-wasm32-wasi

# 3. Launch the development server
NODE_OPTIONS="--experimental-wasm-modules" npm run dev
```

### 🐧 Option B: Linux Terminal (Ubuntu/Debian/Fedora)
For native Linux environments, standard installations run flawlessly:
```bash
# 1. Verify Node.js is installed
node -v

# 2. Clean install project packages
npm install

# 3. Launch development server
npm run dev
```

### 🪟 Option C: Windows Command Prompt (CMD)
For native Windows workflows, follow this sequence inside your workspace directory:
```cmd
:: 1. Verify Node.js is installed 
node -v

:: 2. Clean install project dependencies
npm install

:: 3. Launch development server
npm run dev
```

---

## 📱 Viewing the Application
Once your specific environment compiles successfully, local hosting is initiated on port `8080`. Click or navigate to the address below in your preferred browser:

👉 **[http://localhost:8080](http://localhost:8080)**

---

## 📂 Structural Tree

```text
├── .grok/                  # AI development tracking logs
├── .vercel/                # Automated builds & serverless endpoint deployments
├── public/                 # Static visual assets and favicon elements
├── src/
│   ├── routes/             # Core filesystem-based web view routers
│   │   ├── __root.tsx      # Global view wrapper & context provider
│   │   └── index.tsx       # Landing view dashboard
│   └── styles.css          # Central tailwind/global application styles
├── scripts/
│   └── with-app-env.mjs    # Automation wrapper inject local variables into Vite
├── vercel.json             # Edge hosting routing structures
└── vite.config.ts          # Core builder configurations
```

---

## 🛡️ License

This project is open-source software licensed under the **MIT License**. See the `LICENSE` file for more details.
