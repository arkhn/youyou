import {
  ICodeSystem,
  ICodeSystem_Concept,
  IElementDefinition_Type,
  IStructureDefinition_Snapshot,
  IResourceList,
  IOperationOutcome,
  IBundle_Entry,
  IBundle
} from "@ahryman40k/ts-fhir-types/lib/R4";

export type FetchedData = {
  resource: string;
  search: any;
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

export type FHIR_API_Response<T extends IResourceList> =
  | TypedBundle<T>
  | T
  | IOperationOutcome

  export interface TypedEntry<T extends IResourceList> extends IBundle_Entry {
    resource?: T
  }
  
  export interface TypedBundle<T extends IResourceList> extends IBundle {
    entry?: TypedEntry<T>[]
  }