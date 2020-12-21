/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import extensionStructureDefinition from 'assets/extensionTemplate';
import {
  IElementDefinition,
  IElementDefinition_Binding as IElementDefinitionBinding,
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
  loading: false,
  error: undefined,
  structureDefMeta: true,
  newElementDefinition: undefined
};

const resourceSlice = createSlice({
  name: 'resourceReducer',
  initialState,
  reducers: {
    /**
     * select the resource we want to profile
     * @param action action.payload will be the id of the resource
     */
    selectResource: (
      state: ResourceState,
      action: PayloadAction<string | undefined>
    ) => {
      state.selectedResourceId = action.payload;
    },
    /**
     * if we select structureDefMeta, we can modify the metadata of the structure definition, and state.structureDefMeta = true
     */
    selectStructureDefMeta: (state: ResourceState) => {
      state.newElementDefinition = undefined;
      state.structureDefMeta = true;
    },
    createNewElementDefinition: (
      state: ResourceState,
      action: PayloadAction<RenderAttributesTree>
    ) => {
      let newElement = state.structureDefinition?.snapshot?.element.find(
        (att: IElementDefinition) => att.id === action.payload.newPath
      );
      if (!newElement) {
        newElement = {
          base: {
            min: action.payload.min,
            max: action.payload.max,
            path: action.payload.id
          },
          min: action.payload.min,
          max: action.payload.max,
          id: action.payload.newPath,
          path: action.payload.newPath,
          definition: action.payload.definition,
          binding: action.payload.binding
            ? (action.payload.binding as IElementDefinitionBinding)
            : undefined
        };
      }
      state.newElementDefinition = newElement;
      state.structureDefMeta = false;
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
      state.newElementDefinition = undefined;
    },
    changeSliceName: (
      state: ResourceState,
      action: PayloadAction<{ id: string; newSliceName: string }>
    ) => {
      const { id, newSliceName } = action.payload;
      const splitedId = id.split('.')[id.split('.').length - 1];
      const attributesToModify: IElementDefinition[] = [];
      const indexesToModify: number[] = [];
      let newId: string[] = [];
      const newSDef = cloneDeep(state.structureDefinition);
      if (newSDef?.snapshot) {
        newSDef?.snapshot.element.forEach((element, indexToPush) => {
          element?.id?.split('.').forEach((split, index) => {
            if (split === splitedId && element && element.id) {
              const splitedSplit = split.split(':');
              splitedSplit.splice(splitedSplit.length - 1, 1, newSliceName);
              const newPath = splitedSplit.join(':');
              newId = element.id.split('.');
              newId.splice(index, 1, newPath);
              attributesToModify.push({
                ...element,
                id: newId.join('.'),
                sliceName: newSliceName
              });
              indexesToModify.push(indexToPush);
            }
          });
        });
      }
      indexesToModify.forEach((index, i) => {
        newSDef?.snapshot?.element.splice(index, 1, attributesToModify[i]);
      });
      state.structureDefinition = newSDef;
      state.newElementDefinition = newSDef?.snapshot?.element.find(
        (el) => el.id === attributesToModify[0].id
      );
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
  selectStructureDefMeta,
  createNewElementDefinition,
  updateStructureDefExtension,
  updateStructureDefProfile,
  addSlice,
  deleteSlice,
  changeSliceName
} = resourceSlice.actions;
