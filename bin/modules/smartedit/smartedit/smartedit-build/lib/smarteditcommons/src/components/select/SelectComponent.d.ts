import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, Type } from '@angular/core';
import { LogService } from '@smart/utils';
import { L10nService } from '../../services';
import { FetchStrategy, SelectApi, SelectDisableChoice, SelectItem, SelectKeyup, SelectOnRemove, SelectOnSelect, SelectReset } from './interfaces';
import { ActionableSearchItem } from './actionableSearchItem';
/**
 * Represents dropdown menu with filtering capabilities which is customizable with an item component.
 *
 * There are two modes `Single Select` and `Multi Select`.
 *
 * By default, a `Single Select` dropdown will be displayed, which allows to select only one option.
 * A selected option is displayed in dropdown as highlighted.
 *
 * `Multi Select` dropdown allows to select multiple options whose sequence can be changed with Drag and Drop.
 * To switch to Multi Select set `multiSelect` to true.
 * Selected options are not displayed in dropdown.
 *
 * Component can work in both paged and non paged mode: providing either fetchAll or fetchPage function in the fetchStrategy will determine the flavour of the dropdown.
 * Works exclusively with Infinite Scrolling.
 *
 * Note:
 * For custom Results Header template, only one of `resultsHeaderComponent`, `resultsHeaderLabel` must be passed.
 *
 * @example
 * Single Select
 *
 * <se-select
 *   [id]="1"
 *   [(model)]="model"
 *   [fetch-strategy]="fetchStrategy">
 * </se-select>
 *
 * Multi Select
 *
 * <se-select
 *   [id]="2"
 *   [multiSelect]="true"
 *   [(model)]="model"
 *   [fetch-strategy]="fetchStrategy">
 * </se-select>
 */
export declare class SelectComponent<T extends SelectItem> implements OnInit, OnChanges {
    private l10nService;
    private logService;
    private cdr;
    readonly isSingleCss: boolean;
    readonly isMultiCss: boolean;
    /** Used to identify elements like container, selected, dropdown list */
    id: string;
    /** Model whose value is selected item id */
    model: string | string[];
    /**
     * Notifies that model has changed.
     *
     * Values when there is no option selected:
     * Single Select - undefined
     *
     * Multi Select - []
     */
    modelChange: EventEmitter<string | string[]>;
    /**
     * fetchStrategy strategy object containing the necessary functions to populate the dropdown:
     *
     * `fetchStrategy.fetchAll` - function required to fetch all items for a given optional mask.
     * fetchAll will be called without arguments upon initialization and with a mask every time the search section receives an input.
     * It must return a promise resolving to a list of items.
     * Every item must have a property "id" used for identification. If no itemTemplate is provided, these items will need to display a "label" property.
     *
     * `fetchStrategy.fetchPage` - function required to fetch a page for a given optional mask.
     * fetchPage must fulfill the contract of fetchPage from {@link InfiniteScrollingComponent#fetchPage}
     * It must return a promise resolving to a page of items as per Page.
     * Every item must have a property "id" used for identification. If no itemTemplate is provided, these items will need to display a "label" property.
     *
     * `fetchStrategy.fetchEntity` - function to fetch an option by its identifier when we are in paged mode (fetchPage is defined) and the dropdown is initialized with a value.
     */
    fetchStrategy: FetchStrategy<T>;
    /**
     * Adds controls such as the magnifier and the remove button.
     *
     * For Single Select it will display magnifier and remove icon on selected item.
     * Clicking on remove icon will remove selected item from the model.
     */
    controls: boolean;
    /** Whether the component should be displayed as Multi Select */
    multiSelect: boolean;
    /**
     * False (non-paged dropdown) => when next time entities are fetched which returns some entities without the entities I have previously selected, it will remove these entities.
     * False (paged dropdown) => - || - must call reset(true) to remove them
     * True => will not remove
     *
     * a non-paged dropdown: if the value is set to false, the widget will remove the selected entities in the model that no longer match the values available on the server.
     */
    keepModelOnReset: boolean;
    /** Whether component is disabled  */
    isReadOnly: boolean;
    /**
     * Data for `ActionableSearchItemComponent` that will display the component if provided.
     */
    actionableSearchItem?: ActionableSearchItem;
    /** Component that will be displayed on top of the result list (above `resultsHeadersLabel`). */
    resultsHeaderComponent?: Type<any>;
    /**
     * The label that will be displayed on top of the result list
     * when there is at least one option (previously filtered by the Search Input) to select.
     * e.g. "Select Option".
     *
     * Can be either text or translation string.
     */
    resultsHeaderLabel?: string;
    /** A function to disable results in the dropdown. It is invoked for each item in the dropdown, with a single parameter, the item itself. */
    disableChoiceFn?: SelectDisableChoice<T>;
    /**
     * Placeholder text for Search Input / Toggle Button.
     * Can be either text or translation string.
     *
     * Single Select -
     * For Search Input, it is displayed when an item is selected.
     * For Toggle Button text, it is displayed when no item is selected.
     *
     * Multi Select - displayed all the time for Search Input
     */
    placeholder?: string;
    /**
     * The component that will be used to display items in both the dropdown and the selection.
     * "itemComponent" has access to item, selected and the Select Component controller.
     * Item is the item to print, selected is a boolean that is true when the template is used in the selection as opposed to the dropdown menu.
     *
     * Default template will be:
     * ```
     * <span>{{ ((data.item.label || data.item.name) | seL10n | async) | translate }}</span>
     * ```
     */
    itemComponent?: Type<any>;
    /**
     * Single Select - whether the Search Input is displayed.
     *
     * Multi Select - if set to false, search input will be displayed as readonly.
     */
    searchEnabled: boolean;
    /** Whether to clear the search input after selecting an option */
    resetSearchInput: boolean;
    /**
     * A function that will be called when:
     * - On initial items fetch
     * - Option has been selected. For Single Select it will not be called when selected option is clicked
     * - Selected option is removed
     * - Parent changes the model
     * - `Multi Select` - Drag & Drop of an option has changed its order
     */
    onChange?: () => void;
    /** A function that will be called when item was removed from selection */
    onRemove?: SelectOnRemove<T>;
    /** A function that will be called when item was selected */
    onSelect?: SelectOnSelect<T>;
    /** A function that will be called on keyup event in search input */
    keyup?: SelectKeyup;
    /**
     * Whether to display the remove icon for selected item.
     *
     * Note: Meant for Single Select only.
     */
    showRemoveButton: boolean;
    /** Exposes the Select API object */
    getApi: EventEmitter<SelectApi>;
    /** A function that will be called when Select Component is reset */
    reset: SelectReset;
    resetChange: EventEmitter<SelectReset>;
    /** Items displayed in dropdown */
    items: T[];
    constructor(l10nService: L10nService, logService: LogService, cdr: ChangeDetectorRef);
    setValidationState(validationState: string): void;
    resetValidationState(): void;
    hasError(): boolean;
    hasWarning(): boolean;
    fetchEntity(modelId: string): Promise<T>;
    /**
     * Refetch because the data on the backed might have changed since last fetch.
     *
     * Note: Meant for "FetchAll" strategy only.
     */
    refreshOptions(mask: string): void;
    isValidConfiguration(): void;
}
