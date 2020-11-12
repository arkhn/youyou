import {
  ICodeSystem_Concept as ICodeSystemConcept,
  IElementDefinition_Type as IElementDefinitionType,
  IStructureDefinition,
  IStructureDefinition_Snapshot as IStructureDefinitionSnapshot
} from '@ahryman40k/ts-fhir-types/lib/R4';

export type FetchedData = {
  resource: string;
  search: any;
};

export type ResourceState = {
  resources: { id: string }[];
  structureDefinition: IStructureDefinition | null;
  extensionStructureDefinition: IStructureDefinition | null;
  selectedResourceId: string | null;
  selectedAttributeId: string | undefined;
  loading: boolean;
  error: Error | null;
  structureDefMeta: boolean;
};

export type FetchedDataCodeSystem = {
  resource: {
    concept: ICodeSystemConcept;
    name: string;
  };
  search: any;
};

export type fhirDataState = {
  resource: {
    name: string;
    snapshot: IStructureDefinitionSnapshot;
  };
  search: {
    mode: string;
  };
};

export interface RenderAttributesTree {
  name: string;
  id: string;
  type: string | IElementDefinitionType[];
  children: RenderAttributesTree[];
  min: number | null;
  max: string;
  definition: string;
  valueSet?: ICodeSystemConcept[];
  newPath?: string;
}

export interface RenderComplexType {
  name: string;
  id: string;
  type: string | IElementDefinitionType[];
  children: RenderComplexType[][];
  min: number | null;
  max: string;
  definition: string;
  valueSet?: ICodeSystemConcept[];
}

export interface SimplifiedAttributes {
  path: string;
  type: string | IElementDefinitionType[];
  definition: string;
  min: number | null;
  max: string;
  valueSet?: ICodeSystemConcept[];
}
