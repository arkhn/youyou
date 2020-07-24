import { IStructureDefinition, IAttributeDefinition } from "../types";

type ResourceState = {
    selectedResource: IStructureDefinition | null,
    selectedAttribute: IAttributeDefinition | null
}

const initialState: ResourceState = {
    selectedResource: null,
    selectedAttribute: null
}

const selectedAttribute = (id: string) => {}

const resource = (state: ResourceState = initialState, action: any) => {
    switch (action.type) {
        case '':
            return state
    
        default:
            return state;
    }
}

export default resource;