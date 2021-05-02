import { EventEmitter, Type } from '@angular/core';
import { ActionableSearchItem } from '../actionableSearchItem';
/** @internal */
export declare class ResultsHeaderComponent {
    search: string;
    resultsHeaderComponent: Type<any>;
    resultsHeaderLabel: string;
    displayResultsHeaderLabel: boolean;
    actionableSearchItem: ActionableSearchItem;
    actionButtonClick: EventEmitter<void>;
    onActionButtonClick(): void;
    /**
     * Whether the `ResultsHeaderItemComponent` is displayed.
     *
     * Custom component displayed above Results Header Label
     */
    showResultsHeaderItem(): boolean;
}
