import api from "../services/api";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "./store";
import { Action } from "redux";
import {
  getFetchStart,
  getIdsSuccess,
  getIdsFailure,
  getStructureDefSuccess,
  getStructureDefFailure
} from "./actions/resourceActions";
import {
  getCodeSystemDataTypeSuccess,
  getCodeSystemDataTypeFailure
} from "./actions/codeSystemActions";
import { FetchedData } from "./../types";
import { AxiosResponse } from "axios";
import { String } from "../resources/ts/proto/r4/core/datatypes_pb";

// FETCH ALL RESOURCE IDS
export const requestIds = () => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getFetchStart());
    const response: AxiosResponse<any> = await api.get(
      `/StructureDefinition?kind=resource&derivation=specialization&_elements=id&_count=150`
    );
    if (response.status === 200) {
      dispatch(
        getIdsSuccess(
          response.data.entry.map((result: FetchedData) => {
            return result.resource;
          })
        )
      );
    } else {
      dispatch(getIdsFailure(new Error(response.statusText)));
    }
  };
};

// FETCH RESOURCE SELECTED
export const requestResource = (resource: String.AsObject) => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getFetchStart());
    const response: AxiosResponse<any> = await api.get(
      `/StructureDefinition?kind=resource&derivation=specialization&id=${resource}`
    );
    if (response.status === 200) {
      dispatch(getStructureDefSuccess(response.data.entry[0].resource));
    } else {
      dispatch(getStructureDefFailure(new Error(response.statusText)));
    }
  };
};

// FETCH DATA TYPES
export const requestDataTypes = (codeSystemName: string = "data-types") => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    const response: AxiosResponse<any> = await api.get(
      `/CodeSystem?id=${codeSystemName}`
    );
    if (response.status === 200) {
      dispatch(getCodeSystemDataTypeSuccess(response.data.entry[0].resource));
    } else {
      dispatch(getCodeSystemDataTypeFailure(new Error(response.statusText)));
    }
  };
};
