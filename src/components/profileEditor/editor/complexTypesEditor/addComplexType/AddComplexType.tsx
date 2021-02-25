import React from 'react';

import clsx from 'clsx';
import { IconButton, Tooltip, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { SimplifiedAttributes } from 'types';

import { useStyles } from './style';
import { TooltipHelp } from 'components/smallComponents';

type AddComplexTypeProps = {
  complexFhirAttribute: SimplifiedAttributes;
  path: string;
  value?: any;
  handleAdd: (path: string, value: any) => void;
  childComponent?: JSX.Element;
};

const AddComplexType: React.FC<AddComplexTypeProps> = ({
  handleAdd,
  complexFhirAttribute,
  path,
  value,
  childComponent
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.accordionTitle, classes.accordionAddItem)}>
      <IconButton onClick={() => handleAdd(path, value)}>
        <Tooltip title={`add a new ${complexFhirAttribute.name}`}>
          <Add />
        </Tooltip>
      </IconButton>
      <div className={classes.addValue}>
        <Typography variant="h2" className={classes.title}>
          {complexFhirAttribute.name}
        </Typography>
        {childComponent && <>{childComponent}</>}
        <TooltipHelp tool={complexFhirAttribute.definition} />
      </div>
    </div>
  );
};

export default AddComplexType;
