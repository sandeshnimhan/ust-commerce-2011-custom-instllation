import { Placement } from 'popper.js';
/**
 * @ngdoc component
 * @name smarteditCommonsModule.component:HelpComponent
 * @element se-help
 *
 * @description
 * This component will generate a help button that will show a customizable popover on top of it when hovering.
 * It relies on the {@link TooltipComponent TooltipComponent}.
 *
 * @param {String} template the HTML body to be used in the popover body, it will automatically be trusted by the directive. Optional but exactly one of either template or templateUrl must be defined.
 * @param {String} templateUrl the location of the HTML template to be used in the popover body. Optional but exactly one of either template or templateUrl must be defined.
 * @param {String} title the title to be used in the popover title section. Optional.
 */
export declare class HelpComponent {
    title: string;
    template: string;
    templateUrl: string;
    trigger: string[];
    placement: Placement;
}
