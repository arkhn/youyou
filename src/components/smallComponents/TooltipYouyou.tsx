import React from "react";

import { IconButton, Theme, Tooltip } from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

type TooltipQuestionMarkProps = {
  tool: string;
};

const CssTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    fontSize: 12
  }
}))(Tooltip);

const TooltipQuestionMark: React.FC<TooltipQuestionMarkProps> = ({ tool }) => {
  return (
    <IconButton>
      <CssTooltip title={tool}>
        <HelpOutline />
      </CssTooltip>
    </IconButton>
  );
};

export default TooltipQuestionMark;
