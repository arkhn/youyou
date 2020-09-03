import React from "react";
import { useDispatch } from "react-redux";
import { selectAttributeId } from "../../../state/actions/resourceActions";
import {
  IStructureDefinition,
  IElementDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";

type ResourceProfileMappingProps = {
  profile: IStructureDefinition | null;
};

const ResourceProfileMapping: React.FC<ResourceProfileMappingProps> = ({
  profile
}) => {
  const dispatch = useDispatch();
  const attributes: Array<IElementDefinition> | undefined =
    profile?.snapshot?.element;
  const structuredefSettings: string = "structuredefSettings" as string;

  const renderTree: JSX.Element[] | undefined = attributes?.map(
    (attribute: IElementDefinition, index: number) => {
      return (
        <div
          key={index}
          onClick={() => {
            dispatch(selectAttributeId(attribute?.id));
          }}
        >
          {attribute.id}
        </div>
      );
    }
  );

  return (
    <div>
      <div onClick={() => dispatch(selectAttributeId(structuredefSettings))}>
        Structure definition Settings
      </div>
      {renderTree}
    </div>
  );
};

export default ResourceProfileMapping;
