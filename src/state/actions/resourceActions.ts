import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";

export const SELECT_RESOURCE = 'SELECT_RESOURCE';
export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';


export type SelectResourceAction = {
    type: typeof SELECT_RESOURCE,
    id: string
}

export type GetDataStartAction = {
    type: typeof GET_DATA_START,
    payload: boolean
}

export type GetDataSuccessAction = {
    type: typeof GET_DATA_SUCCESS,
    payload: IStructureDefinition[]
}

export type GetDataFailureAction = {
    type: typeof GET_DATA_FAILURE,
    payload: string
}

export const selectResource = (id: string): SelectResourceAction => {
    return {
        type: SELECT_RESOURCE,
        id
    }
}

export const getDataStart = (loading: boolean): GetDataStartAction => {
    return {
        type: GET_DATA_START,
        payload: loading
    }
}

export const getDataSuccess = (allDatas: IStructureDefinition[]): GetDataSuccessAction => {
    return {
        type: GET_DATA_SUCCESS,
        payload: allDatas
    }
}

export const getDataFailure = (error: string): GetDataFailureAction => {
    return {
        type: GET_DATA_FAILURE,
        payload: error
    }
}


export type ResourceAction = SelectResourceAction