import { commands, ExtensionContext, window } from 'vscode';
import TreeDataProvider from './TreeDataProvider';
import { SectionDecorationProvider } from './DecorationProvider';

export function activate(context: ExtensionContext) {

	// setup and tree data provider
	const treeDataProvider = new TreeDataProvider();
	const treeView = window.createTreeView('tree-item-highlighting', { treeDataProvider });

	// setup the decoration provider
	window.registerFileDecorationProvider(new SectionDecorationProvider());

	// hook up 2 empty commands that do nothing, just for showing icons in the tree item
	commands.registerCommand('commandOne', () => {});
	commands.registerCommand('commandTwo', () => {});

	context.subscriptions.push(treeView);
}

