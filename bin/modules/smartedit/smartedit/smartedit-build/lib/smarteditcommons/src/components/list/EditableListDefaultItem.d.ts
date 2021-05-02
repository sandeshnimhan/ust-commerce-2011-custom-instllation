import { ITreeNodeItem } from '../treeModule';
import { EditableListNodeItem } from './EditableListNodeItem';
import { EditableListComponent } from './EditableListComponent';
export declare class EditableListDefaultItem {
    parent: EditableListComponent;
    node: ITreeNodeItem<EditableListNodeItem>;
    constructor(parent: EditableListComponent, node: ITreeNodeItem<EditableListNodeItem>);
}
