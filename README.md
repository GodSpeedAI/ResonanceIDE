# ResonanceIDE

**ResonanceIDE** is a streamlined, AI-first code editor built on VS Code's robust foundation. It delivers a minimal, fast development environment with full extension compatibility while removing all telemetry and Microsoft services.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.txt)
[![Build Status](https://github.com/GodSpeedAI/ResonanceIDE/workflows/ResonanceIDE%20CI/badge.svg)](https://github.com/GodSpeedAI/ResonanceIDE/actions)

## ✨ Key Features

- **AI-First Design** – Built-in AI integration surfaces with support for local models (Ollama) and API providers (LiteLLM)
- **Zero Telemetry** – No data collection, no experiments, no Microsoft services
- **Full Extension Support** – Compatible with Open VSX marketplace extensions
- **Minimal & Fast** – Stripped to essential features for a snappy experience
- **Cross-Platform** – Available for macOS, Windows, and Linux

## 🚀 Getting Started

### Download

Pre-built binaries will be available on the [Releases page](https://github.com/GodSpeedAI/ResonanceIDE/releases).

### Building from Source

#### Prerequisites

- [Node.js](https://nodejs.org/) >= 18 (LTS recommended)
- [Yarn](https://yarnpkg.com/) (version specified in `.yarnrc`)
- Python 3.x (for native modules)
- C++ build tools (platform-specific)

#### Build Commands

```bash
# Clone the repository
git clone https://github.com/GodSpeedAI/ResonanceIDE.git
cd ResonanceIDE

# Install dependencies
yarn install

# Compile TypeScript
yarn compile

# Build for your platform
yarn gulp vscode-linux-x64-min    # Linux
yarn gulp vscode-darwin-arm64-min # macOS (Apple Silicon)
yarn gulp vscode-darwin-x64-min   # macOS (Intel)
yarn gulp vscode-win32-x64-min    # Windows
```

## 🔌 Extensions

ResonanceIDE uses the [Open VSX Registry](https://open-vsx.org/) for extensions. Install extensions directly from the Extensions view or via command line:

```bash
resonance-ide --install-extension <extension-id>
```

## ⚙️ Configuration

ResonanceIDE stores user data in:

- **Linux**: `~/.resonance-ide/`
- **macOS**: `~/Library/Application Support/ResonanceIDE/`
- **Windows**: `%APPDATA%\ResonanceIDE\`

### AI Backend Settings

Configure AI integration in Settings (`Ctrl/Cmd + ,`):

| Setting                        | Description                                           |
| ------------------------------ | ----------------------------------------------------- |
| `resonance.ai.backend`         | Backend type: `ollama`, `litellm`, or `custom`        |
| `resonance.ai.ollama.baseUrl`  | Ollama server URL (default: `http://localhost:11434`) |
| `resonance.ai.litellm.baseUrl` | LiteLLM proxy URL (default: `http://localhost:4000`)  |
| `resonance.ai.model.default`   | Default model for AI features                         |

## 🛠️ Development

### Running in Development Mode

```bash
# Start the development build
./scripts/code.sh    # Linux/macOS
scripts\code.bat     # Windows
```

### Running Tests

```bash
# Unit tests
yarn test

# Integration tests
./scripts/test-integration.sh
```

### Project Structure

| Directory     | Purpose                         |
| ------------- | ------------------------------- |
| `src/vs/`     | Core editor source code         |
| `extensions/` | Built-in extensions             |
| `build/`      | Build scripts and configuration |
| `resources/`  | Platform-specific assets        |

## 📖 Documentation

- [Wiki](https://github.com/GodSpeedAI/ResonanceIDE/wiki) – User guides and documentation
- [Keyboard Shortcuts](https://github.com/GodSpeedAI/ResonanceIDE/wiki/Keyboard-Shortcuts-Linux) – Quick reference
- [Contributing](CONTRIBUTING.md) – How to contribute

## 🔐 Privacy

ResonanceIDE is designed with privacy in mind:

- **No telemetry** – All Microsoft telemetry services are disabled
- **No experiments** – No A/B testing or feature flags from external servers
- **No cloud services** – No Microsoft accounts, Settings Sync, or remote tunnels
- **Local AI** – AI features work with locally-hosted models

## 📄 License

ResonanceIDE is released under the [MIT License](LICENSE.txt).

This project is based on [VS Code](https://github.com/microsoft/vscode), which is also MIT licensed. We maintain compatibility with upstream while removing proprietary services.

## 🙏 Acknowledgments

- [Microsoft VS Code](https://github.com/microsoft/vscode) – The foundation this project builds upon
- [VSCodium](https://github.com/VSCodium/vscodium) – Inspiration for telemetry removal patterns
- [Open VSX](https://open-vsx.org/) – Open source extension marketplace

---

<p align="center">
  <strong>ResonanceIDE</strong> – AI-First Code Editor
</p>
