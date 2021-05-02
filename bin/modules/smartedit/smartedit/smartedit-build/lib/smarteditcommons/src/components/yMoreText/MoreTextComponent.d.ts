import { TranslateService } from '@ngx-translate/core';
import { TextTruncateService } from '../../services';
/**
 * @ngdoc component
 * @name SmarteditCommonsModule.component:MoreTextComponent
 * @element se-more-text
 * @description
 * The component for truncating strings and adding an ellipsis.
 * If the limit is less then the string length then the string is truncated and 'more'/'less' buttons
 * are displayed to expand or collapse the string.
 *
 * @param {< String} text the text to be displayed
 * @param {< String =} limit index in text to truncate to. Default value is 100.
 * @param {< String =} moreLabelI18nKey the label property value for a more button. Default value is 'more'.
 * @param {< String =} lessLabelI18nKey the label property value for a less button. Default value is 'less'.
 * @param {< String =} ellipsis the ellipsis for a truncated text. Default value is an empty string.
 */
export declare class MoreTextComponent {
    private textTruncateService;
    private translate;
    text: string;
    limit?: number;
    moreLabelI18nKey?: string;
    lessLabelI18nKey?: string;
    ellipsis?: string;
    linkLabel: string;
    isTruncated: boolean;
    private showingMore;
    private moreLabel;
    private lessLabel;
    private truncatedText;
    constructor(textTruncateService: TextTruncateService, translate: TranslateService);
    ngOnInit(): void;
    showHideMoreText(): void;
    private translateLabels;
}
