import { RenderAttributesTree } from "types";

export const GET_FHIR_TYPES_FETCH_START = "GET_TYPES_FETCH_START";
export const GET_FHIR_TYPES_FETCH_SUCCESS = "GET_FHIR_TYPES_FETCH_SUCCESS";
export const GET_FHIR_TYPES_FETCH_FAILURE = "GET_FHIR_TYPES_FETCH_FAILURE";

export type GetFhirTypesFetchStartAction = {
  type: typeof GET_FHIR_TYPES_FETCH_START;
};

export type GetFhirTypesFetchSuccessAction = {
  type: typeof GET_FHIR_TYPES_FETCH_SUCCESS;
  payload: {
    primitiveTypes: string[];
    complexTypes: RenderAttributesTree[];
    structureDefinitionTree: RenderAttributesTree[];
  };
};

export type GetFhirTypesFetchFailureAction = {
  type: typeof GET_FHIR_TYPES_FETCH_FAILURE;
  payload: Error;
};

export const getFhirTypesFetchStart = (): GetFhirTypesFetchStartAction => {
  return {
    type: GET_FHIR_TYPES_FETCH_START
  };
};

export const getFhirTypesFetchSuccess = (
  primitiveTypes: string[],
  complexTypes: RenderAttributesTree[],
  structureDefinitionTree: RenderAttributesTree[]
): GetFhirTypesFetchSuccessAction => {
  return {
    type: GET_FHIR_TYPES_FETCH_SUCCESS,
    payload: {
      primitiveTypes,
      complexTypes,
      structureDefinitionTree
    }
  };
};

export const getFhirTypesFetchFailure = (
  error: Error
): GetFhirTypesFetchFailureAction => {
  return {
    type: GET_FHIR_TYPES_FETCH_FAILURE,
    payload: error
  };
};
