import {
  GET_CODE_SYSTEM_DATA_TYPE_SUCCESS,
  GET_CODE_SYSTEM_DATA_TYPE_FAILURE,
  GET_CODE_SYSTEM_DATA_TYPE_PENDING,
  GetCodeSystemDataTypeSuccessAction,
  GetCodeSystemDataTypeFailureAction,
  GetCodeSystemDataTypePendingAction
} from "src/state/actions/codeSystemActions";
import { ICodeSystem } from "@ahryman40k/ts-fhir-types/lib/R4";

export type DataFetched = {
  id: string;
};

export type CodeSystemState = {
  datatypes: ICodeSystem | null;
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
