import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { FetchedData } from "types";
import { AxiosResponse } from "axios";

import api from "services/api";
import {
  getFetchStart,
  getIdsSuccess,
  getIdsFailure,
  updateStructureDefProfile,
  updateStructureDefFailure
} from "state/actions/resourceActions";
import {
  getCodeSystemDataTypeSuccess,
  getCodeSystemDataTypeFailure,
  getCodeSystemDataTypePending
} from "state/actions/codeSystemActions";
import { RootState } from "state/store";

import {
  IStructureDefinition,
  IElementDefinition,
  IElementDefinition_Type
} from "@ahryman40k/ts-fhir-types/lib/R4";

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
export const requestResource = (resource: string) => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getFetchStart());
    const response: AxiosResponse<any> = await api.get(
      `/StructureDefinition?kind=resource&derivation=specialization&id=${resource}`
    );
    if (response.status === 200) {
      dispatch(updateStructureDefProfile(response.data.entry[0].resource));
    } else {
      dispatch(updateStructureDefFailure(new Error(response.statusText)));
    }
  };
};

// // FETCH DATA TYPES
// export const requestDataTypes = () => {
//   return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
//     dispatch(getCodeSystemDataTypePending());
//     const response: AxiosResponse<any> = await api.get(
//       "/CodeSystem?id=data-types"
//     );
//     if (response.status === 200) {
//       dispatch(getCodeSystemDataTypeSuccess(response.data.entry[0].resource));
//     } else {
//       dispatch(getCodeSystemDataTypeFailure(new Error(response.statusText)));
//     }
//   };
// };

// FETCH AVAILABLE DATA TYPES FOR EXTENSIONS
export const requestExtensionDataTypes = () => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getCodeSystemDataTypePending());
    const response: AxiosResponse<any> = await api.get(
      "/StructureDefinition?derivation=specialization&name=extension"
    );
    const resource: IStructureDefinition = response.data.entry[0].resource;
    let codes: string[] = [];
    resource.differential?.element.forEach((element: IElementDefinition) => {
      //FIXME
      if (element.id === "Extension.value[x]") {
        codes =
          element?.type
            ?.map((e: IElementDefinition_Type) => e.code!)
            .filter(Boolean) || [];
      }
      codes = codes?.filter(Boolean);
    });
    if (response.status === 200) {
      dispatch(getCodeSystemDataTypeSuccess(codes));
    } else {
      dispatch(getCodeSystemDataTypeFailure(new Error(response.statusText)));
    }
  };
};
