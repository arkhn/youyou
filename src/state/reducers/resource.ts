/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import extensionStructureDefinition from 'assets/extensionTemplate';
import {
  IElementDefinition,
  IElementDefinition_Binding as IElementDefinitionBinding,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { SimplifiedAttributes, ResourceState } from 'types';
import {
  requestIdsThunk,
  requestStructureDefThunk
} from 'state/thunkMiddleware';
import { structureDefAddSlice, structureDefDeleteSlice } from './utils';
import { findIndex } from 'components/profileEditor/utils';
import cloneDeep from 'lodash.clonedeep';
import { RootState } from 'state/store';
import { setSnackbarOpen } from './snackbarReducer';

const initialState: ResourceState = {
  resources: [],
  structureDefinition: undefined,
  extensionStructureDefinition: extensionStructureDefinition as IStructureDefinition,
  selectedResourceId: undefined,
  originalStructureDef: undefined,
  loading: false,
  error: undefined,
  structureDefMeta: true,
  currentElementDefinition: undefined
};

export const updateStructureDefProfileThunk = createAsyncThunk<
  | {
      structureDefinition: IStructureDefinition;
      currentElementDefinition?: IElementDefinition;
    }
  | undefined,
  {
    structureDefinition: IStructureDefinition;
    elementDefinition?: IElementDefinition;
  },
  { state: RootState }
>(
  'resourceSlice/updateStructureDefProfileThunk',
  ({ structureDefinition, elementDefinition }, { dispatch }) => {
    if (elementDefinition && elementDefinition.id) {
      const existingElement = structureDefinition.snapshot?.element.find(
        (elem) => elem.id === elementDefinition.id
      );
      const indexToPush = findIndex(structureDefinition, elementDefinition.id);
      const newSDef = cloneDeep(structureDefinition);

      existingElement
        ? newSDef.snapshot!.element.splice(
            indexToPush - 1,
            1,
            elementDefinition
          )
        : newSDef.snapshot!.element.splice(indexToPush, 0, elementDefinition);
      dispatch(
        setSnackbarOpen({
          severity: 'success',
          message: 'Attribute edited !'
        })
      );
      return {
        structureDefinition: newSDef,
        currentElementDefinition: elementDefinition
      };
    } else if (!elementDefinition && structureDefinition.snapshot) {
      const newSDef = {
        ...structureDefinition,
        snapshot: { ...structureDefinition.snapshot }
      };
      dispatch(
        setSnackbarOpen({
          severity: 'success',
          message: 'Structure Definition edited !'
        })
      );
      return {
        structureDefinition: newSDef
      };
    }
    dispatch(
      setSnackbarOpen({
        severity: 'error',
        message: 'Problem'
      })
    );
  }
);

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
      state.currentElementDefinition = undefined;
      state.structureDefMeta = true;
    },
    createCurrentElementDefinition: (
      state: ResourceState,
      action: PayloadAction<SimplifiedAttributes>
    ) => {
      const {
        min,
        max,
        id,
        newPath,
        definition,
        binding,
        type
      } = action.payload;
      let newElement = state.structureDefinition?.snapshot?.element.find(
        (att: IElementDefinition) => att.id === newPath
      );
      if (!newElement) {
        newElement = {
          base: {
            min: min,
            max: max,
            path: id
          },
          min: min,
          max: max,
          id: newPath,
          path: newPath,
          definition: definition,
          type: Array.isArray(type) ? type : [{ code: type }],
          binding: binding ? (binding as IElementDefinitionBinding) : undefined
        };
      }
      state.currentElementDefinition = newElement;
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
      if (elementDefinition && elementDefinition.id) {
        const existingElement = structureDefinition.snapshot?.element.find(
          (elem) => elem.id === elementDefinition.id
        );
        const indexToPush = findIndex(
          structureDefinition,
          elementDefinition.id
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
          state.currentElementDefinition = elementDefinition;
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
        nodeToSlice: SimplifiedAttributes;
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
        node: SimplifiedAttributes;
        structureDefinition: IStructureDefinition;
      }>
    ) => {
      const { node, structureDefinition } = action.payload;
      state.structureDefinition = structureDefDeleteSlice(
        node,
        structureDefinition
      );
      if (
        state.currentElementDefinition &&
        state.currentElementDefinition.id === node.id
      )
        state.currentElementDefinition = undefined;
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
              /*
                split the split we already have, and replace the last element with the new slice name 
                for example if it's Patient.contact:sliceName, it splits contact:sliceName in ["contact", "sliceName"],
                and replace sliceName by newSliceName, new split will be ["contact", "newSliceName"]
              */
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
      state.currentElementDefinition = newSDef?.snapshot?.element.find(
        (el) => el.id === attributesToModify[0].id
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      updateStructureDefProfileThunk.fulfilled,
      (state: ResourceState, { payload }) => {
        if (payload) {
          state.structureDefinition = payload.structureDefinition;
          if (payload.currentElementDefinition)
            state.currentElementDefinition = payload.currentElementDefinition;
        }
      }
    );
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
        payload.snapshot?.element.forEach((element) => {
          if (element.base && element.base.min !== element.min) {
            element.base.min = element.min;
          }
          if (!element.base) {
            element.base = { min: element.min, max: element.max };
          }
          if (element.base && element.base.max !== element.max) {
            element.base.max = element.max;
          }
        });
        state.loading = false;
        state.structureDefinition = payload;
        state.originalStructureDef = payload;
        state.error = undefined;
        state.structureDefMeta = true;
      }
    );
    builder.addCase(
      requestStructureDefThunk.rejected,
      (state: ResourceState, { payload }) => {
        state.loading = false;
        state.structureDefinition = undefined;
        state.originalStructureDef = undefined;
        state.error = payload ?? undefined;
      }
    );
  }
});

export default resourceSlice.reducer;
export const {
  selectResource,
  selectStructureDefMeta,
  createCurrentElementDefinition,
  updateStructureDefExtension,
  updateStructureDefProfile,
  addSlice,
  deleteSlice,
  changeSliceName
} = resourceSlice.actions;
