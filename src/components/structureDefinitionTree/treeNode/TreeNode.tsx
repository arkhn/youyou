import React, { useState } from 'react';

import { Clear, Folder, LocalOffer, LocalPizza } from '@material-ui/icons';
import { IconButton, Tooltip, Typography } from '@material-ui/core';

import { RenderAttributesTree } from 'types';
import { OpenDialogState } from 'components/profileEditor/ProfileEditor';

import useStyles from 'components/structureDefinitionTree/style';

type TreeNodeProps = {
  nodes: RenderAttributesTree;
  handleClickSlices: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree,
    openDialog: OpenDialogState
  ) => void;
};

const TreeNode: React.FC<TreeNodeProps> = ({ nodes, handleClickSlices }) => {
  /**
   * check if in path, the last word (words in path delimited by '.') contains a ':'
   * for exemple, in Patient.identifier.use:telephone, check if in ["Patient", "identifier", "use:telephone"] the last index "use:telephone".split(":").length > 1
   * If it's superior to 1, means that there's a ":" so it's a slice
   */
  const classes = useStyles();
  const isSlice =
    nodes.id.split('.')[nodes.id.split('.').length - 1].split(':').length > 1;
  const [display, setDisplay] = useState(isSlice ? 'block' : 'none');
  const disabledPizza =
    nodes.max === '*' ||
    Number(nodes.max) > 1 ||
    (Number(nodes.max) === 1 &&
      Array.isArray(nodes.type) &&
      nodes.type.length > 1)
      ? false
      : true;

  return (
    <span
      onMouseEnter={(): void => {
        !isSlice && setDisplay('block');
      }}
      onMouseLeave={(): void => {
        !isSlice && setDisplay('none');
      }}
      className={classes.treeItemContent}
    >
      {nodes.children.length > 0 ? (
        <Folder fontSize="small" />
      ) : (
        <LocalOffer fontSize="small" />
      )}
      <LocalPizza
        fontSize="small"
        style={{ display: isSlice ? 'block' : 'none' }}
        color="secondary"
        className={classes.iconStartTreeItemPizza}
      />
      <Typography variant="body2" className={classes.treeItemText}>
        {nodes.name}
      </Typography>
      <div className={classes.iconEndTreeItem}>
        <IconButton
          size="small"
          onClick={(e): void => {
            handleClickSlices(e, nodes, {
              open: true,
              message: { title: 'Add a slice', text: `to ${nodes.newPath}` },
              add: true
            });
          }}
          style={{ display: display }}
          disabled={disabledPizza}
        >
          <Tooltip title={'Add a slice'}>
            <LocalPizza
              fontSize="small"
              className={
                disabledPizza ? undefined : classes.iconEndTreeItemPizza
              }
            />
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
            <Clear color="error" fontSize="small" />
          </Tooltip>
        </IconButton>
      </div>
    </span>
  );
};

export default TreeNode;
