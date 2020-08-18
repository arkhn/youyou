import { StructureDefinition } from "../../resources/ts/r4/core/resources/structure_definition_pb";
import { DataFetched } from "../reducers/resource";

export const SELECT_RESOURCE = 'SELECT_RESOURCE';
export const GET_FETCH_START = 'GET_FETCH_START';
export const GET_IDS_SUCCESS = 'GET_IDS_SUCCESS';
export const GET_IDS_FAILURE = 'GET_IDS_FAILURE';
export const GET_STRUCTUREDEF_SUCCESS = 'GET_STRUCTUREDEF_SUCCESS';
export const GET_STRUCTUREDEF_FAILURE = 'GET_STRUCTUREDEF_FAILURE';
export const SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE';


export type SelectResourceAction = {
    type: typeof SELECT_RESOURCE,
    payload: string
}

export type GetFetchStartAction = {
    type: typeof GET_FETCH_START,
}

export type GetIdsSuccessAction = {
    type: typeof GET_IDS_SUCCESS,
    payload: DataFetched[],
}

export type GetIdsFailureAction = {
    type: typeof GET_IDS_FAILURE,
    payload: Error
}

export type GetStructureDefSuccessAction = {
    type: typeof GET_STRUCTUREDEF_SUCCESS,
    payload: StructureDefinition.AsObject | null,
}

export type GetStructureDefFailureAction = {
    type: typeof GET_STRUCTUREDEF_FAILURE,
    payload: Error
}

export type SelectAttributeAction = {
    type: typeof SELECT_ATTRIBUTE,
    payload: string | null,
}

export const selectResource = (id: string): SelectResourceAction => {
    return {
        type: SELECT_RESOURCE,
        payload: id 
    }
}

export const getFetchStart = (): GetFetchStartAction => {
    return {
        type: GET_FETCH_START
    }
}

export const getIdsSuccess = (data: DataFetched[]): GetIdsSuccessAction => {
    return {
        type: GET_IDS_SUCCESS,
        payload: data
    }
}

export const getIdsFailure = (error: Error): GetIdsFailureAction => {
    return {
        type: GET_IDS_FAILURE,
        payload: error
    }
}

export const getStructureDefSuccess = (data: StructureDefinition.AsObject): GetStructureDefSuccessAction => {
    return {
        type: GET_STRUCTUREDEF_SUCCESS,
        payload: data
    }
}

export const getStructureDefFailure = (error: Error): GetStructureDefFailureAction => {
    return {
        type: GET_STRUCTUREDEF_FAILURE,
        payload: error
    }
}

export const selectAttributeId = (data: string): SelectAttributeAction => {
    return {
        type: SELECT_ATTRIBUTE,
        payload: data
    }
}


export type ResourceAction = SelectResourceAction