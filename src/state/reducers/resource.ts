import { StructureDefinition } from "../../resources/ts/proto/r4/core/resources/structure_definition_pb";
import {
  ResourceAction,
  SELECT_RESOURCE,
  GET_IDS_SUCCESS,
  GetIdsFailureAction,
  GetFetchStartAction,
  GetIdsSuccessAction,
  GET_FETCH_START,
  GET_IDS_FAILURE,
  GetStructureDefFailureAction,
  GetStructureDefSuccessAction,
  GET_STRUCTUREDEF_SUCCESS,
  GET_STRUCTUREDEF_FAILURE,
  SELECT_ATTRIBUTE,
  SelectAttributeAction,
} from "../actions/resourceActions";
import { String } from "../../resources/ts/proto/r4/core/datatypes_pb";

export type DataFetched = {
  id: String.AsObject;
};

export type ResourceState = {
  resources: DataFetched[];
  structureDefinition: StructureDefinition.AsObject | null;
  selectedResourceId: String.AsObject | null;
  selectedAttributeId: String.AsObject | undefined;
  loading: boolean;
  error: Error | null;
};

const initialState: ResourceState = {
  resources: [],
  structureDefinition: null,
  selectedResourceId: null,
  selectedAttributeId: undefined,
  loading: false,
  error: null,
};

export type AllResourcesAction =
  | GetIdsFailureAction
  | GetFetchStartAction
  | GetIdsSuccessAction
  | ResourceAction
  | GetStructureDefFailureAction
  | GetStructureDefSuccessAction
  | SelectAttributeAction;

export const resource = (
  state: ResourceState = initialState,
  action: AllResourcesAction
): ResourceState => {
  switch (action.type) {
    case SELECT_RESOURCE:
      return {
        ...state,
        selectedResourceId: action.payload,
      };
    case GET_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case GET_IDS_SUCCESS:
      return {
        ...state,
        loading: false,
        resources: action.payload,
        error: null,
      };
    case GET_IDS_FAILURE:
      return {
        ...state,
        loading: false,
        resources: [],
        error: action.payload,
      };
    case GET_STRUCTUREDEF_SUCCESS:
      return {
        ...state,
        loading: false,
        structureDefinition: action.payload,
        error: null,
      };
    case GET_STRUCTUREDEF_FAILURE:
      return {
        ...state,
        loading: false,
        structureDefinition: null,
        error: action.payload,
      };
    case SELECT_ATTRIBUTE:
      return {
        ...state,
        selectedAttributeId: action.payload,
      };
    default:
      return state;
  }
};
