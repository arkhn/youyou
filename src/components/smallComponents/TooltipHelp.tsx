import React from "react";

import { IconButton, Theme, Tooltip } from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

type TooltipHelpProps = {
  tool: string;
};

const CssTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    fontSize: 12
  }
}))(Tooltip);

const TooltipHelp: React.FC<TooltipHelpProps> = ({ tool }) => {
  return (
    <IconButton>
      <CssTooltip title={tool}>
        <HelpOutline />
      </CssTooltip>
    </IconButton>
  );
};

export default TooltipHelp;
