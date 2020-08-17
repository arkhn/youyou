import React from 'react';
import { IStructureDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { useDispatch } from 'react-redux';
import { selectAttributeId } from '../../state/actions/resourceActions';

type ResourceProfileMappingProps = {
    profile: IStructureDefinition | null
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