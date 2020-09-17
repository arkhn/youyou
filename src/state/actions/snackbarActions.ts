import { Color } from "@material-ui/lab";

export const SET_SNACKBAR_OPEN = "SET_SNACKBAR_OPEN";
export const SET_SNACKBAR_CLOSE = "SET_SNACKBAR_CLOSE";

export type SetSnackbarOpenAction = {
  type: typeof SET_SNACKBAR_OPEN;
  payload: {
    message: string;
    severity: Color;
  };
};
export type SetSnackbarCloseAction = {
  type: typeof SET_SNACKBAR_CLOSE;
};

export const setSnackbarOpen = (
  message: string,
  severity: Color
): SetSnackbarOpenAction => {
  return {
    type: SET_SNACKBAR_OPEN,
    payload: {
      message,
      severity
    }
  };
};

export const setSnackbarClose = (): SetSnackbarCloseAction => {
  return {
    type: SET_SNACKBAR_CLOSE
  };
};
