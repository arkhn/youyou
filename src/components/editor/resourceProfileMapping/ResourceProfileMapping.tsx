import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAttributeId } from '../../../state/actions/resourceActions';
import { StructureDefinition } from '../../../resources/ts/proto/r4/core/resources/structure_definition_pb';
import * as proto_r4_core_datatypes_pb from '../../../resources/ts/proto/r4/core/datatypes_pb';

type ResourceProfileMappingProps = {
    profile: StructureDefinition.AsObject | null
}

const ResourceProfileMapping: React.FC<ResourceProfileMappingProps > = ({profile}) => {
    const dispatch = useDispatch();
    const attributes: Array<proto_r4_core_datatypes_pb.ElementDefinition.AsObject> | undefined = profile?.snapshot?.element;
    const profileSettings: proto_r4_core_datatypes_pb.String.AsObject = 'profileSettings' as unknown as proto_r4_core_datatypes_pb.String.AsObject;
    
    const renderTree: JSX.Element[] | undefined = attributes?.map((attribute: proto_r4_core_datatypes_pb.ElementDefinition.AsObject, index: number) => {
        return (
            <div key={index} onClick={() => {
                dispatch(selectAttributeId(attribute?.id))
            }}>{attribute.id}</div>
        );
    });

    return (
        <div>
            <div onClick={() => dispatch(selectAttributeId(profileSettings))}>Profile Settings</div>
            {renderTree}
        </div>
    );
};

export default ResourceProfileMapping;