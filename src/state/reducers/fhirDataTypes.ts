import { createSlice } from '@reduxjs/toolkit';

import { requestFhirDataTypesThunk } from 'state/thunkMiddleware';
import { createComplexTypes } from 'state/utils';
import { RenderAttributesTree } from 'types';

export type FhirDataTypesState = {
  requestId?: string;
  primitiveTypes: string[];
  complexTypes: RenderAttributesTree[];
  loadingTypes: boolean;
  errorTypes: Error | undefined;
  structureDefinitionTree: RenderAttributesTree[];
};

const initialState: FhirDataTypesState = {
  primitiveTypes: [],
  complexTypes: [],
  loadingTypes: false,
  errorTypes: undefined,
  structureDefinitionTree: []
};

const fhirDataTypesSlice = createSlice({
  name: 'fhirDataTypesReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestFhirDataTypesThunk.pending, (state, { meta }) => {
      state.requestId = meta.requestId;
      state.loadingTypes = true;
    });
    builder.addCase(
      requestFhirDataTypesThunk.fulfilled,
      (state, { payload }) => {
        const complexTypes = createComplexTypes(
          payload.complexDataTypes,
          payload.complexDataTypes,
          payload.primitiveDataTypes
        );
        const structureDefinitionTree = createComplexTypes(
          payload.complexDataTypes,
          payload.structureDef,
          payload.primitiveDataTypes
        );
        state.primitiveTypes = payload.primitiveDataTypes;
        state.complexTypes = complexTypes;
        state.structureDefinitionTree = structureDefinitionTree;
        state.loadingTypes = false;
        state.errorTypes = undefined;
      }
    );
    builder.addCase(
      requestFhirDataTypesThunk.rejected,
      (state, { payload }) => {
        state.loadingTypes = false;
        state.structureDefinitionTree = [];
        state.primitiveTypes = [];
        state.complexTypes = [];
        state.errorTypes = payload ?? undefined;
      }
    );
  }
});

export default fhirDataTypesSlice.reducer;
