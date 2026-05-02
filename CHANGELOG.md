# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Full UI redesign: modern dark panel replacing the Topcoat CSS library
- Custom SCSS design system with CSS custom properties

---

## [2.5.0] — 2025-01-06

### Added
- Stroke (outline) support in text styles
- Customizable keyboard shortcuts with additional new shortcuts
- Automatic page detection when importing scripts
- Automatic page switching for seamless workflow
- Line spacing now syncs when increasing/decreasing text size
- Adaptive size: if no fixed text size is defined, the selected layer's size is used
- Line break auto-inserted when placing text on the current layer
- Duplicate style folders
- Export a single folder (no need to export all styles)
- Tag priority: styles with the same prefix are now prioritized based on the currently selected folder
- Resize TypeR: minimum window size reduced for smaller panel layouts

### Fixed
- Stable auto-centering: text shape no longer changes when using auto-centering
- Auto-centering now works without manual selection by detecting the bubble shape automatically
- Multiple bugs inherited from the original TyperTools

### Changed
- Forked from [Swirt/typetools-src](https://github.com/Swirt/typetools-src) and enhanced as TypeR

---

## [1.0.0] — Original TyperTools by Swirt

Initial base: TyperTools by [Swirt](https://github.com/Swirt), a Photoshop extension for manga/comics typesetters covering text placement, style management, and alignment.
