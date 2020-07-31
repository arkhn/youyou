import React from 'react';
import AttributeEditor from './AttributeEditor';
import ResourceProfileMapping from './ResourceProfileMapping';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const Editor: React.FC<{}> = () => {
    const { loading, profile } = useSelector((state: RootState) => state.resource);

    if (loading === true ){
        return <div>Loading ...</div>
    };


    return (
        <div>
            <h1>Profile Editor for {profile?.id}</h1>
            <ResourceProfileMapping profile={profile}/>
            <AttributeEditor />
        </div>
    );
};

export default Editor;