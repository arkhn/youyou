import { DataFetched } from "src/state/reducers/resource";
import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";

export const SELECT_RESOURCE = "SELECT_RESOURCE";
export const GET_FETCH_START = "GET_FETCH_START";
export const GET_IDS_SUCCESS = "GET_IDS_SUCCESS";
export const GET_IDS_FAILURE = "GET_IDS_FAILURE";
export const UPDATE_STRUCTURE_DEF_PROFILE = "UPDATE_STRUCTURE_DEF_PROFILE";
export const UPDATE_STRUCTURE_DEF_EXTENSION = "UPDATE_STRUCTURE_DEF_EXTENSION";
export const UPDATE_STRUCTURE_DEF_FAILURE = "UPDATE_STRUCTURE_DEF_FAILURE";
export const SELECT_ATTRIBUTE = "SELECT_ATTRIBUTE";

export type SelectResourceAction = {
  type: typeof SELECT_RESOURCE;
  payload: string | null;
};

export type GetFetchStartAction = {
  type: typeof GET_FETCH_START;
};

export type GetIdsSuccessAction = {
  type: typeof GET_IDS_SUCCESS;
  payload: DataFetched[];
};

export type GetIdsFailureAction = {
  type: typeof GET_IDS_FAILURE;
  payload: Error;
};

export type UpdateStructureDefProfileAction = {
  type: typeof UPDATE_STRUCTURE_DEF_PROFILE;
  payload: IStructureDefinition | null;
};

export type UpdateStructureDefFailureAction = {
  type: typeof UPDATE_STRUCTURE_DEF_FAILURE;
  payload: Error;
};

export type SelectAttributeAction = {
  type: typeof SELECT_ATTRIBUTE;
  payload: string | undefined;
};

export type UpdateStructureDefExtensionAction = {
  type: typeof UPDATE_STRUCTURE_DEF_EXTENSION;
  payload: IStructureDefinition | null;
};

export const selectResource = (id: string): SelectResourceAction => {
  return {
    type: SELECT_RESOURCE,
    payload: id
  };
};

export const getFetchStart = (): GetFetchStartAction => {
  return {
    type: GET_FETCH_START
  };
};

export const getIdsSuccess = (data: DataFetched[]): GetIdsSuccessAction => {
  return {
    type: GET_IDS_SUCCESS,
    payload: data
  };
};

export const getIdsFailure = (error: Error): GetIdsFailureAction => {
  return {
    type: GET_IDS_FAILURE,
    payload: error
  };
};

export const updateStructureDefProfile = (
  data: IStructureDefinition
): UpdateStructureDefProfileAction => {
  return {
    type: UPDATE_STRUCTURE_DEF_PROFILE,
    payload: data
  };
};

export const updateStructureDefFailure = (
  error: Error
): UpdateStructureDefFailureAction => {
  return {
    type: UPDATE_STRUCTURE_DEF_FAILURE,
    payload: error
  };
};

export const selectAttributeId = (
  data: string | undefined
): SelectAttributeAction => {
  return {
    type: SELECT_ATTRIBUTE,
    payload: data
  };
};

export const updateStructureDefExtension = (
  data: IStructureDefinition
): UpdateStructureDefExtensionAction => {
  return {
    type: UPDATE_STRUCTURE_DEF_EXTENSION,
    payload: data
  };
};

export type ResourceAction = SelectResourceAction;
