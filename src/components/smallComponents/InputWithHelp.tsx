import React, { SetStateAction } from "react";

import { IconButton, TextField, Theme, Tooltip } from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

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
        endAdornment: (
          <IconButton>
            <Tooltip title={tool}>
              <HelpOutline />
            </Tooltip>
          </IconButton>
        )
      }}
    />
  );
};

export default InputWithHelp;
