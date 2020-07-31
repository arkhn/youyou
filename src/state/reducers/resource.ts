import { R4 } from '@ahryman40k/ts-fhir-types';
import { ResourceAction, SELECT_RESOURCE, GET_IDS_SUCCESS, GetIdsFailureAction, GetFetchStartAction, GetIdsSuccessAction, GET_FETCH_START, GET_IDS_FAILURE, GetStructureDefFailureAction, GetStructureDefSuccessAction, GET_STRUCTUREDEF_SUCCESS, GET_STRUCTUREDEF_FAILURE } from '../actions/resourceActions';

export type DataFetched = {
    id: string
}

export type ResourceState = {
    data: DataFetched[];
    profiles: R4.IStructureDefinition | null;
    selectedResourceId: string | null;
    selectedAttributeId: string | null;
    loading: boolean;
    error: Error | null;
}

const initialState: ResourceState = {
    data: [],
    profiles: null,
    selectedResourceId: null,
    selectedAttributeId: null,
    loading: false,
    error: null
}

export type AllResourcesAction = GetIdsFailureAction | GetFetchStartAction | GetIdsSuccessAction | ResourceAction | GetStructureDefFailureAction | GetStructureDefSuccessAction;

export const resource = (state: ResourceState = initialState, action: AllResourcesAction): ResourceState => {
    switch (action.type) {
        case SELECT_RESOURCE:
            return {
                ...state,
                selectedResourceId: action.payload
            }
        case GET_FETCH_START:
            return {
                ...state,
                loading: true
            }
        case GET_IDS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case GET_IDS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        case GET_STRUCTUREDEF_SUCCESS:
            return {
                ...state,
                loading: false,
                profiles: action.payload,
                error: null
            }
        case GET_STRUCTUREDEF_FAILURE:
            return {
                ...state,
                loading: false,
                profiles: null,
                error: action.payload
            } 
        default:
            return state;
    }
}