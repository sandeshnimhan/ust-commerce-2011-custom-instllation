import { NavigationNode, TreeActions, TreeDragOptions } from '../../tree';
/**
 * @ngdoc directive
 * @name yEditableListModule.directive:yEditableList
 * @scope
 * @restrict E
 * @element y-editable-list
 * @deprecated since 2005
 * @description
 * Deprecated, use se-editable-list
 * The yEditableList component allows displaying a list of items. The list can be managed dynamically, by
 * adding, removing, and re-ordering it.
 * @param {@String} id A string used to track and identify the component.
 * @param {<Array} items The collection of items to display in the component.
 * @param {=Function=} refresh A function that can be called to update the content of the list.
 * @param {<Function} onChange A function that will be called whenever the content of the list changes.
 * @param {<String=} itemTemplateUrl The path to the template to display each of the items in the list.
 * @param {<boolean=} editable The property specifies whether the content of the list can be modified.
 */
export declare class YEditableListComponent {
    dragOptions: TreeDragOptions;
    actions: TreeActions;
    onChange: () => void;
    itemTemplateUrl: string;
    editable: boolean;
    refresh: () => void;
    items: NavigationNode[];
    rootId: string;
    id: string;
    private _enableDragAndDrop;
    $onInit(): void;
    private getTreeActions;
    private getDropdownItems;
}
