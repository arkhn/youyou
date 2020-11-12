import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { TreeView, TreeItem } from '@material-ui/lab';
import {
  ArrowRight,
  ArrowDropDown,
  Folder,
  LocalOffer,
  Settings
} from '@material-ui/icons';

import {
  selectAttributeId,
  selectStructureDefMeta
} from 'state/actions/resourceActions';
import { RootState } from 'state/store';
import { createComplexSnapshot } from 'components/structureDefinitionTree/utils';

import useStyles from './style';
import { RenderAttributesTree } from 'types';

type StructureDefinitionTreeProps = {
  elements: IElementDefinition[] | undefined;
};

interface RenderNode {
  id: string;
  name: string;
  children: RenderNode[];
}

const StructureDefinitionTree: React.FC<StructureDefinitionTreeProps> = ({
  elements
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { complexTypes, primitiveTypes } = useSelector(
    (state: RootState) => state.fhirDataTypes
  );

  const attributesForUI = elements
    ? createComplexSnapshot(elements, primitiveTypes, complexTypes)
    : undefined;

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
      key={nodes.id}
      nodeId={nodes.id}
      label={treeItemContent(nodes)}
      onLabelClick={(e: React.MouseEvent<Element, MouseEvent>): void => {
        e.preventDefault();
        dispatch(selectAttributeId(nodes.newPath));
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
      defaultExpanded={attributesForUI ? [attributesForUI.id] : undefined}
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
      {attributesForUI && renderNode(attributesForUI)}
    </TreeView>
  );
};

export default StructureDefinitionTree;
