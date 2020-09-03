import { ICodeSystem } from "@ahryman40k/ts-fhir-types/lib/R4";

export const GET_CODE_SYSTEM_DATA_TYPE_SUCCESS =
  "GET_CODESYSTEMDATATYPE_SUCCESS";
export const GET_CODE_SYSTEM_DATA_TYPE_FAILURE =
  "GET_CODESYSTEMDATATYPE_FAILURE";
export const GET_CODE_SYSTEM_DATA_TYPE_PENDING =
  "GET_CODE_SYSTEM_DATA_TYPE_PENDING";

export type GetCodeSystemDataTypeSuccessAction = {
  type: typeof GET_CODE_SYSTEM_DATA_TYPE_SUCCESS;
  payload: ICodeSystem | null;
};

export type GetCodeSystemDataTypeFailureAction = {
  type: typeof GET_CODE_SYSTEM_DATA_TYPE_FAILURE;
  payload: Error;
};

export type GetCodeSystemDataTypePendingAction = {
  type: typeof GET_CODE_SYSTEM_DATA_TYPE_PENDING;
};

export const getCodeSystemDataTypeSuccess = (
  data: ICodeSystem
): GetCodeSystemDataTypeSuccessAction => {
  return {
    type: GET_CODE_SYSTEM_DATA_TYPE_SUCCESS,
    payload: data
  };
};

export const getCodeSystemDataTypeFailure = (
  error: Error
): GetCodeSystemDataTypeFailureAction => {
  return {
    type: GET_CODE_SYSTEM_DATA_TYPE_FAILURE,
    payload: error
  };
};
export const getCodeSystemDataTypePending = (): GetCodeSystemDataTypePendingAction => {
  return {
    type: GET_CODE_SYSTEM_DATA_TYPE_PENDING
  };
};
