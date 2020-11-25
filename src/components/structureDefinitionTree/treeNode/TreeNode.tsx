import React, { useState } from 'react';
import { Folder, LocalOffer, LocalPizza } from '@material-ui/icons';
import { RenderAttributesTree } from 'types';

import useStyles from 'components/structureDefinitionTree/treeNode/styles';
import { IconButton } from '@material-ui/core';

type TreeNodeProps = {
  nodes: RenderAttributesTree;
  onPizzaClick?: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree
  ) => void;
};

const TreeNode: React.FC<TreeNodeProps> = ({ nodes, onPizzaClick }) => {
  const classes = useStyles();
  const [display, setDisplay] = useState('none');

  return (
    <span
      className={classes.index}
      onMouseEnter={(): void => setDisplay('block')}
      onMouseLeave={(): void => setDisplay('none')}
    >
      <span className={classes.treeItem}>
        {nodes.children.length > 0 ? (
          <Folder className={classes.iconTreeItem} />
        ) : (
          <LocalOffer className={classes.iconTreeItem} />
        )}
        {nodes.name}
      </span>
      <IconButton
        className={classes.pizzaIcon}
        onClick={(e): void => onPizzaClick && onPizzaClick(e, nodes)}
      >
        <LocalPizza style={{ display: display }} />
      </IconButton>
    </span>
  );
};

export default TreeNode;
