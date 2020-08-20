import React from 'react';
import AttributeEditor from './AttributeEditor';
import ResourceProfileMapping from './ResourceProfileMapping';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { ElementDefinition } from "../../resources/ts/proto/r4/core/datatypes_pb";
import ReactJson from 'react-json-view';

const Editor: React.FC<{}> = () => {
    const { loading, profile, selectedAttributeId } = useSelector((state: RootState) => state.resource);

    let attribute: ElementDefinition.AsObject | null = null;

    if (loading === true ){
        return <div>Loading ...</div>
    };

    if (selectedAttributeId){
        profile?.snapshot?.element.map((element: ElementDefinition.AsObject) => {
            if (element.id === selectedAttributeId){
                attribute = element;
            }
        })
    }

    const renderJsonViewer = () => {
        if (profile){
            return <ReactJson src={profile} />  
        }
    }

    return (
        <div>
            <h1>Profile Editor for {profile?.id}</h1>
            <AttributeEditor attribute={attribute} profile={profile}/>
            <ResourceProfileMapping profile={profile}/>
            {renderJsonViewer()}
        </div>
    );
};

export default Editor;