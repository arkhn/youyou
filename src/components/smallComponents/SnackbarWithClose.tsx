import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Snackbar } from '@material-ui/core';
import { Alert, Color } from '@material-ui/lab';

import { RootState, useAppDispatch } from 'state/store';
import { setSnackbarOpen } from 'state/actions/snackbarActions';

const SnackbarWithClose: React.FC<{}> = () => {
  const { message, severity } = useSelector(
    (state: RootState) => state.snackbarReducer
  );
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (message !== '' && severity) setOpen(true);
    else setOpen(false);
  }, [severity, message]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      onExited={(): void => {
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
