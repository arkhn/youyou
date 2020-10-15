import React, { useState } from "react";

import { StructureDefinitionStatusKind as StatusKind } from "@ahryman40k/ts-fhir-types/lib/R4";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
  withStyles
} from "@material-ui/core";
import { TooltipHelp } from ".";

type SelectWithHelpProps = {
  label: string;
  value?: StatusKind | string | undefined;
  choices: { label?: string; value?: string }[];
  error?: boolean | undefined;
  tool: string;
  onChange?: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => void;
};

const CssFormControl = withStyles((theme: Theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.dark
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.dark
      }
    }
  }
}))(FormControl);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  select: {
    flexGrow: 1,
    marginRight: 8
  }
}));

const SelectWithHelp: React.FC<SelectWithHelpProps> = ({
  label,
  value,
  error = false,
  choices,
  tool,
  onChange
}) => {
  const [newValue, setNewValue] = useState(value);

  const classes = useStyles();
  return (
    <CssFormControl variant="outlined">
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <div className={classes.root}>
        <Select
          className={classes.select}
          error={error}
          value={newValue}
          label={label}
          onChange={(e, child) => {
            setNewValue(e.target.value as string);
            onChange && onChange(e, child);
          }}
        >
          {choices.map((choice) => {
            return (
              <MenuItem value={choice.value} key={choice.value}>
                {choice.label}
              </MenuItem>
            );
          })}
        </Select>
        <TooltipHelp tool={tool} />
      </div>
    </CssFormControl>
  );
};

export default SelectWithHelp;
