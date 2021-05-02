import { EventEmitter, Type } from '@angular/core';
import { IDropdownMenuItem } from '../dropdown/dropdownMenu';
import { ITreeNodeItem, TreeDragAndDropOptions, TreeNodeActions } from '../treeModule';
import { EditableListNodeItem, EditableListNodeItemDTO } from 'smarteditcommons/components/list/EditableListNodeItem';
/**
 * The EditableListComponent component allows displaying a list of items. The list can be managed dynamically, by
 * adding, removing, and re-ordering it.
 *
 * @example
 * <se-editable-list
 *      [itemComponent]="myComponent"
 *      [(items)]="items"
 *      [onChange]="onChange"
 *      [editable]="editable"
 *      [(refresh)]="refresh"
 * ></se-editable-list>
 */
export declare class EditableListComponent {
    dragOptions: TreeDragAndDropOptions<EditableListNodeItem>;
    actions: TreeNodeActions<EditableListNodeItem>;
    rootId: string;
    refresh: () => void;
    items: EditableListNodeItemDTO[];
    onChange: () => void;
    itemTemplateUrl: string;
    itemComponent: Type<any>;
    editable: boolean;
    id: string;
    refreshChange: EventEmitter<() => void>;
    itemsChange: EventEmitter<ITreeNodeItem<EditableListNodeItem>[]>;
    private _enableDragAndDrop;
    ngOnInit(): void;
    handleTreeUpdated(items: ITreeNodeItem<EditableListNodeItem>[]): void;
    getDropdownItems(): IDropdownMenuItem[];
    private getTreeActions;
}
