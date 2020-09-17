import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import { setSnackbarClose } from "state/actions/snackbarActions";

import { Snackbar } from "@material-ui/core";
import { Alert, Color } from "@material-ui/lab";

const SnackbarWithButton: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(
    (state: RootState) => state.snackbarReducer
  );

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbarClose());
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        severity={severity as Color}
        variant="filled"
        onClose={handleClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarWithButton;
