import { ThemeIcon, TreeItem, TreeItemCollapsibleState, Uri } from 'vscode';
import { RowItem } from './TreeDataProvider';

export default class RowTreeItem extends TreeItem {
    public constructor(
        element: RowItem,
        collapsibleState: TreeItemCollapsibleState = TreeItemCollapsibleState.None
    ) {
        super(element.text, collapsibleState);
        this.id = element.text;
        this.iconPath = new ThemeIcon('account');
        this.resourceUri = this.getUri(element);
    }

    public getUri(element: RowItem) {
        const query = new URLSearchParams({
            tooltip: 'tippy tippy tool tip; taps the tippy tap',
            badge: '●',
            colorId: 'red'
        }).toString();

        return Uri.from({
            scheme: 'treeItem',
            path: `${element.text}`,
            query
        });
    }
}
