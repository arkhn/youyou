import { Color } from "@material-ui/lab";

export const SET_SNACKBAR_OPEN = "SET_SNACKBAR_OPEN";
export const SET_SNACKBAR_CLOSE = "SET_SNACKBAR_CLOSE";

export type SetSnackbarOpenAction = {
  type: typeof SET_SNACKBAR_OPEN;
  payload: {
    message: string;
    severity: Color | undefined;
  };
};

export const setSnackbarOpen = (
  severity: Color | undefined,
  message: string
): SetSnackbarOpenAction => {
  return {
    type: SET_SNACKBAR_OPEN,
    payload: {
      message,
      severity
    }
  };
};
