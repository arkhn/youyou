/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import extensionStructureDefinition from 'assets/extensionTemplate';
import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { RenderAttributesTree, ResourceState } from 'types';
import {
  requestIdsThunk,
  requestStructureDefThunk
} from 'state/thunkMiddleware';
import { structureDefAddSlice, structureDefDeleteSlice } from './utils';

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
      state.extensionStructureDefinition = action.payload;
    },
    updateStructureDefProfile: (
      state: ResourceState,
      action: PayloadAction<IStructureDefinition | undefined>
    ) => {
      state.structureDefinition = action.payload;
    },
    addSlice: (
      state: ResourceState,
      action: PayloadAction<{
        nodeToSlice: RenderAttributesTree;
        structureDefinition: IStructureDefinition;
        sliceName: string;
        index: number;
      }>
    ) => {
      const {
        nodeToSlice,
        structureDefinition,
        sliceName,
        index
      } = action.payload;
      state.structureDefinition = structureDefAddSlice(
        nodeToSlice,
        structureDefinition,
        sliceName,
        index
      );
    },
    deleteSlice: (
      state: ResourceState,
      action: PayloadAction<{
        node: RenderAttributesTree;
        structureDefinition: IStructureDefinition;
      }>
    ) => {
      const { node, structureDefinition } = action.payload;
      state.structureDefinition = structureDefDeleteSlice(
        node,
        structureDefinition
      );
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
  updateStructureDefProfile,
  addSlice,
  deleteSlice
} = resourceSlice.actions;
