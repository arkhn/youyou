/* eslint-disable @typescript-eslint/explicit-function-return-type */
import extensionStructureDefinition from 'assets/extensionTemplate';
/* import {
  SELECT_RESOURCE,
  ResourceAction,
  GET_IDS_FAILURE,
  GetIdsFailureAction,
  GET_FETCH_START,
  GetFetchStartAction,
  GET_IDS_SUCCESS,
  GetIdsSuccessAction,
  UPDATE_STRUCTURE_DEF_PROFILE,
  UpdateStructureDefProfileAction,
  UPDATE_STRUCTURE_DEF_FAILURE,
  UpdateStructureDefFailureAction,
  SELECT_ATTRIBUTE,
  SelectAttributeAction,
  UPDATE_STRUCTURE_DEF_EXTENSION,
  UpdateStructureDefExtensionAction,
  SELECT_STRUCTUREDEFMETA,
  SelectStructureDefMetaAction,
  CREATE_NEW_ELEMENTDEFINITION,
  CreateNewElementDefinitionAction
} from 'state/actions/resourceActions'; */
import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { FetchedIds, ResourceState } from 'types';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'state/store';
import api from 'services/api';
import { AxiosResponse } from 'axios';

const initialState: ResourceState = {
  resources: [],
  structureDefinition: null,
  extensionStructureDefinition: extensionStructureDefinition as IStructureDefinition,
  selectedResourceId: null,
  selectedAttributeId: undefined,
  loading: false,
  error: null,
  structureDefMeta: true,
  newElementDefinition: undefined
};

/* export type AllResourcesAction =
  | GetIdsFailureAction
  | GetFetchStartAction
  | GetIdsSuccessAction
  | ResourceAction
  | UpdateStructureDefFailureAction
  | UpdateStructureDefProfileAction
  | SelectAttributeAction
  | UpdateStructureDefExtensionAction
  | SelectStructureDefMetaAction
  | CreateNewElementDefinitionAction; */

const requestIdsThunk = createAsyncThunk<
  { id: string }[],
  void,
  { state: RootState; rejectValue: Error }
>(
  'resource/requestIdsThunk',
  async (param, { dispatch, getState, rejectWithValue }) => {
    const response: AxiosResponse<any> = await api.get(
      `/StructureDefinition?kind=resource&derivation=specialization&_elements=id&_count=150`
    );
    if (response.status === 200) {
      return response.data.entry.map((result: FetchedIds) => result.resource);
    } else {
      return rejectWithValue(new Error(response.statusText));
    }
  }
);

const requestStructureDefThunk = createAsyncThunk<
  IStructureDefinition,
  string,
  { state: RootState; rejectValue: Error }
>(
  'resource/requestResourceThunk',
  async (param, { dispatch, getState, rejectWithValue }) => {
    const response: AxiosResponse<any> = await api.get(
      `/StructureDefinition?kind=resource&derivation=specialization&id=${param}`
    );
    if (response.status === 200) {
      return response.data.entry[0].resource;
    } else {
      return rejectWithValue(new Error(response.statusText));
    }
  }
);

const resourceSlice = createSlice({
  name: 'resourceReducer',
  initialState,
  reducers: {
    selectResource: (
      state: ResourceState,
      action: PayloadAction<string | null>
    ) => {
      state.selectedResourceId = action.payload;
    },
    selectAttributeId: (
      state: ResourceState,
      action: PayloadAction<string | undefined>
    ) => {
      state.selectedAttributeId = action.payload;
      state.structureDefMeta = false;
    },
    selectStructureDefMeta: (state: ResourceState) => {
      state.selectedAttributeId = undefined;
      state.structureDefMeta = true;
    },
    createNewElementDefinition: (
      state: ResourceState,
      action: PayloadAction<IElementDefinition | undefined>
    ) => {
      state.newElementDefinition = action.payload;
    },
    updateStructureDefExtension: (
      state: ResourceState,
      action: PayloadAction<IStructureDefinition | null>
    ) => {
      state.extensionStructureDefinition = action.payload;
    },
    updateStructureDefProfile: (
      state: ResourceState,
      action: PayloadAction<IStructureDefinition | null>
    ) => {
      state.structureDefinition = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(requestIdsThunk.pending, (state, { meta }) => {
      state.requestId = meta.requestId;
      state.loading = true;
    });
    builder.addCase(requestIdsThunk.fulfilled, (state, { payload, meta }) => {
      state.loading = meta.requestId !== state.requestId;
      console.log(payload);
      state.resources = payload;
      state.error = null;
    });
    builder.addCase(requestIdsThunk.rejected, (state, { payload, meta }) => {
      state.loading = meta.requestId !== state.requestId;
      state.resources = [];
      state.error = payload ?? null;
    });
    builder.addCase(requestStructureDefThunk.pending, (state, { meta }) => {
      state.requestId = meta.requestId;
      state.loading = true;
    });
    builder.addCase(
      requestStructureDefThunk.fulfilled,
      (state, { payload, meta }) => {
        state.loading = meta.requestId !== state.requestId;
        console.log(payload);
        state.structureDefinition = payload;
        state.error = null;
      }
    );
    builder.addCase(
      requestStructureDefThunk.rejected,
      (state, { payload, meta }) => {
        state.loading = meta.requestId !== state.requestId;
        state.structureDefinition = null;
        state.error = payload ?? null;
      }
    );
  }
});

export default resourceSlice.reducer;
export const {
  selectResource,
  selectAttributeId,
  selectStructureDefMeta,
  createNewElementDefinition,
  updateStructureDefExtension,
  updateStructureDefProfile
} = resourceSlice.actions;
export { requestIdsThunk, requestStructureDefThunk };

/* export const resource = (
  state: ResourceState = initialState,
  action: AllResourcesAction
): ResourceState => {
  switch (action.type) {
    case SELECT_RESOURCE:
      return {
        ...state,
        selectedResourceId: action.payload
      };
    case GET_FETCH_START:
      return {
        ...state,
        loading: true
      };
    case GET_IDS_SUCCESS:
      return {
        ...state,
        loading: false,
        resources: action.payload,
        error: null
      };
    case GET_IDS_FAILURE:
      return {
        ...state,
        loading: false,
        resources: [],
        error: action.payload
      };
    case UPDATE_STRUCTURE_DEF_PROFILE:
      return {
        ...state,
        loading: false,
        structureDefinition: action.payload,
        error: null
      };
    case UPDATE_STRUCTURE_DEF_FAILURE:
      return {
        ...state,
        loading: false,
        structureDefinition: null,
        error: action.payload
      };
    case SELECT_ATTRIBUTE:
      return {
        ...state,
        selectedAttributeId: action.payload,
        structureDefMeta: false
      };
    case UPDATE_STRUCTURE_DEF_EXTENSION:
      return {
        ...state,
        loading: false,
        extensionStructureDefinition: action.payload,
        error: null
      };
    case SELECT_STRUCTUREDEFMETA:
      return {
        ...state,
        selectedAttributeId: undefined,
        structureDefMeta: true
      };
    case CREATE_NEW_ELEMENTDEFINITION:
      return {
        ...state,
        newElementDefinition: action.payload
      };
    default:
      return state;
  }
};
 */
