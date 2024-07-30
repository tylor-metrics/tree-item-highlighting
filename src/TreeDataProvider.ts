import { TreeDataProvider, TreeItem } from "vscode";
import RowTreeItem from './RowTreeItem';
import HeaderTreeItem from "./HeaderTreeItem";

export interface RowItem {
	text: string
}

export interface HeaderItem {
	headerText: string
}

type Element = RowItem | HeaderItem;

const isRowTreeItem = (entry: Element): entry is RowItem => 'text' in entry;
const isHeaderTreeItem = (entry: Element): entry is HeaderItem => 'headerText' in entry;

export default class DemoTreeDataProvider implements TreeDataProvider<Element> {

	constructor() {}
	public getTreeItem(element: Element): TreeItem{
		if (isRowTreeItem(element)) {
			return new RowTreeItem(element);
		}
		return new HeaderTreeItem(element);
    }

	public async getChildren(element: Element): Promise<Element[]> {
		if (element === undefined) {
			return [{headerText: 'the section'}];
		}
		if (isHeaderTreeItem(element)) {
			return [
				{text: 'value one'},
				{text: 'value two'},
				{text: 'value three'}	
			];
		}

		return [];
	}
}