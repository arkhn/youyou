import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { selectResource } from "../../state/actions/resourceActions";
import { Link } from "react-router-dom";
import { DataFetched } from "../../state/reducers/resource";
import { requestResource } from "../../state/thunkMiddleware";
import {
  Card,
  CardActionArea,
  Typography,
  Grid,
  CircularProgress
} from "@material-ui/core";
import useStyles from "./style";
import { ReactComponent as FhirLogo } from "../../assets/img/fhir-logo.svg";
import Header from "../header/Header";

const Homepage: React.FC<{}> = () => {
  const { loading, resources } = useSelector(
    (state: RootState) => state.resource
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const dispatchResourceSelected = (resource: DataFetched): void => {
    if (resource.id) {
      dispatch(selectResource(resource.id));
      dispatch(requestResource(resource.id));
    }
  };

  const mapAllResources = resources?.map(
    (resource: DataFetched, index: number) => {
      const title: string = (resource.id as unknown) as string;

      return (
        <Grid
          className={classes.gridItem}
          item
          xs={5}
          sm={4}
          md={2}
          key={index}
        >
          <Link
            className={classes.itemLink}
            to="/editprofile"
            onClick={(): void => dispatchResourceSelected(resource)}
          >
            <Card className={classes.itemCard}>
              <CardActionArea className={classes.itemCardAction}>
                <Typography className={classes.itemText} variant="h6">
                  {title.replace(/([A-Z])/g, " $1").trim()}
                </Typography>
                <FhirLogo className={classes.fhirLogo} />
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      );
    }
  );

  if (loading === true) {
    return (
      <section className={classes.loader}>
        <CircularProgress color="primary" />
      </section>
    );
  }

  return (
    <>
      <Header buttonType="extension" />
      <section className={classes.homepage}>
        <Typography className={classes.homepageText}>
          Select a profile you want to edit.
        </Typography>
        <Grid container spacing={2} className={classes.grid}>
          {mapAllResources}
        </Grid>
      </section>
    </>
  );
};

export default Homepage;
