import { R4 } from '@ahryman40k/ts-fhir-types';
import { ResourceAction, SELECT_RESOURCE, GET_DATA_SUCCESS, GetDataFailureAction, GetDataStartAction, GetDataSuccessAction, GET_DATA_START, GET_DATA_FAILURE } from '../actions/resourceActions';
import { IStructureDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

export type ResourceState = {
    data: R4.IStructureDefinition[];
    profiles: R4.IStructureDefinition[];
    selectedResourceId: string | null;
    selectedAttributeId: string | null;
    loading: boolean;
    error: Error | null;
}

const initialState: ResourceState = {
    data: [],
    profiles: [],
    selectedResourceId: null,
    selectedAttributeId: null,
    loading: false,
    error: null
}

export type AllResourcesAction = GetDataFailureAction | GetDataStartAction | GetDataSuccessAction | ResourceAction;

export const resource = (state: ResourceState = initialState, action: AllResourcesAction): ResourceState => {
    switch (action.type) {
        case SELECT_RESOURCE:
            return {
                ...state,
                selectedResourceId: action.id
            }
        case GET_DATA_START:
            return {
                ...state,
                loading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}