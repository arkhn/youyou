import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Typography, CircularProgress, Paper, Button } from '@material-ui/core';
import clsx from 'clsx';

import { RootState, useAppDispatch } from 'state/store';
import { selectResource } from 'state/reducers/resource';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';
import { requestStructureDefThunk } from 'state/thunkMiddleware';

import Navbar from 'components/navbar/Navbar';
import {
  choosingCardsItems,
  ChoosingCardsItemsType
} from 'components/homepage/utils';
import { ReactComponent as FhirLogo } from 'assets/img/fhir-logo.svg';

import useStyles from './style';

const Homepage: React.FC<{}> = () => {
  const { loading } = useSelector((state: RootState) => state.resourceSlice);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const dispatchResourceSelected = (resource: { id: string }) => {
    if (resource.id) {
      dispatch(selectResource(resource.id));
      dispatch(requestStructureDefThunk(resource.id));
      dispatch(setSnackbarOpen({ severity: undefined, message: '' }));
    }
  };

  if (loading) {
    return (
      <section className={classes.loader}>
        <CircularProgress color="primary" />
      </section>
    );
  }

  const renderChoosingCards = choosingCardsItems.map(
    (choosingItem: ChoosingCardsItemsType) => {
      const renderButtons = choosingItem.buttons.map((button) => (
        <Link to={button.path} key={button.path} className={classes.buttonLink}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              if (button.path === '/profile/edit') {
                dispatchResourceSelected({ id: 'Patient' });
              }
            }}
            className={classes.button}
          >
            {button.content}
          </Button>
        </Link>
      ));

      return (
        <div key={choosingItem.name} className={classes.item}>
          <Paper className={clsx(classes.itemCardLeft, classes.itemCard)}>
            <Typography variant="h1" className={classes.itemCardTitle}>
              {choosingItem.name}
            </Typography>
            <FhirLogo className={classes.fhirLogo} />
          </Paper>
          <Paper className={clsx(classes.itemCard, classes.itemCardRight)}>
            <Typography>{choosingItem.description}</Typography>
            <div>{renderButtons}</div>
          </Paper>
        </div>
      );
    }
  );

  return (
    <>
      <Navbar />
      <div className={classes.items}>{renderChoosingCards}</div>
    </>
  );
};

export default Homepage;
