/// <reference types="angular" />
/// <reference types="jquery" />
/// <reference types="eonasdan-bootstrap-datetimepicker" />
export declare class SliderPanelZIndexHelper {
    static BLACKLISTED_NODE_NAMES: Set<string>;
    getHighestZIndex(node: JQuery<HTMLElement>): number;
    private filterBlacklistedNodes;
    private mapToZIndexIntegers;
    private getChildrenNodesFromTreeOrLeaf;
}
