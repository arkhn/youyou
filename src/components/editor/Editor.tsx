import React from 'react';
import AttributeEditor from './AttributeEditor';
import ResourceProfileMapping from './ResourceProfileMapping';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { ElementDefinition } from "../../resources/ts/proto/r4/core/datatypes_pb"

const Editor: React.FC<{}> = () => {
    const { loading, resource, profile, selectedAttributeId } = useSelector((state: RootState) => state.resource);
    const state = useSelector((state: RootState) => state.resource);
    console.log(state.profile?.snapshot?.element[13])

    let attribute: ElementDefinition.AsObject | null = null;

    if (loading === true ){
        return <div>Loading ...</div>
    };

    if (selectedAttributeId){
        resource?.snapshot?.element.map((element: ElementDefinition.AsObject) => {
            if (element.id === selectedAttributeId){
                attribute = element;
            }
        })
    }

    return (
        <div>
            <h1>Profile Editor for {resource?.id}</h1>
            <AttributeEditor attribute={attribute} profile={profile}/>
            <ResourceProfileMapping resource={resource}/>
        </div>
    );
};

export default Editor;