import React from 'react';

import { IStructureDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAppDispatch } from 'state/store';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';

import isEmpty from 'lodash.isempty';
import cloneDeep from 'lodash.clonedeep';

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

  const cleaningJSON = (oldObject: any) => {
    const object = cloneDeep(oldObject);
    for (const key in object) {
      if (object[key] === undefined) {
        delete object[key];
      } else if (
        typeof object[key] === 'object' &&
        !Array.isArray(object[key])
      ) {
        if (isEmpty(object[key])) {
          delete object[key];
        } else {
          object[key] = cleaningJSON(object[key]);
        }
      } else if (
        typeof object[key] === 'object' &&
        Array.isArray(object[key])
      ) {
        if (isEmpty(object[key])) {
          delete object[key];
        } else {
          const newObject: any[] = [];
          object[key].forEach((item: any) => {
            const newItem = cleaningJSON(item);
            if (!isEmpty(newItem)) {
              newObject.push(newItem);
            }
          });
          object[key] = cleaningJSON(newObject);
        }
      }
    }
    return object;
  };
  const cleanJSONToDownload = cleaningJSON(toDownload);

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
