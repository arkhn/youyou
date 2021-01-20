import React from 'react';

import { useStyles } from './style';
import clsx from 'clsx';
import { IconButton, Tooltip, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { RenderAttributesTree } from 'types';

type AddComplexTypeProps = {
  complexFhirAttribute: RenderAttributesTree;
  path: string;
  value?: any;
  handleAdd: (path: string, value: any) => void;
};

const AddComplexType: React.FC<AddComplexTypeProps> = ({
  handleAdd,
  complexFhirAttribute,
  path,
  value
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.accordionTitle, classes.accordionAddItem)}>
      <IconButton onClick={() => handleAdd(path, value)}>
        <Tooltip title={`add a new ${complexFhirAttribute.name}`}>
          <Add />
        </Tooltip>
      </IconButton>
      <Typography className={classes.titleAdd} variant="h2">
        {complexFhirAttribute.name}
      </Typography>
    </div>
  );
};

export default AddComplexType;
