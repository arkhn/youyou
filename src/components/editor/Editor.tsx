import React from "react";
import AttributeEditor from "./attributeEditor/AttributeEditor";
import ResourceProfileMapping from "./resourceProfileMapping/ResourceProfileMapping";
import ProfileSettings from "./profileSettings/ProfileSettings";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import {
  ElementDefinition,
  String,
} from "../../resources/ts/proto/r4/core/datatypes_pb";

const Editor: React.FC<{}> = () => {
  const { loading, profile, selectedAttributeId } = useSelector(
    (state: RootState) => state.resource
  );
  const profileSettings: String.AsObject = ("profileSettings" as unknown) as String.AsObject;

  let attribute: ElementDefinition.AsObject | undefined = undefined;

  if (selectedAttributeId && selectedAttributeId !== profileSettings) {
    attribute = profile?.snapshot?.element.find(
      (attribute) => attribute.id === selectedAttributeId
    );
  }

  const renderAttributeEditor = () => {
    if (selectedAttributeId === profileSettings) {
      return <ProfileSettings profile={profile} />;
    } else {
      return <AttributeEditor attribute={attribute} profile={profile} />;
    }
  };

  if (loading === true) {
    return <div>Loading ...</div>;
  }

  if (profile) {
    return (
      <div>
        <h1>Profile Editor for {profile.id}</h1>
        <a
          href={
            "data:json/plain;charset=utf-8," +
            encodeURIComponent(JSON.stringify(profile, null, 2))
          }
          download={profile.name + ".json"}
        >
          <button>Download</button>
        </a>
        {renderAttributeEditor()}
        <ResourceProfileMapping profile={profile} />
      </div>
    );
  }

  return <div>Error</div>;
};

export default Editor;
