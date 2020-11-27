import { createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash.clonedeep';

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
      (state, { payload, meta }) => {
        const complexTypes = createComplexTypes(
          cloneDeep(payload.complexDataTypes),
          cloneDeep(payload.complexDataTypes),
          cloneDeep(payload.primitiveDataTypes)
        );
        const structureDefinitionTree = createComplexTypes(
          cloneDeep(payload.complexDataTypes),
          cloneDeep(payload.structureDef),
          cloneDeep(payload.primitiveDataTypes)
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
      (state, { payload, meta }) => {
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
