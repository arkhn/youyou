import React from 'react';
import AttributeEditor from './AttributeEditor';
import ResourceProfileMapping from './ResourceProfileMapping';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

const Editor: React.FC<{}> = () => {
    const { loading, profile, selectedAttributeId } = useSelector((state: RootState) => state.resource);
    
    // to delete before push
    const state = useSelector((state: RootState) => state.resource);
    console.log(state);

    let attribute: IElementDefinition | null = null;

    if (loading === true ){
        return <div>Loading ...</div>
    };

    if (selectedAttributeId){
        profile?.snapshot?.element.map((element) => {
            if (element.id === selectedAttributeId){
                attribute = element;
            }
        })
    }

    return (
        <div>
            <h1>Profile Editor for {profile?.id}</h1>
            <AttributeEditor attribute={attribute}/>
            <hr />
            <ResourceProfileMapping profile={profile}/>
        </div>
    );
};

export default Editor;