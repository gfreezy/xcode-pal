// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "xcode-pal" is now active!');

	const runXcodeScript = (script: string, successMsg: string, errorMsg: string) => {
		exec(`osascript -e '${script}'`, (error, stdout, stderr) => {
			if (error) {
				vscode.window.showErrorMessage(`${errorMsg}: ${stderr || error.message}`);
			} else {
				vscode.window.showInformationMessage(successMsg);
			}
		});
	};

	const runDisposable = vscode.commands.registerCommand('xcode-pal.xcodeRun', () => {
		runXcodeScript(
			'tell application "System Events" to tell process "Xcode" to keystroke "r" using {command down}',
			'Xcode: Run triggered!',
			'Failed to trigger Xcode Run'
		);
	});

	const buildDisposable = vscode.commands.registerCommand('xcode-pal.xcodeBuild', () => {
		runXcodeScript(
			'tell application "System Events" to tell process "Xcode" to keystroke "b" using {command down}',
			'Xcode: Build triggered!',
			'Failed to trigger Xcode Build'
		);
	});

	const openInXcodeDisposable = vscode.commands.registerCommand('xcode-pal.openInXcode', async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No active editor/file to open in Xcode.');
			return;
		}
		const filePath = editor.document.uri.fsPath;
		runXcodeScript(
			`tell application "Xcode"\n\tactivate\n\topen "${filePath}"\nend tell`,
			'Opened current file in Xcode!',
			'Failed to open file in Xcode'
		);
	});

	context.subscriptions.push(runDisposable, buildDisposable, openInXcodeDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
