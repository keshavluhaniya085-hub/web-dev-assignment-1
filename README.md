# Smart Utility Toolkit

A modular backend utility project built using **Node.js core modules** without any third-party npm packages or external frameworks.

## Project Overview

This project demonstrates core backend engineering concepts in Node.js, including:

- Command-line argument parsing (`process.argv`)
- Custom module creation and export/import (`CommonJS`)
- Cryptographic randomness generation (`crypto`)
- Asynchronous file system CRUD operations (`fs/promises`)
- HTTP server routing and request analysis (`http`)
- Synchronous vs. asynchronous execution flow
- Terminal styling via ANSI escape codes

---

## Directory Structure

```text
smart-utility-toolkit/
├── app.js
├── calculator.js
├── dice.js
├── fileManager.js
├── server.js
├── modules/
│   ├── isEven.js
│   └── logger.js
├── appLogs.txt          (generated at runtime)
├── diceLogs.txt         (generated at runtime)
├── test.txt             (created and cleaned up during fileManager run)
└── README.md
```
