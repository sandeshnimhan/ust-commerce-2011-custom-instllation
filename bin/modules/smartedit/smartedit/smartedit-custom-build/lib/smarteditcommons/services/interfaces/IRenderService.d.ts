/// <reference types="angular" />
/// <reference types="jquery" />
/// <reference types="eonasdan-bootstrap-datetimepicker" />
/**
 * @ngdoc service
 * @name smarteditServicesModule.service:IRenderService
 *
 * @description
 * The renderService is responsible for rendering and resizing component overlays, and re-rendering components and slots
 * from the storefront.
 */
import { CrossFrameEventService, INotificationService, IPageInfoService, IPerspectiveService, ModalService, SystemEventService } from '../';
import { WindowUtils } from 'smarteditcommons/utils/WindowUtils';
export declare abstract class IRenderService {
    protected yjQuery: JQueryStatic;
    protected systemEventService: SystemEventService;
    private notificationService;
    private pageInfoService;
    private perspectiveService;
    protected crossFrameEventService: CrossFrameEventService;
    private windowUtils;
    private modalService;
    private readonly HOTKEY_NOTIFICATION_CONFIGURATION;
    private readonly KEY_CODES;
    constructor(yjQuery: JQueryStatic, systemEventService: SystemEventService, notificationService: INotificationService, pageInfoService: IPageInfoService, perspectiveService: IPerspectiveService, crossFrameEventService: CrossFrameEventService, windowUtils: WindowUtils, modalService: ModalService);
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:IRenderService#renderSlots
     * @methodOf smarteditServicesModule.service:IRenderService
     *
     * @description
     * Re-renders a slot in the page
     *
     * @param {Promise} promise a promise
     */
    renderSlots(_slotIds: string[] | string): Promise<any>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:IRenderService#renderComponent
     * @methodOf smarteditServicesModule.service:IRenderService
     *
     * @description
     * Re-renders a component in the page.
     *
     * @param {String} componentId The ID of the component.
     * @param {String} componentType The type of the component.
     * @param {String} customContent The custom content to replace the component content with. If specified, the
     * component content will be rendered with it, instead of the accelerator's. Optional.
     *
     * @returns {Promise} Promise that will resolve on render success or reject if there's an error. When rejected,
     * the promise returns an Object{message, stack}.
     */
    renderComponent(componentId: string, componentType: string): Promise<string | boolean>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:IRenderService#renderRemoval
     * @methodOf smarteditServicesModule.service:IRenderService
     *
     * @description
     * This method removes a component from a slot in the current page. Note that the component is only removed
     * on the frontend; the operation does not propagate to the backend.
     *
     * @param {String} componentId The ID of the component to remove.
     * @param {String} componentType The type of the component.
     *
     * @returns {Object} Object wrapping the removed component.
     */
    renderRemoval(componentId: string, componentType: string, slotId: string): JQuery;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:IRenderService#renderPage
     * @methodOf smarteditServicesModule.service:IRenderService
     *
     * @description
     * Re-renders all components in the page.
     * this method first resets the HTML content all of components to the values saved by {@link smarteditServicesModule.service:decoratorService#methods_storePrecompiledComponent} at the last $compile time
     * then requires a new compilation.
     */
    renderPage(isRerender: boolean): void;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:IRenderService#toggleOverlay
     * @methodOf smarteditServicesModule.service:IRenderService
     *
     * @description
     * Toggles on/off the visibility of the page overlay (containing the decorators).
     *
     * @param {Boolean} showOverlay Flag that indicates if the overlay must be displayed.
     */
    toggleOverlay(isVisible: boolean): void;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:IRenderService#refreshOverlayDimensions
     * @methodOf smarteditServicesModule.service:IRenderService
     *
     * @description
     * This method updates the position of the decorators in the overlay. Normally, this method must be executed every
     * time the original storefront content is updated to keep the decorators correctly positioned.
     *
     */
    refreshOverlayDimensions(): void;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:IRenderService#blockRendering
     * @methodOf smarteditServicesModule.service:IRenderService
     *
     * @description
     * Toggles the rendering to be blocked or not which determines whether the overlay should be rendered or not.
     *
     * @param {Boolean} isBlocked Flag that indicates if the rendering should be blocked or not.
     */
    blockRendering(isBlocked: boolean): void;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:IRenderService#isRenderingBlocked
     * @methodOf smarteditServicesModule.service:IRenderService
     *
     * @description
     * This method returns a boolean that determines whether the rendering is blocked or not.
     *
     * @param {Boolean} An indicator if the rendering is blocked or not.
     */
    isRenderingBlocked(): Promise<boolean>;
    protected _getDocument(): Document;
    private _bindEvents;
    private _keyUpEventHandler;
    private _shouldEnableKeyPressEvent;
    private _keyPressEvent;
    private _clickEvent;
    private _areAllModalWindowsClosed;
}
