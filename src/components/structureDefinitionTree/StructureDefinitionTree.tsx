import React from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';
import { TreeView, TreeItem } from '@material-ui/lab';
import { ArrowRight, ArrowDropDown, Settings } from '@material-ui/icons';

import { selectStructureDefMeta } from 'state/actions/resourceActions';
import { RenderAttributesTree } from 'types';
import TreeNode from './treeNode/TreeNode';

import useStyles from './style';

type StructureDefinitionTreeProps = {
  uiAttributes?: RenderAttributesTree;
  structureDefinitionId?: string;
  onLabelClick?: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree
  ) => void;
  onPizzaClick?: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree
  ) => void;
};

export interface RenderNode {
  id: string;
  name: string;
  children: RenderNode[];
}

const StructureDefinitionTree: React.FC<StructureDefinitionTreeProps> = ({
  onLabelClick,
  uiAttributes,
  onPizzaClick,
  structureDefinitionId
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const renderNode = (nodes: RenderAttributesTree): JSX.Element => (
    <TreeItem
      key={nodes.newPath ?? ''}
      nodeId={nodes.newPath ?? ''}
      label={<TreeNode onPizzaClick={onPizzaClick} nodes={nodes} />}
      onLabelClick={(e): void => {
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
    >
      <TreeItem
        nodeId="0"
        onClick={(): void => {
          dispatch(selectStructureDefMeta());
        }}
        label={
          <span className={clsx(classes.treeItem, classes.textTreeItemMeta)}>
            <Settings
              className={clsx(classes.iconTreeItem, classes.iconTreeItemMeta)}
            />
            Metadatas
          </span>
        }
      />
      {uiAttributes && renderNode(uiAttributes)}
    </TreeView>
  );
};

export default StructureDefinitionTree;
