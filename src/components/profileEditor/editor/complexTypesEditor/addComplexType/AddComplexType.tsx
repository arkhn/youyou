import React from 'react';

import clsx from 'clsx';
import { IconButton, Tooltip, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { SimplifiedAttributes } from 'types';

import { useStyles } from 'components/profileEditor/editor/complexTypesEditor/addComplexType/style';
import { TooltipHelp } from 'components/smallComponents';

type AddComplexTypeProps = {
  complexFhirAttribute: SimplifiedAttributes;
  path: string;
  value?: any;
  handleAdd: (path: string, value: any) => void;
  className?: string;
};

const AddComplexType: React.FC<AddComplexTypeProps> = ({
  handleAdd,
  complexFhirAttribute,
  path,
  value,
  children,
  className
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.accordionTitle, classes.accordionAddItem)}>
      <div className={classes.addValue}>
        <div className={clsx(classes.allTitles, className)}>
          <IconButton onClick={() => handleAdd(path, value)}>
            <Tooltip title={`add a new ${complexFhirAttribute.name}`}>
              <Add />
            </Tooltip>
          </IconButton>
          <Typography variant="h2" className={classes.title}>
            {complexFhirAttribute.name}
          </Typography>
          <TooltipHelp tool={complexFhirAttribute.definition} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AddComplexType;
