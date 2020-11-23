import React from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';
import { TreeView, TreeItem } from '@material-ui/lab';
import {
  ArrowRight,
  ArrowDropDown,
  Folder,
  LocalOffer,
  Settings
} from '@material-ui/icons';

import { selectStructureDefMeta } from 'state/actions/resourceActions';
import { RenderAttributesTree } from 'types';

import useStyles from './style';

type StructureDefinitionTreeProps = {
  uiAttributes?: RenderAttributesTree;
  onLabelClick?: (
    event: React.MouseEvent<Element, MouseEvent>,
    nodes: RenderAttributesTree
  ) => void;
};

interface RenderNode {
  id: string;
  name: string;
  children: RenderNode[];
}

const StructureDefinitionTree: React.FC<StructureDefinitionTreeProps> = ({
  onLabelClick,
  uiAttributes
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const treeItemContent = (nodes: RenderNode): JSX.Element => (
    <span className={classes.treeItem}>
      {nodes.children.length > 0 ? (
        <Folder className={classes.iconTreeItem} />
      ) : (
        <LocalOffer className={classes.iconTreeItem} />
      )}
      {nodes.name}
    </span>
  );

  const renderNode = (nodes: RenderAttributesTree): JSX.Element => (
    <TreeItem
      key={nodes.newPath ?? ''}
      nodeId={nodes.newPath ?? ''}
      label={treeItemContent(nodes)}
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
      defaultExpanded={uiAttributes ? [uiAttributes.id] : undefined}
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
