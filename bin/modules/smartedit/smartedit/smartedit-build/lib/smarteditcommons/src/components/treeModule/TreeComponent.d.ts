import { EventEmitter, Type } from '@angular/core';
import { TypedMap } from '@smart/utils';
import { TreeService } from './TreeService';
import { TreeDragAndDropService } from './TreeDragAndDropService';
import { ITreeNodeItem, TreeDragAndDropOptions } from './types';
/**
 * @ngdoc component
 * @name TreeModule.component:TreeComponent
 *
 * @element se-tree
 * @description
 * This components renders a tree of nodes and manages CRUD operations around the nodes.
 * <br/>It relies on {@link https://material.angular.io/cdk angular/cdk} third party library
 * @param {String} nodeTemplateUrl an HTML node template to be included besides each node to enhance rendering and behaviour of the tree. This template may use the nodeActions defined hereunder.
 * @param {Type<any>} nodeComponent Angular component to be rendered as tree node
 * @param {String} nodeUri the REST entry point to be used to manage the nodes (GET, POST, PUT and DELETE).
 * @param {Object} dragOptions a {@link TreeModule.object:TreeDragAndDropOptions map} of callback functions to customize the drag and drop behaviour of the tree by exposing the {@link TreeModule.object:TreeDragAndDropEvent TreeDragAndDropEvent}.
 * @param {String} nodeActions a map of methods to be closure-bound to the instance of the component in order to manage the tree from the parent scope or from the optional node template.
 * <br/> All nodeActions methods must take {@link TreeModule.service:TreeService TreeService} instance as first parameter.
 * <br/> {@link TreeModule.service:TreeService treeService} instance will then prebound in the closure made available in the node template or in the parent scope.
 * <br/> Example in a parent controller:
 * <pre>
 * 	this.actions = {
 * 		myMethod(treeService, arg1, arg2) {
 * 			//some action expecting 'this'
 * 			//to be the YTreeController
 * 			this.newChild(treeService.root.nodes[0]);
 * 		}
 * 	};
 * </pre>
 * Passed to the component through:
 * <pre>
 * AngularJS: <se-tree [node-uri]='ctrl.nodeURI' [node-template-url]='ctrl.nodeTemplateUrl' [node-actions]='ctrl.actions'/>
 * Angular: <se-tree [nodeUri]='nodeURI' [nodeComponent]='nodeComponent' [nodeActions]='actions'/>
 * </pre>
 * The legacy template is bound to AngularJS controller, actions may be invoked it this way:
 * <pre>
 * <button data-ng-click="$ctrl.myMethod('arg1', 'arg2')">my action</button>
 * </pre>
 *
 * <br>
 *     Note: "this" context in the template node no longer refers to AngularJS tree handle as the library is no longer used, instead use "node"
 *     variable accessible from the template scope which represents
 *     current node. The TreeService is updated to accept node reference.
 * </br>
 *
 * Example(before):
 *
 * <pre>
 *     <button data-ng-click="$ctrl.myMethod(this)">my action</button>
 * </pre>
 *
 * Example(now):
 *
 * <pre>
 *     <button data-ng-click="$ctrl.myMethod(node)">my action</button>
 * </pre>
 *
 * In Angular component inject the parent TreeComponent reference into your node component constructor to access actions and invoke it like this:
 *
 * <pre>
 *     <button (click)="treeComponentRef.myMethod('arg1', 'arg2')">my action</button>
 * </pre>
 */
export declare class TreeComponent<T, D> {
    private treeService;
    private treeDragAndDropService;
    nodeTemplateUrl: string;
    nodeComponent: Type<any>;
    nodeUri: string;
    nodeActions: TypedMap<(...args: any[]) => void>;
    rootNodeUid: string;
    dragOptions: TreeDragAndDropOptions<T>;
    removeDefaultTemplate: string;
    showAsList: boolean;
    onTreeUpdated: EventEmitter<ITreeNodeItem<T>[]>;
    isDropDisabled: boolean;
    constructor(treeService: TreeService<T, D>, treeDragAndDropService: TreeDragAndDropService<T, D>);
    ngOnInit(): void;
    fetchData(nodeData: ITreeNodeItem<T>): Promise<ITreeNodeItem<T>[]>;
    /**
     * @ngdoc method
     * @name TreeModule.component:TreeComponent#hasChildren
     * @methodOf TreeModule.component:TreeComponent
     * @description
     * Return a boolean to determine if the node is expandable or not by checking if a given node has children
     * @param {ITreeNodeItem} node {@link TreeModule.object:ITreeNodeItem ITreeNodeItem}
     */
    hasChildren(node: ITreeNodeItem<T>): boolean;
    /**
     * @ngdoc method
     * @name TreeModule.component:TreeComponent#collapseAll
     * @methodOf TreeModule.component:TreeComponent
     * @description
     * Causes all the nodes of the tree to collapse.
     * It does not affect their "initiated" status though.
     */
    collapseAll(): void;
    /**
     * @ngdoc method
     * @name TreeModule.component:TreeComponent#expandAll
     * @methodOf TreeModule.component:TreeComponent
     * @description
     * Causes all the nodes of the tree to expand.
     * It does not affect their "initiated" status though.
     */
    expandAll(): void;
    /**
     * @ngdoc method
     * @name TreeModule.component:TreeComponent#remove
     * @methodOf TreeModule.component:TreeComponent
     * @description
     * Will remove node referenced by the parameter.
     * <br/>The child is added only if {@link TreeModule.service:TreeService#removeNode removeNode} from {@link TreeModule.service:TreeService TreeService} is successful.
     * @param {ITreeNodeItem} node {@link TreeModule.object:ITreeNodeItem ITreeNodeItem}
     */
    remove(node: ITreeNodeItem<T>): void;
    /**
     * @ngdoc method
     * @name TreeModule.component:TreeComponent#newChild
     * @methodOf TreeModule.component:TreeComponent
     * @description
     * Will add a new sibling to the node referenced by the parameter.
     * <br/>The child is added only if {@link TreeModule.service:TreeService#saveNode saveNode} from {@link TreeModule.service:TreeService TreeService} is successful.
     * @param {ITreeNodeItem} node {@link TreeModule.object:ITreeNodeItem ITreeNodeItem}
     */
    newSibling(node: ITreeNodeItem<T>): void;
    /**
     * @ngdoc method
     * @name TreeModule.component:TreeComponent#refresh
     * @methodOf TreeModule.component:TreeComponent
     * @description
     * Will refresh a node, causing it to expand after fetch if it was expanded before.
     */
    refresh(node: ITreeNodeItem<T>): Promise<ITreeNodeItem<T>[]>;
    /**
     * @ngdoc method
     * @name TreeModule.component:TreeComponent#refreshParent
     * @methodOf TreeModule.component:TreeComponent
     * @description
     * Will refresh a node, causing it to expand after fetch if it was expanded before.
     */
    refreshParent(node: ITreeNodeItem<T>): void;
    /**
     * @ngdoc method
     * @name TreeModule.component:TreeComponent#newChild
     * @methodOf TreeModule.component:TreeComponent
     * @description
     * Will add a new child to the node referenced by the parameter.
     * <br/>The child is added only if {@link TreeModule.service:TreeService#saveNode saveNode} from {@link TreeModule.service:TreeService TreeService} is successful.
     * @param {ITreeNodeItem} node {@link TreeModule.object:ITreeNodeItem ITreeNodeItem}
     */
    newChild(node?: ITreeNodeItem<T>): Promise<void>;
    /**
     * @ngdoc method
     * @name TreeModule.component:TreeComponent#getNodeById
     * @methodOf TreeModule.component:TreeComponent
     * @description
     * Will fetch from the existing tree the node whose identifier is the given nodeUid
     * @param {String} nodeUid the identifier of the node to fetched
     */
    getNodeById(nodeUid: string, nodeArray?: ITreeNodeItem<T>[]): ITreeNodeItem<T>;
    readonly dragEnabled: boolean;
    private setNodeActions;
}
