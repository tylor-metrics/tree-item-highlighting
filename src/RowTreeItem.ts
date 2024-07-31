import { ThemeIcon, TreeItem, TreeItemCollapsibleState, Uri } from 'vscode';
import { RowItem } from './TreeDataProvider';

export default class RowTreeItem extends TreeItem {
    public constructor(
        element: RowItem,
        collapsibleState: TreeItemCollapsibleState = TreeItemCollapsibleState.None
    ) {
        super(element.text, collapsibleState);
        this.id = element.text;
        this.iconPath = new ThemeIcon('console');
    }
}
