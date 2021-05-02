import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TreeDragAndDropService } from './TreeDragAndDropService';
import { ITreeNodeItem } from './types';
export declare class TreeNodeComponent<T, D> {
    private treeDragAndDropService;
    source: ITreeNodeItem<T>[];
    constructor(treeDragAndDropService: TreeDragAndDropService<T, D>);
    readonly isDisabled: boolean;
    onDrop(event: CdkDragDrop<ITreeNodeItem<T>[]>): void;
}
