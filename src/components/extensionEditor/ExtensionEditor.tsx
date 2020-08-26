import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { selectResource } from "../../state/actions/resourceActions";
import { Link } from "react-router-dom";
import { DataFetched } from "../../state/reducers/resource";
import { requestResource } from "../../state/thunkMiddleware";

import Header from "../header/Header";
import {
  Card,
  CardActionArea,
  Typography,
  Grid,
  CircularProgress,
  Button
} from "@material-ui/core";

// import useStyles from "./style";

const ExtensionEditor: React.FC<{}> = () => {
  const { loading, resources } = useSelector(
    (state: RootState) => state.resource
  );
  const dispatch = useDispatch();
  // const classes = useStyles();

  const dispatchResourceSelected = (resource: DataFetched): void => {
    if (resource.id) {
      dispatch(selectResource(resource.id));
      dispatch(requestResource(resource.id));
    }
  };

  return (
    <>
      <Header buttonType="profile" />
      <div>Yop</div>
    </>
  );
};

export default ExtensionEditor;
