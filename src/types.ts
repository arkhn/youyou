import { AttributeDefinition } from '@arkhn/fhir.ts';
import { ResourceState } from './state/reducers/resource';

export interface IAttributeDefinition {
  attribute: AttributeDefinition;
  extensions?: IStructureDefinition[];
}
export interface IStructureDefinition {
  id: string;
  attributes: IAttributeDefinition[];
  extensions?: IStructureDefinition[];
}

export interface IReduxStore {
  resource: ResourceState
}

export type FetchedData = {
  resource: IStructureDefinition,
  search: any
}