import React from 'react';

import { CssTextField, TooltipHelp } from 'components/smallComponents';

type InputDateProps = {
  label: string;
  value: string;
  tool: string;
  type: 'date' | 'dateTime-local' | 'time';
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const InputDate: React.FC<InputDateProps> = ({
  label,
  value,
  tool,
  onChange,
  type
}) => {
  return (
    <CssTextField
      label={label}
      defaultValue={value}
      type={type}
      onChange={onChange}
      variant="outlined"
      InputLabelProps={{
        shrink: true
      }}
      InputProps={{
        endAdornment: <TooltipHelp tool={tool} />
      }}
    />
  );
};

export default InputDate;
