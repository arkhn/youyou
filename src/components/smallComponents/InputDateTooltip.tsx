import React from 'react';

import { CssTextField, TooltipHelp } from 'components/smallComponents';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

type InputDateProps = {
  label: string;
  value: string;
  tool: string;
  type: 'date' | 'dateTime-local' | 'time';
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  time: {
    marginLeft: 16
  }
}));

const InputDate: React.FC<InputDateProps> = ({
  label,
  value,
  tool,
  onChange,
  type
}) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.container,
        type === 'time' ? classes.time : undefined
      )}
    >
      <CssTextField
        label={label}
        defaultValue={value}
        type={type}
        onChange={onChange}
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TooltipHelp tool={tool} />
    </div>
  );
};

export default InputDate;
