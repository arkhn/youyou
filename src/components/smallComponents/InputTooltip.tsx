import React from "react";

import { CssTextField, TooltipHelp } from "components/smallComponents";

type InputTooltipProps = {
  classname?: string;
  label: string;
  value: string;
  tool: string;
  error?: boolean | undefined;
  onBlur: (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const InputTooltip: React.FC<InputTooltipProps> = ({
  label,
  value,
  tool,
  onBlur,
  error = false,
  classname
}) => {
  return (
    <CssTextField
      className={classname}
      label={label}
      error={error}
      defaultValue={value}
      variant="outlined"
      onBlur={onBlur}
      InputProps={{
        endAdornment: <TooltipHelp tool={tool} />
      }}
    />
  );
};

export default InputTooltip;
