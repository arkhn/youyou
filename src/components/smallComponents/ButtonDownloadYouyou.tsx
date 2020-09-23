import React from "react";

import { useDispatch } from "react-redux";
import { setSnackbarOpen } from "state/actions/snackbarActions";

import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import { Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

type ButtonDownloadYouyouProps = {
  text: string;
  toDownload: IStructureDefinition;
};

const useStyles = makeStyles((theme: Theme) => ({
  buttonDownloadSize: {
    width: "100%"
  },
  buttonDownloadText: {
    textDecoration: "none"
  }
}));

const ButtonDownload: React.FC<ButtonDownloadYouyouProps> = ({
  text,
  toDownload
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <a
      href={
        "data:json/plain;charset=utf-8," +
        encodeURIComponent(JSON.stringify(toDownload, null, 2))
      }
      download={toDownload.name + ".json"}
      className={classes.buttonDownloadText}
    >
      <Button
        color="secondary"
        variant="contained"
        className={classes.buttonDownloadSize}
        onClick={() =>
          dispatch(
            setSnackbarOpen("success", "Profile Downloaded ! Congratulation !")
          )
        }
      >
        {text}
      </Button>
    </a>
  );
};

export default ButtonDownload;
