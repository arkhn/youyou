import React from "react";

import { CssTextFieldYouyou, TooltipYouyou } from "components/smallComponents";

type InputTooltipYouyouProps = {
  classname?: string;
  label: string;
  value: string;
  tool: string;
  error?: boolean | undefined;
  onBlur: (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const InputTooltipYouyou: React.FC<InputTooltipYouyouProps> = ({
  label,
  value,
  tool,
  onBlur,
  error = false,
  classname
}) => {
  return (
    <CssTextFieldYouyou
      className={classname}
      label={label}
      error={error}
      defaultValue={value}
      variant="outlined"
      onBlur={onBlur}
      InputProps={{
        endAdornment: <TooltipYouyou tool={tool} />
      }}
    />
  );
};

export default InputTooltipYouyou;
