import React, { SetStateAction } from "react";

import { TextField, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { TooltipYouyou } from ".";

type inputDateProps = {
  label: string;
  value: string;
  tool: string;
  setter: React.Dispatch<SetStateAction<string>>;
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

const InputDate: React.FC<inputDateProps> = ({
  label,
  value,
  tool,
  setter
}) => {
  return (
    <CssTextField
      label={label}
      defaultValue={value}
      type="datetime-local"
      onChange={(e) => {
        const date = new Date(e.target.value);
        setter(
          new Date(
            date.getTime() - date.getTimezoneOffset() * 60000
          ).toISOString()
        );
      }}
      variant="outlined"
      InputProps={{
        endAdornment: <TooltipYouyou tool={tool} />
      }}
    />
  );
};

export default InputDate;
