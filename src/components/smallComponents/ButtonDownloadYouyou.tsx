import React from "react";

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

const ButtonDownloadYouyou: React.FC<ButtonDownloadYouyouProps> = ({
  text,
  toDownload
}) => {
  const classes = useStyles();

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
      >
        {text}
      </Button>
    </a>
  );
};

export default ButtonDownloadYouyou;
