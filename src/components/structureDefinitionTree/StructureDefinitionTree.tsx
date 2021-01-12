import React from 'react';

import { TreeView, TreeItem } from '@material-ui/lab';
import { ArrowRight, ArrowDropDown, Settings } from '@material-ui/icons';

import { selectStructureDefMeta } from 'state/reducers/resource';
import TreeNode from 'components/structureDefinitionTree/treeNode/TreeNode';
import { OpenDialogState } from 'components/profileEditor/ProfileEditor';
import { useAppDispatch } from 'state/store';
import { RenderAttributesTree } from 'types';

import useStyles from 'components/structureDefinitionTree/style';
import { Typography } from '@material-ui/core';

type StructureDefinitionTreeProps = {
  structureDefinitionId?: string;
  uiAttributes?: RenderAttributesTree;
  onLabelClick?: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree
  ) => void;
  handleClickSlices: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree,
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

  const renderNode = (nodes: RenderAttributesTree): JSX.Element => (
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
      defaultExpanded={[structureDefinitionId] as string[]}
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
      {uiAttributes && renderNode(uiAttributes)}
    </TreeView>
  );
};

export default StructureDefinitionTree;
