import React, { useState } from 'react';
import { Clear, Folder, LocalOffer, LocalPizza } from '@material-ui/icons';
import { RenderAttributesTree } from 'types';

import useStyles from 'components/structureDefinitionTree/treeNode/styles';
import { IconButton, Tooltip } from '@material-ui/core';

type TreeNodeProps = {
  nodes: RenderAttributesTree;
  onPizzaClick?: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree
  ) => void;
  onTrashClick?: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree
  ) => void;
};

const TreeNode: React.FC<TreeNodeProps> = ({
  nodes,
  onPizzaClick,
  onTrashClick
}) => {
  const classes = useStyles();
  const isSlice =
    nodes.id.split('.')[nodes.id.split('.').length - 1].split(':').length > 1
      ? true
      : false;
  const [display, setDisplay] = useState(isSlice ? 'block' : 'none');

  return (
    <span
      className={classes.index}
      onMouseEnter={(): void => {
        !isSlice && setDisplay('block');
      }}
      onMouseLeave={(): void => {
        !isSlice && setDisplay('none');
      }}
    >
      <span className={classes.treeItem}>
        {nodes.children.length > 0 ? (
          <Folder className={classes.iconTreeItem} />
        ) : (
          <LocalOffer className={classes.iconTreeItem} />
        )}
        {nodes.name}
      </span>
      <div className={classes.pizzaIcon}>
        <IconButton
          size="small"
          onClick={(e): void => onPizzaClick && onPizzaClick(e, nodes)}
          style={{ display: display }}
        >
          <Tooltip title="Add a slice">
            <LocalPizza color={isSlice ? 'secondary' : 'primary'} />
          </Tooltip>
        </IconButton>
        <IconButton
          size="small"
          style={{ display: isSlice ? 'block' : 'none' }}
          onClick={(e): void => onTrashClick && onTrashClick(e, nodes)}
        >
          <Tooltip title="Delete slice">
            <Clear color="error" />
          </Tooltip>
        </IconButton>
      </div>
    </span>
  );
};

export default TreeNode;
