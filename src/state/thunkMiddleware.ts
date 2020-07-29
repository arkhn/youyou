import api from '../services/api';
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "./store";
import { Action } from 'redux';
import { getDataStart, getDataSuccess, getDataFailure } from './actions/resourceActions';
import { FetchedData } from './../types'

export const getData = () => {
    return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
        dispatch(getDataStart(true));
        const response = await api.get('/StructureDefinition?kind=resource&derivation=specialization&_count=150')
        if (response.status === 200) {
            dispatch(getDataSuccess(response.data.entry.map((result: FetchedData) => {
                return result.resource
            })))
        } else {
            dispatch(getDataFailure(response.statusText))
        }
    }
}