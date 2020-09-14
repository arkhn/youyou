import extensionStructureDefinition from "assets/extensionTemplate";
import {
  SELECT_RESOURCE,
  ResourceAction,
  GET_IDS_FAILURE,
  GetIdsFailureAction,
  GET_FETCH_START,
  GetFetchStartAction,
  GET_IDS_SUCCESS,
  GetIdsSuccessAction,
  UPDATE_STRUCTURE_DEF_PROFILE,
  UpdateStructureDefProfileAction,
  UPDATE_STRUCTURE_DEF_FAILURE,
  UpdateStructureDefFailureAction,
  SELECT_ATTRIBUTE,
  SelectAttributeAction,
  UPDATE_STRUCTURE_DEF_EXTENSION,
  UpdateStructureDefExtensionAction,
  SELECT_STRUCTUREDEFMETA,
  SelectStructureDefMetaAction
} from "state/actions/resourceActions";
import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";

export type DataFetched = {
  id: string;
};

export type ResourceState = {
  resources: DataFetched[];
  structureDefinition: IStructureDefinition | null;
  extensionStructureDefinition: IStructureDefinition | null;
  selectedResourceId: string | null;
  selectedAttributeId: string | undefined;
  loading: boolean;
  error: Error | null;
  selectStructureDefMeta: boolean;
};

const initialState: ResourceState = {
  resources: [],
  structureDefinition: null,
  extensionStructureDefinition: extensionStructureDefinition as IStructureDefinition,
  selectedResourceId: null,
  selectedAttributeId: undefined,
  loading: false,
  error: null,
  selectStructureDefMeta: true
};

export type AllResourcesAction =
  | GetIdsFailureAction
  | GetFetchStartAction
  | GetIdsSuccessAction
  | ResourceAction
  | UpdateStructureDefFailureAction
  | UpdateStructureDefProfileAction
  | SelectAttributeAction
  | UpdateStructureDefExtensionAction
  | SelectStructureDefMetaAction;

export const resource = (
  state: ResourceState = initialState,
  action: AllResourcesAction
): ResourceState => {
  switch (action.type) {
    case SELECT_RESOURCE:
      return {
        ...state,
        selectedResourceId: action.payload
      };
    case GET_FETCH_START:
      return {
        ...state,
        loading: true
      };
    case GET_IDS_SUCCESS:
      return {
        ...state,
        loading: false,
        resources: action.payload,
        error: null
      };
    case GET_IDS_FAILURE:
      return {
        ...state,
        loading: false,
        resources: [],
        error: action.payload
      };
    case UPDATE_STRUCTURE_DEF_PROFILE:
      return {
        ...state,
        loading: false,
        structureDefinition: action.payload,
        error: null
      };
    case UPDATE_STRUCTURE_DEF_FAILURE:
      return {
        ...state,
        loading: false,
        structureDefinition: null,
        error: action.payload
      };
    case SELECT_ATTRIBUTE:
      return {
        ...state,
        selectedAttributeId: action.payload,
        selectStructureDefMeta: false
      };
    case UPDATE_STRUCTURE_DEF_EXTENSION:
      return {
        ...state,
        loading: false,
        extensionStructureDefinition: action.payload,
        error: null
      };
    case SELECT_STRUCTUREDEFMETA:
      return {
        ...state,
        selectedAttributeId: undefined,
        selectStructureDefMeta: true
      };
    default:
      return state;
  }
};
