import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Typography, CircularProgress, Paper, Button } from "@material-ui/core";

import Navbar from "components/navbar/Navbar";
import { ReactComponent as FhirLogo } from "assets/img/fhir-logo.svg";
import {
  selectResource,
  selectStructureDefMeta
} from "state/actions/resourceActions";
import { DataFetched } from "state/reducers/resource";
import { RootState } from "state/store";
import { requestResource } from "state/thunkMiddleware";

import useStyles from "./style";
import clsx from "clsx";
import { setSnackbarOpen } from "state/actions/snackbarActions";
import { choosingCardsItems, ChoosingCardsItemsType } from "./utils";

const Homepage: React.FC<{}> = () => {
  const { loading } = useSelector((state: RootState) => state.resource);
  const dispatch = useDispatch();
  const classes = useStyles();
  const state = useSelector((state: RootState) => state.fhirDataTypes);
  console.log(state);

  const dispatchResourceSelected = (resource: DataFetched): void => {
    if (resource.id) {
      dispatch(selectResource(resource.id));
      dispatch(requestResource(resource.id));
      dispatch(setSnackbarOpen(undefined, ""));
      dispatch(selectStructureDefMeta());
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
              if (button.path === "/profile/edit") {
                dispatchResourceSelected({ id: "Patient" });
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
