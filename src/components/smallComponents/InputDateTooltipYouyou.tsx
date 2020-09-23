import React from "react";
import { CssTextFieldYouyou, TooltipYouyou } from "components/smallComponents";

type inputDateProps = {
  label: string;
  value: string;
  tool: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const InputDate: React.FC<inputDateProps> = ({
  label,
  value,
  tool,
  onChange
}) => {
  return (
    <CssTextFieldYouyou
      label={label}
      defaultValue={value}
      type="datetime-local"
      onChange={onChange}
      variant="outlined"
      InputProps={{
        endAdornment: <TooltipYouyou tool={tool} />
      }}
    />
  );
};

export default InputDate;
