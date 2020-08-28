import { CodeSystem } from "../../resources/ts/proto/r4/core/resources/code_system_pb";

export const GET_CODESYSTEMDATATYPE_SUCCESS = "GET_CODESYSTEMDATATYPE_SUCCESS";
export const GET_CODESYSTEMDATATYPE_FAILURE = "GET_CODESYSTEMDATATYPE_FAILURE";

export type GetCodeSystemDataTypeSuccessAction = {
  type: typeof GET_CODESYSTEMDATATYPE_SUCCESS;
  payload: CodeSystem.AsObject | null;
};

export type GetCodeSystemDataTypeFailureAction = {
  type: typeof GET_CODESYSTEMDATATYPE_FAILURE;
  payload: Error;
};

export const getCodeSystemDataTypeSuccess = (
  data: CodeSystem.AsObject
): GetCodeSystemDataTypeSuccessAction => {
  return {
    type: GET_CODESYSTEMDATATYPE_SUCCESS,
    payload: data
  };
};

export const getCodeSystemDataTypeFailure = (
  error: Error
): GetCodeSystemDataTypeFailureAction => {
  return {
    type: GET_CODESYSTEMDATATYPE_FAILURE,
    payload: error
  };
};
