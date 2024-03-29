import React from 'react';

import { TreeView, TreeItem } from '@material-ui/lab';
import { ArrowRight, ArrowDropDown, Settings } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

import { selectStructureDefMeta } from 'state/reducers/resource';
import TreeNode from 'components/structureDefinitionTree/treeNode/TreeNode';
import { OpenDialogState } from 'components/profileEditor/ProfileEditor';
import { useAppDispatch } from 'state/store';
import { SimplifiedAttributes } from 'types';

import useStyles from 'components/structureDefinitionTree/style';

type StructureDefinitionTreeProps = {
  structureDefinitionId: string;
  uiAttributes?: SimplifiedAttributes[];
  onLabelClick?: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: SimplifiedAttributes
  ) => void;
  handleClickSlices: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: SimplifiedAttributes,
    openDialog: OpenDialogState
  ) => void;
  className?: string;
};

interface RenderedNode {
  id: string;
  name: string;
  children: RenderedNode[];
}

const StructureDefinitionTree: React.FC<StructureDefinitionTreeProps> = ({
  onLabelClick,
  uiAttributes,
  structureDefinitionId,
  handleClickSlices,
  className
}) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const renderNode = (nodes: SimplifiedAttributes): JSX.Element => (
    <TreeItem
      className={classes.treeItem}
      key={nodes.newPath ?? ''}
      nodeId={nodes.newPath ?? ''}
      label={<TreeNode handleClickSlices={handleClickSlices} nodes={nodes} />}
      onLabelClick={(e) => {
        onLabelClick && onLabelClick(e, nodes);
      }}
    >
      {Array.isArray(nodes.children) &&
        nodes.children.map((node) => renderNode(node))}
    </TreeItem>
  );

  return (
    <TreeView
      defaultCollapseIcon={<ArrowDropDown />}
      defaultExpandIcon={<ArrowRight />}
      defaultExpanded={[structureDefinitionId]}
      className={className}
    >
      <TreeItem
        className={classes.treeItem}
        nodeId="0"
        onClick={() => {
          dispatch(selectStructureDefMeta());
        }}
        label={
          <span className={classes.treeItemContent}>
            <Settings color="secondary" fontSize="small" />
            <Typography variant="body2" className={classes.treeItemText}>
              Metadatas
            </Typography>
          </span>
        }
      />
      {uiAttributes && uiAttributes.map((attribute) => renderNode(attribute))}
    </TreeView>
  );
};

export default StructureDefinitionTree;
