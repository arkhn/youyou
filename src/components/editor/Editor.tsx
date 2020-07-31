import React from 'react';
import AttributeEditor from './AttributeEditor';
import ResourceProfileMapping from './ResourceProfileMapping';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { IStructureDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

const Editor: React.FC<{}> = () => {
    const stateApp: RootState = useSelector((state: RootState) => state);
    const resourceSelected: IStructureDefinition | null = useSelector((state: RootState) => state.resource.profiles);

    if (stateApp.resource.loading === true ){
        return <div>Loading ...</div>
    }


    return (
        <div>
            <h1>Profile Editor for {resourceSelected?.id}</h1>
            <ResourceProfileMapping />
            <AttributeEditor />
        </div>
    )
}

export default Editor;