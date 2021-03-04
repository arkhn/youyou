import React from 'react';

import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { CssTextField, TooltipHelp } from 'components/smallComponents';

type InputDateProps = {
  label: string;
  value: string;
  tool?: string;
  className?: string;
  type: 'date' | 'dateTime-local' | 'time';
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const InputDate: React.FC<InputDateProps> = ({
  label,
  value,
  tool,
  onChange,
  type,
  className
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(className, classes.container)}>
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
      {tool && <TooltipHelp tool={tool} />}
    </div>
  );
};

export default InputDate;
