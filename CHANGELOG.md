# Change Log

All notable changes to the "xcode-pal" extension will be documented in this file.

## [0.0.4] - 2025-07-21

### Fixed
- **AppleScript Execution Issues**: Combined Xcode activation and keystroke commands into single AppleScript for better reliability
- **Improved Error Handling**: Added detailed console logging and error reporting for better debugging

### Changed
- **Keyboard Shortcuts**: Changed from `Ctrl+Cmd` to `Ctrl+Alt` combinations for better compatibility
  - Build: `Ctrl+Alt+B` (was `Ctrl+Cmd+B`)
  - Run: `Ctrl+Alt+R` (was `Ctrl+Cmd+R`)
  - Open in Xcode: `Ctrl+Alt+X` (was `Ctrl+Cmd+X`)
- **AppleScript Optimization**: Single command now handles both Xcode activation and keystroke execution

### Technical
- Enhanced AppleScript reliability by removing separate activation step
- Better error reporting with stdout/stderr logging
- Simplified command execution flow

## [0.0.2] - 2025-07-19

### Fixed
- **Improved AppleScript Reliability**: Switched from Xcode AppleScript dictionary commands to System Events keyboard simulation for better compatibility
- **Resolved "Can't get active scheme" Error**: Build and run operations now use keyboard shortcuts (Cmd+B, Cmd+R) instead of scheme-dependent commands
- **Enhanced File Opening**: Simplified file opening mechanism for better reliability across different Xcode versions

### Changed
- Build command now uses `System Events` keyboard simulation (`Cmd+B`) instead of AppleScript dictionary
- Run command now uses `System Events` keyboard simulation (`Cmd+R`) instead of AppleScript dictionary
- File opening uses direct Xcode `open` command for better integration

### Technical
- Improved error handling and compatibility across Xcode versions
- More reliable AppleScript execution without scheme dependencies

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
