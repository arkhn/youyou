import React, { SetStateAction, useState } from "react";

import { StructureDefinitionStatusKind as StatusKind } from "@ahryman40k/ts-fhir-types/lib/R4";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Theme,
  withStyles
} from "@material-ui/core";
import { TooltipYouyou } from ".";

type inputWithHelpProps = {
  label: string;
  value: StatusKind | undefined;
  choices: string[];
  error?: boolean | undefined;
  setter: React.Dispatch<SetStateAction<StatusKind | undefined>>;
  tool: string;
};

const CssFormControl = withStyles((theme: Theme) => ({
  root: {
    marginBottom: 16,
    marginRight: 8,
    width: 300,
    maxWidth: 300,
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

const SelectWithHelp: React.FC<inputWithHelpProps> = ({
  label,
  value,
  setter,
  error = false,
  choices,
  tool
}) => {
  const [defaultValue, setDefaultValue] = useState(value);
  return (
    <CssFormControl variant="outlined">
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Select
        endAdornment={<TooltipYouyou tool={tool} />}
        error={error}
        value={value}
        label={label}
        onFocus={() => setter(defaultValue)}
      >
        {choices.map((choice) => {
          return (
            <MenuItem
              value={choice}
              key={choice}
              onClick={() => setDefaultValue(choice as StatusKind)}
            >
              {choice}
            </MenuItem>
          );
        })}
      </Select>
    </CssFormControl>
  );
};

export default SelectWithHelp;
