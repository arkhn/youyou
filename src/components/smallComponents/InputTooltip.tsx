import React from "react";

import { CssTextField, TooltipHelp } from "components/smallComponents";
import { makeStyles, Theme } from "@material-ui/core";

type InputTooltipProps = {
  classname?: string;
  label: string;
  value: string;
  tool: string;
  error?: boolean | undefined;
  onBlur?: (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8,
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  select: {
    flexGrow: 1
  }
}));

const InputTooltip: React.FC<InputTooltipProps> = ({
  label,
  value,
  tool,
  onBlur,
  error = false,
  classname
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssTextField
        className={classname}
        label={label}
        error={error}
        defaultValue={value}
        variant="outlined"
        onBlur={onBlur}
      />
      <TooltipHelp tool={tool} />
    </div>
  );
};

export default InputTooltip;
