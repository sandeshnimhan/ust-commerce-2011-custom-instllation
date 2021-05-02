import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
/**
 * @ngdoc directive
 * @name smarteditCommonsModule.directive:ResizeObserverDirective
 * @element [seResizeObserver]
 *
 * @description
 * Angular directive used to listen to ElementRef resize event. It emits an event once the {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver ResizeObserver}
 * detects the change.
 *
 * @example
 *
 * <my-custom-component seResizeObserver (onResize)="handleResize()"></my-custom-component>
 */
export declare class ResizeObserverDirective implements OnInit, OnDestroy {
    private elementRef;
    onResize: EventEmitter<void>;
    private observer;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private startWatching;
    private internalOnResize;
}
