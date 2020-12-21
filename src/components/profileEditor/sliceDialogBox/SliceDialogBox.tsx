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
  return (
    <Dialog open={attributeSelected.open}>
      <Paper>
        <IconButton onClick={onCloseClick}>
          <Clear color="error" />
        </IconButton>
        <Typography variant="h1">
          {attributeSelected.message && attributeSelected.message.title}
        </Typography>
        <Typography>
          {attributeSelected.message && attributeSelected.message.text}
        </Typography>
        {sliceNameError.error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {sliceNameError.message}
          </Alert>
        )}
        <form onSubmit={onFormSubmit}>
          {attributeSelected.add && (
            <CssTextField
              variant="outlined"
              label="slice name"
              autoFocus
              error={sliceNameError.error}
              onChange={onChangeName}
            />
          )}
          <Button color="secondary" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Dialog>
  );
};

export default SliceDialogBox;
