import { TreeDataProvider, TreeItem } from "vscode";
import RowTreeItem from './RowTreeItem';
import HeaderTreeItem from "./HeaderTreeItem";

export interface RowItem {
	text: string
}

export interface HeaderItem {
	headerText: string;
	section: number;
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
			return [
				{headerText: 'section 1', section: 1},
				{headerText: 'section 2', section: 2}
			];
		}
		if (isHeaderTreeItem(element)) {
			if (element.section === 1) {
				return [
					{text: 'section 1 value one'},
					{text: 'section 1 value two'},
					{text: 'section 1 value three'}	
				];
			}
			if (element.section == 2) {
				return [
					{text: 'section 2 value one'},
					{text: 'section 2 value two'},
					{text: 'section 2 value three'}	
				];
			}
		}

		return [];
	}
}