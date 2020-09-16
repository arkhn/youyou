import React, { useState } from "react";

import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import { Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { SnackBarYouyou } from ".";

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
  const [snackbarSuccessMessage, setsnackbarSuccessMessage] = useState("");

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
        onClick={() => {
          setsnackbarSuccessMessage("Your new profile is download !");
          setTimeout(() => {
            setsnackbarSuccessMessage("");
          }, 3000);
        }}
      >
        {text}
      </Button>
      <SnackBarYouyou message={snackbarSuccessMessage} severity="success" />
    </a>
  );
};

export default ButtonDownload;
