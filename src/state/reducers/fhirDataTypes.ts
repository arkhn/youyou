import {
  GetFhirTypesFetchFailureAction,
  GetFhirTypesFetchStartAction,
  GetFhirTypesFetchSuccessAction,
  GET_FHIR_TYPES_FETCH_FAILURE,
  GET_FHIR_TYPES_FETCH_START,
  GET_FHIR_TYPES_FETCH_SUCCESS,
  PrimitiveTypesType
} from "state/actions/fhirDataTypesActions";
import { RenderNode } from "types";

export type FhirDataTypesState = {
  primitiveTypes: PrimitiveTypesType[];
  complexTypes: RenderNode[];
  loadingTypes: boolean;
  errorTypes: Error | null;
};

const initialState: FhirDataTypesState = {
  primitiveTypes: [],
  complexTypes: [],
  loadingTypes: false,
  errorTypes: null
};

type allFhirDataTypesAction =
  | GetFhirTypesFetchSuccessAction
  | GetFhirTypesFetchStartAction
  | GetFhirTypesFetchFailureAction;

export const fhirDataTypes = (
  state: FhirDataTypesState = initialState,
  action: allFhirDataTypesAction
): FhirDataTypesState => {
  switch (action.type) {
    case GET_FHIR_TYPES_FETCH_START:
      return {
        ...state,
        loadingTypes: true
      };
    case GET_FHIR_TYPES_FETCH_SUCCESS:
      return {
        ...state,
        primitiveTypes: action.payload.primitiveTypes,
        complexTypes: action.payload.complexTypes,
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
