import { Injector, SimpleChanges } from '@angular/core';
import { TreeComponent } from './TreeComponent';
import { TreeService } from './TreeService';
import { ITreeNodeItem } from './types';
import { CompileHtmlNgController } from '../../directives';
export declare class TreeNodeRendererComponent<T, D> {
    private tree;
    private treeService;
    private injector;
    node: ITreeNodeItem<T>;
    nodeComponentInjector: Injector;
    legacyController: CompileHtmlNgController;
    constructor(tree: TreeComponent<T, D>, treeService: TreeService<T, D>, injector: Injector);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    toggle($event: Event): void;
    onMouseOver(): void;
    onMouseOut(): void;
    getPaddingLeft(level: number): string;
    readonly showAsList: boolean;
    readonly isDisabled: boolean;
    readonly collapsed: boolean;
    readonly displayDefaultTemplate: boolean;
    readonly isRootNodeDescendant: boolean;
    private createNodeLegacyController;
    private createNodeComponentInjector;
}
