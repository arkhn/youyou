import React from "react";

import { FormControlLabel, Checkbox } from "@material-ui/core";

import { TooltipHelp } from "components/smallComponents";

type CheckbokTooltipProps = {
  label: string;
  value: boolean;
  tool: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxTooltip: React.FC<CheckbokTooltipProps> = ({
  label,
  value,
  tool,
  onChange
}) => {
  return (
    <>
      <FormControlLabel
        label={label}
        control={
          <Checkbox checked={value} onChange={onChange} color="secondary" />
        }
      />
      <TooltipHelp tool={tool} />
    </>
  );
};

export default CheckboxTooltip;
