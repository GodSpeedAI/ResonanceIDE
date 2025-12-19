# ResonanceIDE Branding Assets - Replacement Guide

> **Status:** Placeholder assets in use. Replace with professionally designed assets before release.

## Overview

The current ResonanceIDE branding assets are AI-generated placeholders created during Phase 4 implementation. These should be replaced with professionally designed icons and images.

**No code changes required** - the build scripts reference files by name, so replacement is a simple file swap.

---

## Required Assets

### 1. Windows Installer Bitmaps (BMP)

**Location:** `resources/win32/`

These are used by the Inno Setup installer:

- **Sidebar Image (`inno-big-*.bmp`)**: Appears on the left side of the wizard
- **Header Icon (`inno-small-*.bmp`)**: Appears in the top-right corner

| Scale    | Sidebar (`inno-big-*.bmp`) | Header (`inno-small-*.bmp`) |
| :------- | :------------------------- | :-------------------------- |
| **100%** | **164 x 314 px**           | **55 x 55 px**              |
| 125%     | 192 x 386 px               | 64 x 68 px                  |
| 150%     | 246 x 459 px               | 83 x 80 px                  |
| 175%     | 273 x 556 px               | 92 x 97 px                  |
| 200%     | 328 x 604 px               | 110 x 106 px                |
| 225%     | 355 x 700 px               | 119 x 123 px                |
| 250%     | 410 x 797 px               | 138 x 140 px                |

**Format:** 24-bit BMP (Windows 3.x format)

---

### 2. Application Icons

| Platform    | Current File                 | Target File      | Required Sizes                             |
| :---------- | :--------------------------- | :--------------- | :----------------------------------------- |
| **Windows** | `resources/win32/code.ico`   | `resonance.ico`  | 16, 24, 32, 48, 64, 128, 256 px            |
| **macOS**   | `resources/darwin/code.icns` | `resonance.icns` | 16, 32, 64, 128, 256, 512, 1024 px (+ @2x) |
| **Linux**   | `resources/linux/code.png`   | `resonance.png`  | 1024 x 1024 px                             |

**Tools for generating:**

- `.ico`: [ImageMagick](https://imagemagick.org/), [IcoFX](https://icofx.ro/)
- `.icns`: macOS `iconutil`, [img2icns](https://github.com/nicola-strappazzon/img2icns)

---

### 3. Windows Start Menu Tiles (PNG)

**Location:** `resources/win32/`

| Current File       | Target File             | Size         |
| :----------------- | :---------------------- | :----------- |
| `code_70x70.png`   | `resonance_70x70.png`   | 70 x 70 px   |
| `code_150x150.png` | `resonance_150x150.png` | 150 x 150 px |

---

### 4. Server Icons (PNG/ICO)

**Location:** `resources/server/`

| Current File   | Target File             | Size                       |
| :------------- | :---------------------- | :------------------------- |
| `code-192.png` | `resonance-192.png`     | 192 x 192 px               |
| `code-512.png` | `resonance-512.png`     | 512 x 512 px               |
| `favicon.ico`  | `resonance-favicon.ico` | 16, 32, 48 px (multi-size) |

---

## Design Guidelines

- **Motif:** Wave/resonance pattern forming stylized "R"
- **Color Palette:** Electric blue (#00BFFF) → Purple (#8B5CF6) gradient
- **Background:** Dark (#1a1a2e)
- **Legibility:** Must be clear at 16px (taskbar/favicon size)
- **Consistency:** Maintain same visual identity across all platforms

---

## Replacement Checklist

- [ ] Create master icon at 1024x1024 px (PNG with transparency)
- [ ] Generate Windows `.ico` with all required sizes
- [ ] Generate macOS `.icns` with all required sizes
- [ ] Export Linux PNG at 1024x1024
- [ ] Create Windows installer BMPs (all 7 scales for each type)
- [ ] Create Start Menu tile PNGs (70x70, 150x150)
- [ ] Create server icons (192px, 512px, favicon.ico)
- [ ] Test build on each platform to verify icons display correctly
- [ ] Verify icons appear in:
  - [ ] Application window title bar
  - [ ] Taskbar/Dock
  - [ ] File explorer/Finder
  - [ ] Windows installer wizard
  - [ ] About dialog

---

## Current Placeholder Location

The AI-generated placeholder icon is at:

- `resources/linux/resonance.png` (512x512)
- `resources/server/resonance-192.png`
- `resources/server/resonance-512.png`

---

_Created: 2025-12-14 | Phase 4: UI/Branding_
