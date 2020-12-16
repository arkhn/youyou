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
import { findIndex } from 'components/profileEditor/utils';
import cloneDeep from 'lodash.clonedeep';

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
      state.newElementDefinition = undefined;
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
      action: PayloadAction<{
        structureDefinition: IStructureDefinition;
        elementDefinition?: IElementDefinition;
      }>
    ) => {
      const { elementDefinition, structureDefinition } = action.payload;
      if (elementDefinition && elementDefinition.path) {
        const existingElement = structureDefinition.snapshot?.element.find(
          (elem) => elem.path === elementDefinition.path
        );
        const indexToPush = findIndex(
          structureDefinition,
          elementDefinition.path
        );
        const newSDef = cloneDeep(action.payload.structureDefinition);
        if (newSDef.snapshot) {
          existingElement
            ? newSDef.snapshot.element.splice(
                indexToPush - 1,
                1,
                elementDefinition
              )
            : newSDef.snapshot.element.splice(
                indexToPush,
                0,
                elementDefinition
              );
          state.structureDefinition = newSDef;
        }
      } else if (!elementDefinition && structureDefinition.snapshot) {
        const newSDef = {
          ...structureDefinition,
          snapshot: { ...structureDefinition.snapshot }
        };
        state.structureDefinition = newSDef;
      }
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
      state.selectedAttributeId = undefined;
      state.structureDefMeta = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      requestIdsThunk.pending,
      (state: ResourceState, { meta }) => {
        state.requestId = meta.requestId;
        state.loading = true;
      }
    );
    builder.addCase(
      requestIdsThunk.fulfilled,
      (state: ResourceState, { payload }) => {
        state.loading = false;
        state.resources = payload;
        state.error = undefined;
      }
    );
    builder.addCase(
      requestIdsThunk.rejected,
      (state: ResourceState, { payload }) => {
        state.loading = false;
        state.resources = [];
        state.error = payload ?? undefined;
      }
    );
    builder.addCase(
      requestStructureDefThunk.pending,
      (state: ResourceState, { meta }) => {
        state.requestId = meta.requestId;
        state.loading = true;
      }
    );
    builder.addCase(
      requestStructureDefThunk.fulfilled,
      (state: ResourceState, { payload }) => {
        state.loading = false;
        state.structureDefinition = payload;
        state.error = undefined;
        state.structureDefMeta = true;
      }
    );
    builder.addCase(
      requestStructureDefThunk.rejected,
      (state: ResourceState, { payload }) => {
        state.loading = false;
        state.structureDefinition = undefined;
        state.error = payload ?? undefined;
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
  updateStructureDefProfile,
  addSlice,
  deleteSlice
} = resourceSlice.actions;
