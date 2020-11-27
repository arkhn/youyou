/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Color } from '@material-ui/lab';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SnackbarState = {
  message: string;
  severity: Color | undefined;
};

const initialState = {
  message: '',
  severity: undefined
};

const snackbarSlice = createSlice({
  name: 'snackbarReducer',
  initialState,
  reducers: {
    setSnackbarOpen: (
      state: SnackbarState,
      action: PayloadAction<SnackbarState>
    ) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    }
  }
});

export default snackbarSlice.reducer;
export const { setSnackbarOpen } = snackbarSlice.actions;
