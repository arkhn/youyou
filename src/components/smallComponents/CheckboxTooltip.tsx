import React from "react";
import { TooltipHelp } from "components/smallComponents";
import { FormControlLabel, Checkbox } from "@material-ui/core";

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
