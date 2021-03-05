import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Typography, CircularProgress, Paper, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import clsx from 'clsx';

import { RootState, useAppDispatch } from 'state/store';
import { selectResource } from 'state/reducers/resource';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';
import { requestStructureDefThunk } from 'state/thunkMiddleware';

import Navbar from 'components/navbar/Navbar';
import { CssTextField } from 'components/smallComponents';
import {
  editorOptions,
  EditorOptionsType,
  EditorOptionsButtonsType
} from 'components/homepage/utils';
import { ReactComponent as FhirLogo } from 'assets/img/fhir-logo.svg';

import useStyles from './style';

const Homepage: React.FC<{}> = () => {
  const { loading, resources } = useSelector(
    (state: RootState) => state.resourceSlice
  );
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const [selectedFhirResource, setSelectedFhirResource] = useState<
    { label: string; value: string } | undefined
  >(undefined);

  const dispatchResourceSelected = (resource: { name: string }) => {
    if (resource.name) {
      dispatch(selectResource(resource.name));
      dispatch(requestStructureDefThunk(`kind=resource&name=${resource.name}`));
      dispatch(setSnackbarOpen({ severity: undefined, message: '' }));
      setSelectedFhirResource(undefined);
    }
  };

  const selectChoices = resources
    .map((resource) => {
      return { label: resource.name, value: resource.name };
    })
    .sort((a, b) => {
      const idA = a.label.toUpperCase();
      const idB = b.label.toUpperCase();

      let comparison = 0;
      if (idA > idB) {
        comparison = 1;
      } else if (idA < idB) {
        comparison = -1;
      }
      return comparison;
    });

  if (loading) {
    return (
      <section className={classes.loader}>
        <CircularProgress color="primary" />
      </section>
    );
  }

  const renderEditorOptions = editorOptions.map((option: EditorOptionsType) => {
    const renderButtons = option.buttons.map(
      (button: EditorOptionsButtonsType) => (
        <Link
          to={selectedFhirResource ? button.path : '/'}
          key={button.path}
          className={classes.buttonLink}
        >
          <Button
            disabled={button.disabled}
            variant="contained"
            color="secondary"
            onClick={() => {
              if (button.path === '/profile/edit' && selectedFhirResource) {
                dispatchResourceSelected({ name: selectedFhirResource.value });
              }
            }}
            className={classes.button}
          >
            {button.content}
          </Button>
        </Link>
      )
    );

    return (
      <div key={option.name} className={classes.item}>
        <Paper className={clsx(classes.itemCardLeft, classes.itemCard)}>
          <Typography variant="h1" className={classes.itemCardTitle}>
            {option.name}
          </Typography>
          <FhirLogo className={classes.fhirLogo} />
        </Paper>
        <Paper className={clsx(classes.itemCard, classes.itemCardRight)}>
          <Typography>{option.description}</Typography>
          {option.name === 'Profile' && (
            <Autocomplete
              options={selectChoices}
              getOptionLabel={(option) => option.label}
              getOptionSelected={(option, value) =>
                option.value === value.value
              }
              onChange={(event, value) => {
                setSelectedFhirResource(value ?? undefined);
              }}
              renderInput={(params) => (
                <CssTextField
                  {...params}
                  label="Select a resource"
                  variant="outlined"
                />
              )}
            />
          )}
          <div>{renderButtons}</div>
        </Paper>
      </div>
    );
  });

  return (
    <>
      <Navbar />
      <div className={classes.items}>{renderEditorOptions}</div>
    </>
  );
};

export default Homepage;
