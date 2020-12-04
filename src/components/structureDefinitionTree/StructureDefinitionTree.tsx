import React from 'react';

import clsx from 'clsx';
import { TreeView, TreeItem } from '@material-ui/lab';
import { ArrowRight, ArrowDropDown, Settings } from '@material-ui/icons';

import { selectStructureDefMeta } from 'state/reducers/resource';
import TreeNode from 'components/structureDefinitionTree/treeNode/TreeNode';
import { OpenDialogState } from 'components/profileEditor/ProfileEditor';
import { useAppDispatch } from 'state/store';
import { RenderAttributesTree } from 'types';

import useStyles from './style';

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
  handleClickSlices
}) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const renderNode = (nodes: RenderAttributesTree): JSX.Element => (
    <TreeItem
      key={nodes.newPath ?? ''}
      nodeId={nodes.newPath ?? ''}
      label={<TreeNode handleClickSlices={handleClickSlices} nodes={nodes} />}
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
