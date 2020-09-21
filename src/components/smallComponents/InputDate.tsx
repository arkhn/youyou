import React, { SetStateAction } from "react";
import { CssTextFieldYouyou, TooltipYouyou } from "components/smallComponents";

type inputDateProps = {
  label: string;
  value: string;
  tool: string;
  setter: React.Dispatch<SetStateAction<string>>;
};

const InputDate: React.FC<inputDateProps> = ({
  label,
  value,
  tool,
  setter
}) => {
  return (
    <CssTextFieldYouyou
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
