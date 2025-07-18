# Change Log

All notable changes to the "xcode-pal" extension will be documented in this file.

## [0.0.1] - 2025-07-18

### Added
- **Xcode Build Integration**: Build your Xcode project directly from VS Code using `Ctrl+Cmd+B`
- **Xcode Run Integration**: Run your Xcode project directly from VS Code using `Ctrl+Cmd+R`
- **Open File in Xcode**: Open the current file in Xcode with focus switching using `Ctrl+Cmd+X`
- **AppleScript Integration**: Seamless communication between VS Code and Xcode using AppleScript
- **Background Operations**: Build and run operations happen in background without switching focus from VS Code
- **Keyboard Shortcuts**: Easy-to-use keyboard shortcuts for all operations

### Features
- Three main commands available via Command Palette:
  - `Xcode Pal: Build Project in Xcode`
  - `Xcode Pal: Run Project in Xcode`
  - `Xcode Pal: Open Current File in Xcode`
- Keyboard shortcuts designed to avoid conflicts with VS Code defaults
- Smart focus management - build/run operations stay in background, file opening switches to Xcode
- Error handling with informative messages

### Technical Details
- Compatible with VS Code 1.101.0 and higher
- Uses AppleScript for reliable Xcode integration
- No external dependencies required
