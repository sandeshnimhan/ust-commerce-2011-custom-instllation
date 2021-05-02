import { Payload } from '@smart/utils';
import { GenericEditorField, GenericEditorOption } from '../../genericEditor/types';
export interface IDropdownPopulator {
    populate(payload: DropdownPopulatorPayload): PromiseLike<GenericEditorOption[]>;
    isPaged(): boolean;
    fetchAll(payload: DropdownPopulatorPayload): Promise<GenericEditorOption[]>;
    fetchPage(payload: DropdownPopulatorPagePayload): Promise<DropdownPopulatorFetchPageResponse>;
    populateAttributes(items: GenericEditorOption[], idAttribute: string, orderedLabelAttributes: string[]): GenericEditorOption[];
    search(items: GenericEditorOption[], searchTerm: string): Promise<GenericEditorOption[]> | Promise<GenericEditorOption[]>;
    getItem(payload: DropdownPopulatorItemPayload): Promise<GenericEditorOption>;
}
export interface DropdownPopulatorPayload {
    id?: string;
    field: GenericEditorField;
    model: Payload;
    selection: GenericEditorOption;
    search: string;
}
export interface DropdownPopulatorItemPayload {
    id: string;
    field: GenericEditorField;
    model: Payload;
}
export interface DropdownPopulatorPagePayload extends DropdownPopulatorPayload {
    pageSize: number;
    currentPage: number;
}
export interface DropdownPopulatorFetchPageResponse {
    field: GenericEditorField;
    [index: string]: any;
}
