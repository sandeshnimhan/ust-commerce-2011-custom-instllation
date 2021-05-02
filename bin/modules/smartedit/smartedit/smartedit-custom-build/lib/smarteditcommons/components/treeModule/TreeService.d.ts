import { IRestService, RestServiceFactory } from '@smart/utils';
import { Observable } from 'rxjs';
import { TreeNestedDataSource } from './TreeNestedDataSource';
import { ITreeNodeItem, TreeNodeItemDTO } from './types';
import { TreeNodeItemFactory } from './TreeNodeItemFactory';
/**
 * @ngdoc service
 * @name TreeModule.service:TreeService
 *
 * @description
 * A class to manage tree nodes through a REST API.
 */
export declare class TreeService<T, D extends TreeNodeItemDTO> {
    private restServiceFactory;
    private treeNodeItemFactory;
    nodesRestService: IRestService<D | D[]>;
    dataSource: TreeNestedDataSource<ITreeNodeItem<T>>;
    root: ITreeNodeItem<T>;
    private $onTreeUpdated;
    constructor(restServiceFactory: RestServiceFactory, treeNodeItemFactory: TreeNodeItemFactory);
    onTreeUpdated(): Observable<boolean>;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#init
     * @methodOf TreeModule.service:TreeService
     * @param {string} nodeUri URI passed to {@link TreeModule.component:TreeComponent TreeComponent}
     * @param {string} rootNodeUid root uid passed to {@link TreeModule.component:TreeComponent TreeComponent}
     *
     * @description
     *
     * Initializes the REST service and sets root node
     */
    init(nodeUri: string, rootNodeUid: string): void;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#rearrange
     * @methodOf TreeModule.service:TreeService
     * @param {ITreeNodeItem} node {@link TreeModule.object:ITreeNodeItem node} to be rearranged
     * @param {number} position New position of node
     *
     * @description
     *
     * Updates the position of the node within the tree
     */
    rearrange(node: ITreeNodeItem<T>, parent: ITreeNodeItem<T>, position: number): void;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#fetchChildren
     * @methodOf TreeModule.service:TreeService
     * @param {ITreeNodeItem} parent {@link TreeModule.object:ITreeNodeItem node}
     *
     * @description
     *
     * Fetches the node children and updates the tree
     *
     */
    fetchChildren(_parent?: ITreeNodeItem<T>): Promise<ITreeNodeItem<T>[]>;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#toggle
     * @methodOf TreeModule.service:TreeService
     * @param {ITreeNodeItem} node {@link TreeModule.object:ITreeNodeItem node} to be rearranged
     *
     * @description
     *
     * Toggles the passed node and fetches children
     */
    toggle(node: ITreeNodeItem<T>): Promise<ITreeNodeItem<T>[]>;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#newChild
     * @methodOf TreeModule.service:TreeService
     * @param {ITreeNodeItem} node {@link TreeModule.object:ITreeNodeItem node} to be rearranged
     *
     * @description
     *
     * Adds a new child to passed node
     */
    newChild(node?: ITreeNodeItem<T>): Promise<void>;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#newSibling
     * @methodOf TreeModule.service:TreeService
     * @param {ITreeNodeItem} node {@link TreeModule.object:ITreeNodeItem node} to be rearranged
     *
     * @description
     *
     * Adds new sibling to passed node
     */
    newSibling(node: ITreeNodeItem<T>): Promise<void>;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#remvoeNode
     * @methodOf TreeModule.service:TreeService
     * @param {ITreeNodeItem} node {@link TreeModule.object:ITreeNodeItem node} to be rearranged
     *
     * @description
     *
     * Removes passed node
     */
    removeNode(node: ITreeNodeItem<T>): Promise<void>;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#update
     * @methodOf TreeModule.service:TreeService
     *
     * @description
     *
     * Updates the data source from where the nodes are retrieved
     */
    update(): void;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#expandAll
     * @methodOf TreeModule.service:TreeService
     *
     * @description
     *
     * Expands all nodes from the root node
     */
    expandAll(): void;
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeService#collapseAll
     * @methodOf TreeModule.service:TreeService
     *
     * @description
     *
     * Collapses all nodes from the root node
     */
    collapseAll(): void;
    getNodePositionById(nodeUid: string): number;
    getNodeById(nodeUid: string, nodeArray?: ITreeNodeItem<T>[]): ITreeNodeItem<T>;
    private saveNode;
    private setRoot;
}
