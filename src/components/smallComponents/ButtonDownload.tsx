import React from 'react';

import { IStructureDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAppDispatch } from 'state/store';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';
import { cleaningJSON } from './utils';

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

  const cleanJSONToDownload: IStructureDefinition = cleaningJSON(toDownload);

  delete cleanJSONToDownload.differential;

  const date = new Date(Date.now()).toISOString();
  if (!cleanJSONToDownload.date) {
    cleanJSONToDownload.date = date;
  }
  if (cleanJSONToDownload.meta && !cleanJSONToDownload.meta.lastUpdated) {
    cleanJSONToDownload.meta = {
      ...cleanJSONToDownload.meta,
      lastUpdated: date
    };
  }
  if (cleanJSONToDownload.abstract === undefined) {
    cleanJSONToDownload.abstract = false;
  }
  if (!cleanJSONToDownload.url) {
    cleanJSONToDownload.url = `http://arkhn.com/profile/${cleanJSONToDownload.name}`;
  }

  return (
    <a
      href={
        'data:json/plain;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(cleanJSONToDownload, null, 2))
      }
      download={cleanJSONToDownload.name + '.json'}
      className={classes.buttonDownloadText}
    >
      <Button
        color="secondary"
        variant="contained"
        className={classes.buttonDownloadSize}
        onClick={() => {
          dispatch(
            setSnackbarOpen({
              severity: 'success',
              message: 'Profile Downloaded ! Congratulations !'
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
