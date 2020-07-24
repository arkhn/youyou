import { AttributeDefinition } from '@arkhn/fhir.ts';

export interface IAttributeDefinition {
  attribute: AttributeDefinition;
  extensions?: IStructureDefinition[];
}
export interface IStructureDefinition {
  id: string;
  attributes: IAttributeDefinition[];
  extensions?: IStructureDefinition[];
}