import {
  ICodeSystem,
  ICodeSystem_Concept,
  IStructureDefinition_Snapshot
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

export interface RenderNode {
  name: string;
  id: string;
  type: string;
  min: number | null;
  max: string;
  children: RenderNode[];
  valueSet?: ICodeSystem_Concept;
}

export interface IComplexTypes {
  path: string;
  type: string;
  short: string;
  min: number | null;
  max: string;
  valueSet?: ICodeSystem_Concept;
}
