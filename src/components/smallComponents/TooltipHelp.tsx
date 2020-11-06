import React from 'react';

import { IconButton, Tooltip } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

type TooltipHelpProps = {
  tool: string;
  className?: string;
};

const CssTooltip = withStyles(() => ({
  tooltip: {
    fontSize: 12
  }
}))(Tooltip);

const TooltipHelp: React.FC<TooltipHelpProps> = ({ tool, className }) => {
  return (
    <IconButton>
      <CssTooltip className={className} title={tool}>
        <HelpOutline />
      </CssTooltip>
    </IconButton>
  );
};

export default TooltipHelp;
