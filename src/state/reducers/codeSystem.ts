import { createSlice } from '@reduxjs/toolkit';
import { requestCodeSystemDataTypeThunk } from 'state/thunkMiddleware';

export type DataFetched = {
  id: string;
};

export type CodeSystemState = {
  requestId?: string;
  datatypes: string[];
  loading: boolean;
  error: Error | undefined;
};

const initialState: CodeSystemState = {
  datatypes: [],
  loading: false,
  error: undefined
};

const codeSystemReducer = createSlice({
  name: 'fhirDataTypesReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      requestCodeSystemDataTypeThunk.pending,
      (state, { meta }) => {
        state.requestId = meta.requestId;
        state.loading = true;
      }
    );
    builder.addCase(
      requestCodeSystemDataTypeThunk.fulfilled,
      (state, { payload }) => {
        state.datatypes = payload;
        state.loading = false;
        state.error = undefined;
      }
    );
    builder.addCase(
      requestCodeSystemDataTypeThunk.rejected,
      (state, { payload }) => {
        state.loading = false;
        state.datatypes = [];
        state.error = payload ?? undefined;
      }
    );
  }
});

export default codeSystemReducer.reducer;
