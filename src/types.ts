import {
  ElementDefinition_BindingStrengthKind as ElementDefinitionBindingStrengthKind,
  ICodeSystem_Concept as ICodeSystemConcept,
  IElementDefinition,
  IElementDefinition_Type as IElementDefinitionType,
  IStructureDefinition,
  IStructureDefinition_Snapshot as IStructureDefinitionSnapshot
} from '@ahryman40k/ts-fhir-types/lib/R4';

export type FetchedIds = {
  resource: string;
  search: any;
};

export type ResourceState = {
  requestId?: string;
  resources: { id: string }[];
  structureDefinition: IStructureDefinition | undefined;
  extensionStructureDefinition: IStructureDefinition | undefined;
  selectedResourceId: string | undefined;
  loading: boolean;
  error: Error | undefined;
  structureDefMeta: boolean;
  currentElementDefinition?: IElementDefinition;
};

export type FetchedData = {
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
  type: string | IElementDefinitionType[] | undefined;
  children: RenderAttributesTree[];
  min: number | undefined;
  max: string;
  definition: string;
  binding?: {
    strength?: ElementDefinitionBindingStrengthKind;
    valueSet?: ICodeSystemConcept[];
  };
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
  type: string | IElementDefinitionType[] | undefined;
  definition: string;
  min: number | undefined;
  max: string;
  binding?: {
    strength?: ElementDefinitionBindingStrengthKind;
    valueSet?: ICodeSystemConcept[];
  };
}
