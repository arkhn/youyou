import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

const ResourceProfileMapping: React.FC<{}> = () => {
    const attributes: IElementDefinition[] | undefined = useSelector((state: RootState) => state.resource.profiles?.snapshot?.element);

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