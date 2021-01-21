import React from 'react';

import {
  Button,
  Dialog,
  IconButton,
  Paper,
  Typography
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { Alert, AlertTitle } from '@material-ui/lab';

import { CssTextField } from 'components/smallComponents';
import { OpenDialogState } from 'components/profileEditor/ProfileEditor';

import useStyles from './style';

type SliceDialogBoxProps = {
  attributeSelected: OpenDialogState;
  sliceNameError: {
    error: boolean;
    message: string;
  };
  onCloseClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onChangeName: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SliceDialogBox: React.FC<SliceDialogBoxProps> = ({
  attributeSelected,
  sliceNameError,
  onChangeName,
  onCloseClick,
  onFormSubmit
}) => {
  const classes = useStyles();
  const { open, add, message } = attributeSelected;

  return (
    <Dialog open={open}>
      <Paper className={classes.dialogBoxContainer}>
        <div className={classes.dialogBoxHeader}>
          <Typography variant="h1" className={classes.dialogBoxTitle}>
            {message && message.title}
          </Typography>
          <IconButton onClick={onCloseClick} className={classes.dialogBoxClose}>
            <Clear color="error" />
          </IconButton>
        </div>
        {message && message.text !== '' && (
          <Typography className={classes.dialogBoxText}>
            {message.text}
          </Typography>
        )}
        {sliceNameError.error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <Typography>{sliceNameError.message}</Typography>
          </Alert>
        )}
        <form onSubmit={onFormSubmit}>
          {add && (
            <CssTextField
              variant="outlined"
              label="slice name"
              autoFocus
              error={sliceNameError.error}
              onChange={onChangeName}
            />
          )}
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            className={add ? classes.dialogBoxButton : undefined}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Dialog>
  );
};

export default SliceDialogBox;
