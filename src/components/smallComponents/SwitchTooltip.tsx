import React from 'react';

import { FormControlLabel, Switch } from '@material-ui/core';

import { TooltipHelp } from 'components/smallComponents';

type SwitchTooltipProps = {
  label: string;
  value: boolean;
  tool: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SwitchTooltip: React.FC<SwitchTooltipProps> = ({
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
          <Switch checked={value} onChange={onChange} color="secondary" />
        }
      />
      <TooltipHelp tool={tool} />
    </>
  );
};

export default SwitchTooltip;
