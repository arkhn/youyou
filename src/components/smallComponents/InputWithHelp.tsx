import React, { SetStateAction } from "react";

import { TextField, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { TooltipYouyou } from ".";

type inputWithHelpProps = {
  label: string;
  value: string;
  tool: string;
  error?: boolean | undefined;
  setter: React.Dispatch<SetStateAction<string | undefined>>;
};

const CssTextField = withStyles((theme: Theme) => ({
  root: {
    marginBottom: 16,
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
}))(TextField);

const InputWithHelp: React.FC<inputWithHelpProps> = ({
  label,
  value,
  tool,
  setter,
  error = false
}) => {
  return (
    <CssTextField
      label={label}
      error={error}
      defaultValue={value}
      variant="outlined"
      onBlur={(e) => {
        setter(e.target.value);
      }}
      InputProps={{
        endAdornment: <TooltipYouyou tool={tool} />
      }}
    />
  );
};

export default InputWithHelp;
