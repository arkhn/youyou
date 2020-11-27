import React from 'react';

import { IStructureDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAppDispatch } from 'state/store';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';

type ButtonDownloadProps = {
  text: string;
  toDownload: IStructureDefinition;
};

const useStyles = makeStyles(() => ({
  buttonDownloadSize: {
    width: '100%'
  },
  buttonDownloadText: {
    textDecoration: 'none'
  }
}));

const ButtonDownload: React.FC<ButtonDownloadProps> = ({
  text,
  toDownload
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <a
      href={
        'data:json/plain;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(toDownload, null, 2))
      }
      download={toDownload.name + '.json'}
      className={classes.buttonDownloadText}
    >
      <Button
        color="secondary"
        variant="contained"
        className={classes.buttonDownloadSize}
        onClick={(): void => {
          dispatch(
            setSnackbarOpen({
              severity: 'success',
              message: 'Profile Downloaded ! Congratulation !'
            })
          );
        }}
      >
        {text}
      </Button>
    </a>
  );
};

export default ButtonDownload;
