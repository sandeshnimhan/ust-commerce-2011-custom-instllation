import { FormGroupSchema, FormSchema } from '@smart/utils';
import { GenericEditorFieldsMap, GenericEditorTab } from '../types';
export interface SchemaDataMapper {
    id: string;
    toValue(): any;
    toSchema(): FormSchema;
}
/**
 * A schema and data mapper for the GenericEditorRootTabsComponent.
 */
export declare class RootSchemaDataMapper {
    private mappers;
    private tabs;
    private fieldsMap;
    constructor(mappers: SchemaDataMapper[], tabs: GenericEditorTab[], fieldsMap: GenericEditorFieldsMap);
    toValue(): any;
    toSchema(): FormGroupSchema;
}
