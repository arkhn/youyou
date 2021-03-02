import React, { useEffect, useRef } from 'react';

import { CssTextField, TooltipHelp } from 'components/smallComponents';
import { makeStyles } from '@material-ui/core';

type InputTooltipProps = {
  classname?: string;
  label: string;
  value: string;
  tool: string;
  error?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  onBlur?: (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const InputTooltip: React.FC<InputTooltipProps> = ({
  label,
  value,
  tool,
  multiline,
  onBlur,
  error = false,
  classname,
  onClick,
  disabled
}) => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement | undefined>();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value]);

  return (
    <div className={classes.root}>
      <CssTextField
        disabled={disabled}
        className={classname}
        label={label}
        error={error}
        defaultValue={value}
        variant="outlined"
        onBlur={onBlur}
        multiline={multiline}
        rows={multiline ? 3 : undefined}
        inputRef={inputRef}
        onClick={onClick}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TooltipHelp tool={tool} />
    </div>
  );
};

export default InputTooltip;
