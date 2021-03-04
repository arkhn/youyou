import React, { useState } from 'react';

import { Clear, Folder, LocalOffer, LocalPizza } from '@material-ui/icons';
import { IconButton, Tooltip, Typography } from '@material-ui/core';

import { SimplifiedAttributes } from 'types';
import { OpenDialogState } from 'components/profileEditor/ProfileEditor';

import useStyles from 'components/structureDefinitionTree/style';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';

type TreeNodeProps = {
  nodes: SimplifiedAttributes;
  handleClickSlices: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: SimplifiedAttributes,
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
  const { originalStructureDef } = useSelector(
    (state: RootState) => state.resourceSlice
  );
  const originalElement = originalStructureDef?.snapshot?.element.find(
    (element) => element.id === nodes.id
  );
  const isSlice =
    nodes.id.split('.')[nodes.id.split('.').length - 1].split(':').length > 1;
  const [display, setDisplay] = useState(isSlice ? 'block' : 'none');
  const disabledPizza =
    Number(nodes.max) === 0 ||
    (Number(nodes.max) === 1 &&
      (!Array.isArray(nodes.type) || nodes.type.length <= 1));
  return (
    <span
      onMouseEnter={() => {
        !isSlice && setDisplay('block');
      }}
      onMouseLeave={() => {
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
          onClick={(e) => {
            handleClickSlices(e, nodes, {
              open: true,
              message: { title: 'Add a slice', text: `to ${nodes.newPath}` },
              add: true
            });
          }}
          style={{ display: isSlice ? 'none' : display }}
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
          style={{ display: isSlice && !originalElement ? 'block' : 'none' }}
          onClick={(e) =>
            handleClickSlices(e, nodes, {
              open: true,
              message: {
                title: 'Delete a slice',
                text: `Are you sure you want to delete ${nodes.newPath} ?`
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
