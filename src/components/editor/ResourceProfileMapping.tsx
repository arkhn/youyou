import React from 'react';
import { IStructureDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

type ResourceProfileMappingProps = {
    profile: IStructureDefinition | null
}

const ResourceProfileMapping: React.FC<ResourceProfileMappingProps > = ({profile}) => {
    const attributes = profile?.snapshot?.element;

    const renderTree: JSX.Element[] | undefined = attributes?.map((attribute) => {
        return (
            <p key={attribute.id}>{attribute.id}</p>
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