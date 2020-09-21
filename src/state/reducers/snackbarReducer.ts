import { Color } from "@material-ui/lab";
import {
  SetSnackbarOpenAction,
  SET_SNACKBAR_OPEN,
  SetSnackbarCloseAction,
  SET_SNACKBAR_CLOSE
} from "state/actions/snackbarActions";

export type SnackbarState = {
  open: boolean;
  message?: string;
  severity?: Color;
};

const initialSnackbarState = {
  open: false
};

export type AllSnackbarActions = SetSnackbarOpenAction | SetSnackbarCloseAction;

export const snackbarReducer = (
  state: SnackbarState = initialSnackbarState,
  action: AllSnackbarActions
): SnackbarState => {
  switch (action.type) {
    case SET_SNACKBAR_OPEN:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        severity: action.payload.severity
      };
    case SET_SNACKBAR_CLOSE:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};