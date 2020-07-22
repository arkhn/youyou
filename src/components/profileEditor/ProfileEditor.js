import React from 'react';
import ResourceProfileMapping from '../resourceProfileMapping/ResourceProfileMapping';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const getResources = loader(
    'src/graphql/queryProfile.gql'
);

const Menu = () => {
    const source = "Patient";
    const { data: resourceData, loading: resourceLoading, error: resourceError } = useQuery(getResources, {variables: { definitionId: source }});
    const { data: resourceStructureDef, loading: structureDefLoading, error: structureDefError } = useQuery(getResources, {variables: { definitionId: "StructureDefinition" }})

    if (resourceLoading) return <span>Loading</span>
    if (resourceError) return <span>Error</span>
    if (structureDefLoading) return <span>Loading</span>
    if (structureDefError) return <span>Error</span>

    const structureDefinition = resourceData.structureDefinition;
    const attributes = resourceData.structureDefinition.attributes;

    const renderTopic = attributes.map((attribute, i) => {
        const attributeName = attribute.attribute.id;
        return (
            <li key={i}>
                <Link to={`/${structureDefinition.id}/${attributeName}`}>{attributeName}</Link>
            </li>
        )
    });

    console.log(resourceData, resourceStructureDef);

    return (
        <Router>
        <div>
            <ul>
                <li>
                    <Link to={`/${structureDefinition.id}/profileSettings`}>
                        profile settings
                    </Link>
                </li>
                {renderTopic}
            </ul>
            <Switch>
            <Route path="/:profile/:topicId">
                <ResourceProfileMapping everything={resourceData} structure={resourceStructureDef}/>
            </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default Menu;