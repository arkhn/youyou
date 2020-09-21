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

type ChoosingCardsItemsType = {
  name: string;
  description: string;
  buttons: {
    content: string;
    path: string;
  }[];
};

const Homepage: React.FC<{}> = () => {
  const { loading } = useSelector((state: RootState) => state.resource);
  const dispatch = useDispatch();
  const classes = useStyles();

  const dispatchResourceSelected = (resource: DataFetched): void => {
    if (resource.id) {
      dispatch(selectResource(resource.id));
      dispatch(requestResource(resource.id));
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

  const choosingCardsItems: ChoosingCardsItemsType[] = [
    {
      name: "Implementation Guide",
      description:
        "An implementation guide (IG) is a set of rules about how FHIR resources are used (or should be used) to solve a particular problem, with associated documentation to support and clarify the usage. Classically, FHIR implementation guides are published on the web after they are generated using the FHIR Implementation Guide Publisher.",
      buttons: [
        {
          content: "new",
          path: "/implementation-guides/choose-new"
        },
        {
          content: "choose existing",
          path: "/implementation-guides/choose-existing"
        }
      ]
    },
    {
      name: "Profile (Patient)",
      description:
        "An implementation guide (IG) is a set of rules about how FHIR resources are used (or should be used) to solve a particular problem, with associated documentation to support and clarify the usage. Classically, FHIR implementation guides are published on the web after they are generated using the FHIR Implementation Guide Publisher.",
      buttons: [
        {
          content: "new",
          path: "/profile/edit"
        }
      ]
    },
    {
      name: "Extension",
      description:
        "An implementation guide (IG) is a set of rules about how FHIR resources are used (or should be used) to solve a particular problem, with associated documentation to support and clarify the usage. Classically, FHIR implementation guides are published on the web after they are generated using the FHIR Implementation Guide Publisher.",
      buttons: [
        {
          content: "new",
          path: "/extension/edit"
        }
      ]
    }
  ];

  const renderChoosingCards = choosingCardsItems.map(
    (choosingItem: ChoosingCardsItemsType) => {
      const renderButtons = choosingItem.buttons.map((button) => {
        return (
          <Link
            to={button.path}
            key={button.path}
            className={classes.buttonLink}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                if (choosingItem.name === "Profile") {
                  dispatchResourceSelected({ id: "Patient" });
                }
              }}
              className={classes.button}
            >
              {button.content}
            </Button>
          </Link>
        );
      });

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
      <Navbar buttonType="extension" />
      <div className={classes.items}>{renderChoosingCards}</div>
    </>
  );
};

export default Homepage;
