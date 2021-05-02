import { GenericEditorOption } from '../../genericEditor/types';
export interface IDropdownPopulator {
    populate(payload: DropdownPopulatorPayload): PromiseLike<GenericEditorOption[]>;
    isPaged(): boolean;
    fetchAll(payload: DropdownPopulatorPayload): Promise<GenericEditorOption[]>;
    fetchPage(payload: DropdownPopulatorPagePayload): Promise<DropdownPopulatorFetchPageResponse>;
    populateAttributes(items: GenericEditorOption[], idAttribute: string, orderedLabelAttributes: string[]): GenericEditorOption[];
    search(items: GenericEditorOption[], searchTerm: string): Promise<GenericEditorOption[]> | Promise<GenericEditorOption[]>;
    getItem(payload: DropdownPopulatorItemPayload): Promise<GenericEditorOption>;
}
