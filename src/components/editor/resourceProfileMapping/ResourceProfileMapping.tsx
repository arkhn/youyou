import React from "react";
import { useDispatch } from "react-redux";
import { selectAttributeId } from "../../../state/actions/resourceActions";
import {
  IStructureDefinition,
  IElementDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";

import { TreeView, TreeItem } from "@material-ui/lab";

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
  const structuredefSettings: string = "structuredefSettings";

  let attributesToRender: RenderTree[] = [];
  attributes?.forEach((attribute) =>
    attribute.id?.split(".").reduce(
      (object: any, name: string) => {
        let node = (object.children = object.children || []).find(
          (item: RenderTree) => item.name === name
        );
        if (!node && attribute.path) {
          object.children.push({ name, id: attribute.path });
        }
        return node;
      },
      { children: attributesToRender }
    )
  );
  console.log(attributesToRender);

  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <div>
      <TreeView>
        <TreeItem
          nodeId="0"
          onClick={() => dispatch(selectAttributeId(structuredefSettings))}
          label="Structure definition Settings"
        />
        {renderTree(attributesToRender[0])}
      </TreeView>
    </div>
  );
};

export default ResourceProfileMapping;
