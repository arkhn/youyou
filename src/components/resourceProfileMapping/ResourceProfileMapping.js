import React from 'react';
import { useParams } from "react-router-dom";

const ResourceProfileMapping = (props) => {
    let { topicId } = useParams()

    if (topicId === 'profileSettings'){
        return (
            <div>Profile Settings</div>
        );
    } else {
        return (
            <div>
                <h2>{ topicId }</h2>
            </div>
        );
    }
}

export default ResourceProfileMapping;