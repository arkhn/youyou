import { IElementDefinition_Type } from "@ahryman40k/ts-fhir-types/lib/R4";
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
      const isPrimitive = (
        type: string | IElementDefinition_Type[],
        primitiveTypes: PrimitiveTypesType[]
      ) =>
        primitiveTypes.some(
          (primitive: PrimitiveTypesType) => type === primitive.name
        ) ||
        type === "http://hl7.org/fhirpath/System.String" ||
        type === "Extension" ||
        type === "Reference";

      const createComplexTypes = (
        complex: RenderAttributesTree[],
        types: RenderAttributesTree[],
        primitive: PrimitiveTypesType[]
      ) => {
        for (const type of types) {
          if (!isPrimitive(type.type, primitive)) {
            const toFind = complex.find((item) => item.name === type.type);
            if (toFind) type.children = toFind.children;
            createComplexTypes(complex, type.children, primitive);
          }
        }
        return types;
      };

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
