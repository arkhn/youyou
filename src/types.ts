import {
  ICodeSystem,
  ICodeSystem_Concept,
  IElementDefinition_Type,
  IStructureDefinition,
  IStructureDefinition_Snapshot
} from "@ahryman40k/ts-fhir-types/lib/R4";

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
    concept: ICodeSystem_Concept;
    name: string;
  };
  search: any;
};

export type fhirDataState = {
  resource: {
    name: string;
    snapshot: IStructureDefinition_Snapshot;
  };
  search: {
    mode: string;
  };
};

export interface RenderAttributesTree {
  name: string;
  id: string;
  type: string | IElementDefinition_Type[];
  children: RenderAttributesTree[];
  min: number | null;
  max: string;
  definition: string;
  valueSet?: ICodeSystem_Concept[];
}

export interface RenderComplexType {
  name: string;
  id: string;
  type: string | IElementDefinition_Type[];
  children: RenderComplexType[][];
  min: number | null;
  max: string;
  definition: string;
  valueSet?: ICodeSystem_Concept[];
}

export interface SimplifiedAttributes {
  path: string;
  type: string | IElementDefinition_Type[];
  definition: string;
  min: number | null;
  max: string;
  valueSet?: ICodeSystem_Concept[];
}
