import { TypedMap } from '@smart/utils';
export declare abstract class ISmartEditContractChangeListener {
    _newMutationObserver(callback: MutationCallback): MutationObserver;
    _newIntersectionObserver(callback: IntersectionObserverCallback): IntersectionObserver;
    _addToComponentQueue(entry: IntersectionObserverEntry): void;
    _componentsQueueLength(): number;
    isExtendedViewEnabled(): boolean;
    setEconomyMode(_mode: boolean): void;
    initListener(): void;
    _processQueue(): void;
    isIntersecting(obj: ComponentEntry): boolean;
    _rawProcessQueue(): void;
    _addComponents(componentsObj: ComponentEntry[]): void;
    _removeComponents(componentsObj: RemoveComponentObject[], forceRemoval?: boolean): void;
    _registerSizeAndPositionListeners(component: HTMLElement): void;
    _unregisterSizeAndPositionListeners(component: HTMLElement): void;
    stopListener(): void;
    _stopExpendableListeners(): void;
    _startExpendableListeners(): void;
    onComponentsAdded(callback: (components: HTMLElement[], isEconomyMode: boolean) => void): void;
    onComponentsRemoved(callback: (components: {
        component: HTMLElement;
        parent: HTMLElement;
    }[], isEconomyMode: boolean) => void): void;
    onComponentChanged(callback: (component: HTMLElement, oldAttributes: TypedMap<string>) => void): void;
    onComponentResized(callback: (component: HTMLElement) => void): void;
    onComponentRepositioned(callback: (component: HTMLElement) => void): void;
    onPageChanged(callback: (pageUUID: string) => void): void;
}
