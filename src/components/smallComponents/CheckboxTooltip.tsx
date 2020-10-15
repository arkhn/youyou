import React, { useState } from "react";
import { TooltipHelp } from "components/smallComponents";
import { FormControlLabel, Checkbox } from "@material-ui/core";

type InputDateProps = {
  label: string;
  value: string;
  tool: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxTooltip: React.FC<InputDateProps> = ({
  label,
  value,
  tool,
  onChange
}) => {
  const [checked, setChecked] = useState(Boolean(value));

  return (
    <>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            checked={checked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setChecked(event.target.checked);
              onChange && onChange(event);
            }}
            color="secondary"
          />
        }
      />
      <TooltipHelp tool={tool} />
    </>
  );
};

export default CheckboxTooltip;
