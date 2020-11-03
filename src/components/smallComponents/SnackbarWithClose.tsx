import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Snackbar } from "@material-ui/core";
import { Alert, Color } from "@material-ui/lab";

import { RootState } from "state/store";
import { setSnackbarOpen } from "state/actions/snackbarActions";

const SnackbarWithClose: React.FC<{}> = () => {
  const { message, severity } = useSelector(
    (state: RootState) => state.snackbarReducer
  );
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (message !== "" && severity) setOpen(true);
    else setOpen(false);
  }, [severity, message]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      onExited={() => {
        dispatch(setSnackbarOpen(undefined, message));
      }}
    >
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

export default SnackbarWithClose;
