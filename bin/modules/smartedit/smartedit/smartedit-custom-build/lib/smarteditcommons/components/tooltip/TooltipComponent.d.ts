import { Placement } from 'popper.js';
/**
 * @ngdoc component
 * @name TooltipComponent
 * @element se-tooltip
 *
 * @description
 * Used to display content in a popover after trigger is applied
 *  E.g usage
 *  <se-tooltip [triggers]="mouseover">
 *      <span se-tooltip-trigger>Hover me</span>
 *      <p se-tooltip-body>Content</p>
 *  </se-tooltip>
 *  @param {string[]} triggers Array of strings defining what event triggers popover to appear. Accepts any DOM {@link https://www.w3schools.com/jsref/dom_obj_event.asp events}
 */
export declare class TooltipComponent {
    triggers: string[];
    placement: Placement;
    title: string;
    appendTo: HTMLElement | 'body';
    isChevronVisible: boolean;
}
