import React from 'react';

import clsx from 'clsx';

import { Accordion, AccordionDetails, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { useStyles, MuiAccordionSummary, MuiButton } from './style';

type AccordionEditorProps = {
  accordionDetails: JSX.Element;
  handleDelete: (path: string, i: number | undefined) => void;
  accordionTitle: string;
  path?: string;
  index?: number;
};

const AccordionEditor: React.FC<AccordionEditorProps> = ({
  accordionDetails,
  handleDelete,
  index,
  accordionTitle,
  path
}) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion}>
      <MuiAccordionSummary expandIcon={<ExpandMore />}>
        <div
          className={clsx(classes.accordionTitle, classes.accordionTitleDelete)}
        >
          <Typography>{accordionTitle}</Typography>
          {path && (
            <MuiButton
              onClick={(event) => {
                event.stopPropagation();
                handleDelete(path, index !== undefined ? index : undefined);
              }}
            >
              Delete
            </MuiButton>
          )}
        </div>
      </MuiAccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {accordionDetails}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionEditor;
