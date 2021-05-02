import { ITreeNodeItem, TreeNodeItemDTO } from './types';
/**
 * @ngdoc service
 * @name TreeModule.service:TreeNodeItemFactory
 * @description
 * A service used to generate instance of node item to be consumed by {@link TreeModule.component:TreeComponent TreeComponent}
 */
export declare class TreeNodeItemFactory {
    /**
     * @ngdoc method
     * @name TreeModule.service:TreeNodeItemFactory#get
     * @methodOf TreeModule.service:TreeNodeItemFactory
     * @param {Object} dto DTO based on which the class is returned
     * @description
     *
     * Returns a class depending on itemtype
     */
    get<T, D extends TreeNodeItemDTO>(dto: D): ITreeNodeItem<T>;
}
