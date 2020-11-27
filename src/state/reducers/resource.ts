/* eslint-disable @typescript-eslint/explicit-function-return-type */
import extensionStructureDefinition from 'assets/extensionTemplate';
import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { ResourceState } from 'types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  requestIdsThunk,
  requestStructureDefThunk
} from 'state/thunkMiddleware';
import { sortElements } from './utils';

const initialState: ResourceState = {
  resources: [],
  structureDefinition: undefined,
  extensionStructureDefinition: extensionStructureDefinition as IStructureDefinition,
  selectedResourceId: undefined,
  selectedAttributeId: undefined,
  loading: false,
  error: undefined,
  structureDefMeta: true,
  newElementDefinition: undefined
};

const resourceSlice = createSlice({
  name: 'resourceReducer',
  initialState,
  reducers: {
    selectResource: (
      state: ResourceState,
      action: PayloadAction<string | undefined>
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
      action: PayloadAction<IStructureDefinition | undefined>
    ) => {
      action.payload?.snapshot?.element.sort(sortElements);
      state.extensionStructureDefinition = action.payload;
    },
    updateStructureDefProfile: (
      state: ResourceState,
      action: PayloadAction<IStructureDefinition | undefined>
    ) => {
      action.payload?.snapshot?.element.sort(sortElements);
      state.structureDefinition = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(requestIdsThunk.pending, (state, { meta }) => {
      state.requestId = meta.requestId;
      state.loading = true;
    });
    builder.addCase(requestIdsThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.resources = payload;
      state.error = undefined;
    });
    builder.addCase(requestIdsThunk.rejected, (state, { payload }) => {
      state.loading = false;
      state.resources = [];
      state.error = payload ?? undefined;
    });
    builder.addCase(requestStructureDefThunk.pending, (state, { meta }) => {
      state.requestId = meta.requestId;
      state.loading = true;
    });
    builder.addCase(
      requestStructureDefThunk.fulfilled,
      (state, { payload }) => {
        payload.snapshot?.element.sort(sortElements);
        state.loading = false;
        state.structureDefinition = payload;
        state.error = undefined;
        state.structureDefMeta = true;
      }
    );
    builder.addCase(requestStructureDefThunk.rejected, (state, { payload }) => {
      state.loading = false;
      state.structureDefinition = undefined;
      state.error = payload ?? undefined;
    });
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
