import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAttributeId } from '../../state/actions/resourceActions';
import { StructureDefinition } from '../../resources/ts/r4/core/resources/structure_definition_pb';

type ResourceProfileMappingProps = {
    profile: StructureDefinition.AsObject | null
}

const ResourceProfileMapping: React.FC<ResourceProfileMappingProps > = ({profile}) => {
    const dispatch = useDispatch();
    const attributes = profile?.snapshot?.element;

    const renderTree: JSX.Element[] | undefined = attributes?.map((attribute) => {
        return (
            <p key={attribute.id} onClick={() => dispatch(selectAttributeId(attribute.id as string))}>{attribute.id}</p>
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