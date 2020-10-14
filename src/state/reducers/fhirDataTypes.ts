import {
  GetFhirTypesFetchFailureAction,
  GetFhirTypesFetchStartAction,
  GetFhirTypesFetchSuccessAction,
  GET_FHIR_TYPES_FETCH_FAILURE,
  GET_FHIR_TYPES_FETCH_START,
  GET_FHIR_TYPES_FETCH_SUCCESS,
  PrimitiveTypesType
} from "state/actions/fhirDataTypesActions";

import { createComplexTypes } from "state/utils";
import { RenderAttributesTree } from "types";

export type FhirDataTypesState = {
  primitiveTypes: PrimitiveTypesType[];
  complexTypes: RenderAttributesTree[];
  loadingTypes: boolean;
  errorTypes: Error | null;
  structureDefinitionTree: RenderAttributesTree[];
};

const initialState: FhirDataTypesState = {
  primitiveTypes: [],
  complexTypes: [],
  loadingTypes: false,
  errorTypes: null,
  structureDefinitionTree: []
};

type AllFhirDataTypesAction =
  | GetFhirTypesFetchSuccessAction
  | GetFhirTypesFetchStartAction
  | GetFhirTypesFetchFailureAction;

export const fhirDataTypes = (
  state: FhirDataTypesState = initialState,
  action: AllFhirDataTypesAction
): FhirDataTypesState => {
  switch (action.type) {
    case GET_FHIR_TYPES_FETCH_START:
      return {
        ...state,
        loadingTypes: true
      };
    case GET_FHIR_TYPES_FETCH_SUCCESS:
      const complexTypes = createComplexTypes(
        action.payload.complexTypes,
        action.payload.complexTypes,
        action.payload.primitiveTypes
      );
      const structureDefinitionTree = createComplexTypes(
        action.payload.complexTypes,
        action.payload.structureDefinitionTree,
        action.payload.primitiveTypes
      );
      return {
        ...state,
        primitiveTypes: action.payload.primitiveTypes,
        complexTypes: complexTypes,
        structureDefinitionTree: structureDefinitionTree,
        loadingTypes: false,
        errorTypes: null
      };
    case GET_FHIR_TYPES_FETCH_FAILURE:
      return {
        ...state,
        errorTypes: action.payload
      };
    default:
      return state;
  }
};
