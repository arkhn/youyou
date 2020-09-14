// REACT
import React from "react";
import { useDispatch } from "react-redux";

// EXTERNAL DEPENDENCIES & MATERIAL UI
import clsx from "clsx";
import {
  IStructureDefinition,
  IElementDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";
import { TreeView, TreeItem } from "@material-ui/lab";
import {
  ArrowRight,
  ArrowDropDown,
  Folder,
  LocalOffer,
  Settings
} from "@material-ui/icons";

// COMPONENTS & STATES
import {
  selectAttributeId,
  selectStructureDefMeta
} from "state/actions/resourceActions";

// STYLES
import useStyles from "./style";

type ResourceProfileMappingProps = {
  profile: IStructureDefinition | null;
};

interface RenderNode {
  id: string;
  name: string;
  children: RenderNode[];
}

const ResourceProfileMapping: React.FC<ResourceProfileMappingProps> = ({
  profile
}) => {
  const dispatch = useDispatch();
  const attributes: Array<IElementDefinition> | undefined =
    profile?.snapshot?.element;
  const classes = useStyles();

  const paths = attributes?.map(
    (attribute: IElementDefinition) => attribute.path
  );

  const renderAttributes = (
    path: string,
    rootPath: string,
    node: RenderNode,
    rootNode: RenderNode
  ): RenderNode => {
    if (node.id === rootPath) {
      return rootNode;
    } else {
      const splitPath = path.split(".");
      const childNode = node.children.find((c) => c.name === splitPath[0]);
      const newPath = splitPath.slice(1, splitPath.length).join(".");
      if (childNode) {
        return renderAttributes(newPath, rootPath, childNode, rootNode);
      } else {
        const newNode = {
          name: splitPath[0],
          id: rootPath,
          children: []
        };
        node.children.push(newNode);
        return renderAttributes(newPath, rootPath, newNode, rootNode);
      }
    }
  };

  let attributesForUI = { name: "", id: "", children: [] };
  if (paths) {
    paths.forEach(
      (path) =>
        path && renderAttributes(path, path, attributesForUI, attributesForUI)
    );
  }
  attributesForUI = attributesForUI.children[0];

  const treeItemContent = (nodes: RenderNode) => (
    <span className={classes.treeItem}>
      {nodes.children.length > 0 ? (
        <Folder className={classes.iconTreeItem} />
      ) : (
        <LocalOffer className={classes.iconTreeItem} />
      )}
      {nodes.name}
    </span>
  );

  const renderNode = (nodes: RenderNode) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={treeItemContent(nodes)}
      onClick={() => dispatch(selectAttributeId(nodes.id))}
    >
      {Array.isArray(nodes.children) &&
        nodes.children.map((node) => renderNode(node))}
    </TreeItem>
  );

  if (!profile) {
    return <>Error</>;
  }

  return (
    <TreeView
      defaultCollapseIcon={<ArrowDropDown />}
      defaultExpandIcon={<ArrowRight />}
      defaultExpanded={[attributesForUI.id]}
    >
      <TreeItem
        nodeId="0"
        onClick={() => dispatch(selectStructureDefMeta())}
        label={
          <span className={clsx(classes.treeItem, classes.textTreeItemMeta)}>
            <Settings
              className={clsx(classes.iconTreeItem, classes.iconTreeItemMeta)}
            />
            Metadatas
          </span>
        }
      />
      {renderNode(attributesForUI)}
    </TreeView>
  );
};

export default ResourceProfileMapping;
