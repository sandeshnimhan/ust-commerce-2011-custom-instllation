import { ElementRef, EventEmitter } from '@angular/core';
/**
 * Represents Search Input for Select Component.
 *
 * @internal
 */
export declare class SearchInputComponent {
    private elementRef;
    isDisabled: boolean;
    isReadOnly: boolean;
    placeholder: string;
    search: string;
    searchKeyup: EventEmitter<{
        event: Event;
        value: string;
    }>;
    searchChange: EventEmitter<string>;
    searchInput: ElementRef;
    constructor(elementRef: ElementRef);
    readonly nativeElement: any;
    readonly inputElement: any;
    focus(): void;
    onChange(value: string): void;
    onKeyup(event: KeyboardEvent): void;
}
