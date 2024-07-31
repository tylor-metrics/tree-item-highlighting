import { ThemeIcon, TreeItem, TreeItemCollapsibleState } from 'vscode';
import { HeaderItem } from './TreeDataProvider';

export default class HeaderTreeItem extends TreeItem {
    public constructor(
        element: HeaderItem,
        collapsibleState: TreeItemCollapsibleState = TreeItemCollapsibleState.Expanded
    ) {
        super(element.headerText, collapsibleState);
        this.id = element.headerText;
        this.contextValue = 'showViewItemContext=true';
        this.iconPath = new ThemeIcon('console');
    }
}
