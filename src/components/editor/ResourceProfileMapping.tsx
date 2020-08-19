import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAttributeId } from '../../state/actions/resourceActions';
import { StructureDefinition } from '../../resources/ts/proto/r4/core/resources/structure_definition_pb';
import * as proto_r4_core_datatypes_pb from '../../resources/ts/proto/r4/core/datatypes_pb';

type ResourceProfileMappingProps = {
    resource: StructureDefinition.AsObject | null
}

const ResourceProfileMapping: React.FC<ResourceProfileMappingProps > = ({resource}) => {
    const dispatch = useDispatch();
    const attributes: Array<proto_r4_core_datatypes_pb.ElementDefinition.AsObject> | undefined = resource?.snapshot?.element;

    const renderTree: JSX.Element[] | undefined = attributes?.map((attribute: proto_r4_core_datatypes_pb.ElementDefinition.AsObject, index: number) => {
        return (
            <div key={index} onClick={() => {
                dispatch(selectAttributeId(attribute?.id))
                console.log(attribute)
            }}>{attribute.id}</div>
        );
    });

    return (
        <div>
            <p>Profil Settings</p>
            {renderTree}
        </div>
    );
};

export default ResourceProfileMapping;