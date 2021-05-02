import { GenericEditorOption } from '../../../genericEditor/types';
export declare type ISeDropdownSelectedOption = GenericEditorOption;
export interface ISeDropdownSelectedOptionEventData<T extends ISeDropdownSelectedOption = ISeDropdownSelectedOption> {
    qualifier: string;
    optionObject: T;
}
