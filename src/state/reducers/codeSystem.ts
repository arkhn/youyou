import { CodeSystem } from "../../resources/ts/proto/r4/core/resources/code_system_pb";
import {
  GET_CODE_SYSTEM_DATA_TYPE_SUCCESS,
  GET_CODE_SYSTEM_DATA_TYPE_FAILURE,
  GET_CODE_SYSTEM_DATA_TYPE_PENDING,
  GetCodeSystemDataTypeSuccessAction,
  GetCodeSystemDataTypeFailureAction,
  GetCodeSystemDataTypePendingAction
} from "../actions/codeSystemActions";

import { String } from "../../resources/ts/proto/r4/core/datatypes_pb";

export type DataFetched = {
  id: String.AsObject;
};

export type CodeSystemState = {
  datatypes: CodeSystem.AsObject | null;
  loading: boolean;
  error: Error | null;
};

const initialState: CodeSystemState = {
  datatypes: null,
  loading: false,
  error: null
};

export type AllCodeSystemActions =
  | GetCodeSystemDataTypeSuccessAction
  | GetCodeSystemDataTypeFailureAction
  | GetCodeSystemDataTypePendingAction;

export const codeSystem = (
  state: CodeSystemState = initialState,
  action: AllCodeSystemActions
): CodeSystemState => {
  switch (action.type) {
    case GET_CODE_SYSTEM_DATA_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        datatypes: action.payload,
        error: null
      };
    case GET_CODE_SYSTEM_DATA_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_CODE_SYSTEM_DATA_TYPE_PENDING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
