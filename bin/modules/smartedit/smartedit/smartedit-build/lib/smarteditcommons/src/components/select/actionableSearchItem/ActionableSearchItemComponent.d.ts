import { EventEmitter } from '@angular/core';
import { SystemEventService } from '../../../services';
export interface ActionableSearchItem {
    /** Event Id to publish by `SystemEventService` */
    eventId?: string;
    /** Action button label */
    actionText?: string;
}
/**
 * Component displayed when there is no search results for given string in `SelectComponent`.
 * Contains of text and the Action Button which can be clicked by a user to publish
 * specified Event Id by `SystemEventService`.
 *
 * For example: It can be used to invoke an Event that will add a new item to the list.
 */
export declare class ActionableSearchItemComponent {
    private systemEventService;
    search: string;
    eventId?: ActionableSearchItem['eventId'];
    actionText?: ActionableSearchItem['actionText'];
    actionButtonClick: EventEmitter<void>;
    private readonly defaultEventId;
    private readonly defaultActionText;
    constructor(systemEventService: SystemEventService);
}
