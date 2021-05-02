/**
 *  This component provides contextual feedback messages for the user actions. To provide title and description for the se-essage
 *  use transcluded elements: se-message-title and se-message-description.
 *
 *  @example
 *  <se-message>
 *      <div se-message-title>Title</div>
 *      <div se-message-description>Description</div>
 *  </se-message>
 */
export declare class MessageComponent {
    messageId: string;
    type: string;
    classes: string;
    ngOnInit(): void;
}
