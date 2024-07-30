import { ExtensionContext, window } from 'vscode';
import TreeDataProvider from './TreeDataProvider';

export function activate(context: ExtensionContext) {

	const treeDataProvider = new TreeDataProvider();
	const treeView = window.createTreeView('tree-item-highlighting', { treeDataProvider });
	context.subscriptions.push(treeView);
}

