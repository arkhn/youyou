import { IElementDefinition_Type } from "@ahryman40k/ts-fhir-types/lib/R4";
import { isPrimitive } from "components/structureDefSettings/utils";
import {
  GetFhirTypesFetchFailureAction,
  GetFhirTypesFetchStartAction,
  GetFhirTypesFetchSuccessAction,
  GET_FHIR_TYPES_FETCH_FAILURE,
  GET_FHIR_TYPES_FETCH_START,
  GET_FHIR_TYPES_FETCH_SUCCESS,
  PrimitiveTypesType
} from "state/actions/fhirDataTypesActions";
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
      const createComplexTypes = (
        complex: RenderAttributesTree[],
        types: RenderAttributesTree[],
        primitive: PrimitiveTypesType[]
      ) => {
        for (const type of types) {
          if (!isPrimitive(type.type, primitive)) {
            console.log(type);
            const toFind = complex.find((item) => item.name === type.type);
            if (toFind) type.children = toFind.children;
            createComplexTypes(complex, type.children, primitive);
          }
        }
      };

      createComplexTypes(
        action.payload.complexTypes,
        action.payload.complexTypes,
        action.payload.primitiveTypes
      );

      console.log(
        action.payload.complexTypes,
        action.payload.structureDefinitionTree
      );

      return {
        ...state,
        primitiveTypes: action.payload.primitiveTypes,
        complexTypes: action.payload.complexTypes,
        structureDefinitionTree: action.payload.structureDefinitionTree,
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
