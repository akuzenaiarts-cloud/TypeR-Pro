# TypeR-Pro

TypeR-Pro is an actively developed fork of TypeR (originally forked from TyperTools by Swirt), a Photoshop CEP extension designed for typesetters working with manga and comics scripts. It simplifies routine typesetting tasks such as placing text on images, aligning text layers, and managing text styles.

> **GitHub Repository:** [github.com/akuzenaiarts-cloud/TypeR-Pro](https://github.com/akuzenaiarts-cloud/TypeR-Pro)

## Key Features

- **Bug Fixes** — Multiple bugs from the original TyperTools have been fixed.
- **Stroke (Outline) Support** — Stroke/outline support added to styles.
- **Stable Auto-Centering** — Text shape no longer changes when using auto-centering. Works without manual selection by detecting the bubble shape automatically.
- **Customizable Shortcuts** — Modify keyboard shortcuts, with several new shortcuts added.
- **Automatic Page Detection** — Automatically detects pages when importing scripts.
- **Automatic Page Switching** — Seamlessly switches pages during workflow.
- **Smaller Minimum Window** — TypeR-Pro can be resized to a much smaller panel.
- **Line Spacing Sync** — Line spacing adjusts automatically when changing text size.
- **Adaptive Text Size** — Uses the selected layer's size when no fixed size is defined.
- **Line Break on Insert** — A line break is automatically added when inserting text on the current layer.
- **Duplicate Style Folders** — Easily duplicate entire style folders.
- **Single Folder Export** — Export/import individual folders to share with teammates.
- **Tag Priority** — Styles with the same prefix are prioritized based on the active folder.

And many more improvements coming with active development.

## Requirements

- Windows 8 / macOS 10.9 or newer.
- Adobe Photoshop CC 2015 or newer. (Some portable or lightweight builds may have issues.)

## Installation

### From a Release (recommended)

1. Download the [latest release](https://github.com/akuzenaiarts-cloud/TypeR-Pro/releases/latest) and extract the zip.
2. Run the install script for your OS:

   **Windows:**
   ```bat
   install_win.cmd
   ```

   **macOS:**
   ```sh
   chmod +x install_mac.sh && ./install_mac.sh
   ```

### From Source

**Prerequisites:** Node.js (v18+) — [nodejs.org](https://nodejs.org)

```sh
git clone https://github.com/akuzenaiarts-cloud/TypeR-Pro.git
cd TypeR-Pro
npm install
npm run build
```

Then run the install script for your OS (see above).

## Automated Releases (GitHub Actions)

Pushing a version tag automatically builds and publishes a Windows `.zip` release:

```sh
git tag v2.6.0
git push origin v2.6.0
```

The GitHub Actions workflow (`.github/workflows/release.yml`) handles:
- Running `npm install` and `npm run build`
- Packaging `app/`, `CSXS/`, `icons/`, `locale/`, `themes/`, and install scripts into a zip
- Publishing the zip as a GitHub Release asset

> **Note:** To enable the GitHub Actions workflow, add `.github/workflows/release.yml` to your repository via the GitHub web editor or by pushing with a token that has the `workflow` scope.

## Usage

After installation, open Photoshop and navigate to **Window → Extensions → TypeR**.

## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on [GitHub](https://github.com/akuzenaiarts-cloud/TypeR-Pro).

## Credits

- Original **TyperTools** by [Swirt](https://github.com/Swirt)
- **TypeR** fork by [ScanR](https://github.com/ScanR) / ImSakushi
- **TypeR-Pro** — active development fork with UI redesign and new features
