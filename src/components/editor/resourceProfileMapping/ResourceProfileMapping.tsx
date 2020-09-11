import React from "react";
import { useDispatch } from "react-redux";
import { selectAttributeId } from "src/state/actions/resourceActions";
import {
  IStructureDefinition,
  IElementDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";
import useStyles from "./style";
import { TreeView, TreeItem } from "@material-ui/lab";
import {
  ArrowRight,
  ArrowDropDown,
  Folder,
  LocalOffer,
  Settings
} from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import clsx from "clsx";

type ResourceProfileMappingProps = {
  profile: IStructureDefinition | null;
};

interface RenderTree {
  id: string;
  name: string;
  children?: RenderTree[];
}

const ResourceProfileMapping: React.FC<ResourceProfileMappingProps> = ({
  profile
}) => {
  const dispatch = useDispatch();
  const attributes: Array<IElementDefinition> | undefined =
    profile?.snapshot?.element;
  const classes = useStyles();

  let attributesToRender: RenderTree[] = [];
  if (attributes) {
    attributes.forEach((attribute) => {
      if (attribute.path) {
        attribute.path.split(".").reduce(
          (render: any, name: string) => {
            let node = (render.children = render.children || []).find(
              (item: RenderTree) => item.name === name
            );
            if (!node && attribute.path) {
              render.children.push({ name, id: attribute.path });
            }
            return node;
          },
          { children: attributesToRender }
        );
      }
    });
  }

  const treeItemContent = (nodes: RenderTree) => (
    <span className={classes.treeItem}>
      {nodes.children ? (
        <Folder className={classes.iconTreeItem} />
      ) : (
        <LocalOffer className={classes.iconTreeItem} />
      )}
      {nodes.name}
    </span>
  );

  const renderTree = (nodes: RenderTree) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={treeItemContent(nodes)}
      onClick={() => dispatch(selectAttributeId(nodes.id))}
    >
      {Array.isArray(nodes.children) &&
        nodes.children.map((node) => renderTree(node))}
    </TreeItem>
  );

  if (attributesToRender && profile) {
    return (
      <>
        <Typography variant="h1" className={classes.resourceId}>
          {profile.id}
        </Typography>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ArrowDropDown />}
          defaultExpandIcon={<ArrowRight />}
          defaultExpanded={[attributesToRender[0].id]}
        >
          <TreeItem
            nodeId="0"
            onClick={() => dispatch(selectAttributeId("structureDefSettings"))}
            label={
              <span
                className={clsx(classes.treeItem, classes.textTreeItemMeta)}
              >
                <Settings
                  className={clsx(
                    classes.iconTreeItem,
                    classes.iconTreeItemMeta
                  )}
                />
                Metadatas
              </span>
            }
          />
          {renderTree(attributesToRender[0])}
        </TreeView>
      </>
    );
  }

  return <>Error</>;
};

export default ResourceProfileMapping;
