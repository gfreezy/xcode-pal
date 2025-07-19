# XCode Pal

**XCode Pal** is a powerful VS Code extension that bridges the gap between VS Code and Xcode, allowing you to control Xcode directly from your VS Code editor using AppleScript integration.

## Features

### 🚀 Seamless Xcode Integration
- **Build Projects**: Trigger Xcode builds without leaving VS Code
- **Run Projects**: Execute your Xcode projects with a simple keyboard shortcut
- **Open Files**: Open the current file in Xcode with automatic focus switching

### ⌨️ Keyboard Shortcuts
- `Ctrl+Cmd+B` - Build Project in Xcode
- `Ctrl+Cmd+R` - Run Project in Xcode
- `Ctrl+Cmd+X` - Open Current File in Xcode

### 🎯 Smart Focus Management
- Build and run operations happen in the background, keeping VS Code in focus
- Opening files in Xcode automatically switches focus to Xcode for immediate editing
- Intelligent AppleScript integration ensures reliable communication

### 📋 Command Palette Support
All commands are available through the Command Palette (`Cmd+Shift+P`):
- `Xcode Pal: Build Project in Xcode`
- `Xcode Pal: Run Project in Xcode`
- `Xcode Pal: Open Current File in Xcode`

## Requirements

- **macOS**: This extension only works on macOS due to AppleScript dependency
- **Xcode**: Xcode must be installed and accessible
- **VS Code**: Version 1.101.0 or higher

## Installation

1. Install the extension from the VS Code Marketplace
2. Ensure Xcode is installed on your system
3. Grant necessary permissions for VS Code to control other applications (macOS will prompt when first used)

## Usage

### Quick Start
1. Open your iOS/macOS project in VS Code
2. Use the keyboard shortcuts or Command Palette to trigger Xcode operations
3. Your Xcode project will respond accordingly while you stay productive in VS Code

### Permission Setup
When you first use the extension, macOS may ask for permission to allow VS Code to control other applications. This is required for the AppleScript integration to work properly.

## Known Issues

- Requires macOS and Xcode to be installed
- May require accessibility permissions to be granted to VS Code
- Xcode must be running for build/run commands to work (opening files will launch Xcode if needed)

## Release Notes

### 0.0.2 (2025-07-19)

🔧 **Bug Fixes & Improvements**

- Fixed "Can't get active scheme" error by switching to keyboard simulation
- Improved AppleScript reliability across different Xcode versions
- Enhanced build and run operations using System Events
- Simplified file opening mechanism for better compatibility

### 0.0.1 (2025-07-18)

🎉 **Initial Release**

- Added Xcode build integration with background execution
- Added Xcode run integration with background execution
- Added file opening in Xcode with focus switching
- Implemented AppleScript-based communication
- Added keyboard shortcuts that don't conflict with VS Code defaults
- Added Command Palette integration

---

## Contributing

Found a bug or have a feature request? Please open an issue on the [GitHub repository](https://github.com/gfreezy/xcode-pal).

## License

This extension is released under the MIT License.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
