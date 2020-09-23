import { Color } from "@material-ui/lab";
import {
  SetSnackbarOpenAction,
  SET_SNACKBAR_OPEN
} from "state/actions/snackbarActions";

export type SnackbarState = {
  message: string;
  severity: Color | undefined;
};

const initialSnackbarState = {
  message: "",
  severity: undefined
};

export type AllSnackbarActions = SetSnackbarOpenAction;

export const snackbarReducer = (
  state: SnackbarState = initialSnackbarState,
  action: AllSnackbarActions
): SnackbarState => {
  switch (action.type) {
    case SET_SNACKBAR_OPEN:
      return {
        ...state,
        message: action.payload.message,
        severity: action.payload.severity
      };
    default:
      return state;
  }
};
