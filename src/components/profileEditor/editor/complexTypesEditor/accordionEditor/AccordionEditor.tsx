import React from 'react';

import clsx from 'clsx';

import { Accordion, AccordionDetails, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { useStyles, MuiAccordionSummary, MuiButton } from './style';
import { TooltipHelp } from 'components/smallComponents';

type AccordionEditorProps = {
  accordionDetails: JSX.Element;
  handleDelete: (path: string, i: number | undefined) => void;
  accordionTitle: string;
  path?: string;
  index?: number;
  className?: string;
  tool?: string;
};

const AccordionEditor: React.FC<AccordionEditorProps> = ({
  accordionDetails,
  handleDelete,
  index,
  accordionTitle,
  path,
  className,
  tool
}) => {
  const classes = useStyles();

  return (
    <Accordion className={className}>
      <MuiAccordionSummary expandIcon={<ExpandMore />}>
        <div
          className={clsx(classes.accordionTitle, classes.accordionTitleDelete)}
        >
          <div className={classes.accordionTitleTooltip}>
            <Typography className={classes.title}>{accordionTitle}</Typography>
            {tool && <TooltipHelp tool={tool} />}
          </div>
          {path && (
            <MuiButton
              onClick={() => {
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
