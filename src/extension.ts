import { commands, ExtensionContext, window } from 'vscode';
import TreeDataProvider from './TreeDataProvider';

export function activate(context: ExtensionContext) {

	const treeDataProvider = new TreeDataProvider();
	const treeView = window.createTreeView('tree-item-highlighting', { treeDataProvider });

	commands.registerCommand('commandOne', () => {});
	commands.registerCommand('commandTwo', () => {});


	context.subscriptions.push(treeView);
}

