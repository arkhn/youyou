import {
  GetFhirTypesFetchFailureAction,
  GetFhirTypesFetchStartAction,
  GetFhirTypesFetchSuccessAction,
  GET_FHIR_TYPES_FETCH_FAILURE,
  GET_FHIR_TYPES_FETCH_START,
  GET_FHIR_TYPES_FETCH_SUCCESS
} from "state/actions/fhirDataTypesActions";

export type FhirDataTypesState = {
  primitiveTypes: { name: string }[];
  loading: boolean;
  error: Error | null;
};

const initialState: FhirDataTypesState = {
  primitiveTypes: [],
  loading: false,
  error: null
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
        loading: true
      };
    case GET_FHIR_TYPES_FETCH_SUCCESS:
      return {
        ...state,
        primitiveTypes: action.payload,
        loading: false,
        error: null
      };
    case GET_FHIR_TYPES_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
