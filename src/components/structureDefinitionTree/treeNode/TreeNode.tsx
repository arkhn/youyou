import React, { useState } from 'react';

import { Clear, Folder, LocalOffer, LocalPizza } from '@material-ui/icons';
import { IconButton, Tooltip } from '@material-ui/core';

import { RenderAttributesTree } from 'types';
import { OpenDialogState } from 'components/profileEditor/ProfileEditor';

import useStyles from 'components/structureDefinitionTree/treeNode/styles';

type TreeNodeProps = {
  nodes: RenderAttributesTree;
  handleClickSlices: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree,
    openDialog: OpenDialogState
  ) => void;
};

const TreeNode: React.FC<TreeNodeProps> = ({ nodes, handleClickSlices }) => {
  const classes = useStyles();

  /**
   * check if in path, the last word (words in path delimited by '.') contains a ':'
   * for exemple, in Patient.identifier.use:telephone, check if in ["Patient", "identifier", "use:telephone"] the last index "use:telephone".split(":").length > 1
   * If it's superior to 1, means that there's a ":" so it's a slice
   */
  const isSlice =
    nodes.id.split('.')[nodes.id.split('.').length - 1].split(':').length > 1;
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
          onClick={(e): void =>
            handleClickSlices(e, nodes, {
              open: true,
              message: { title: 'Add a slice', text: `to ${nodes.newPath}` },
              add: true
            })
          }
          style={{ display: display }}
        >
          <Tooltip title="Add a slice">
            <LocalPizza />
          </Tooltip>
        </IconButton>
        <IconButton
          size="small"
          style={{ display: isSlice ? 'block' : 'none' }}
          onClick={(e): void =>
            handleClickSlices(e, nodes, {
              open: true,
              message: {
                title: 'Delete a slice',
                text: `Are you sure you want to delete ${nodes.newPath}`
              },
              add: false
            })
          }
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
