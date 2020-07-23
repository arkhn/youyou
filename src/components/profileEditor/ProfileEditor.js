import React from 'react';
import { useParams } from "react-router-dom";

const ResourceProfileMapping = (props) => {
    let { resourceId } = useParams()

    if (resourceId === 'profileSettings'){
        return (
            <div>Profile Settings</div>
        );
    } else {
        return (
            <div>
                <h2>{ resourceId }</h2>
            </div>
        );
    }
}

export default ResourceProfileMapping;