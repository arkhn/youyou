import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import resourceSlice from 'state/reducers/resource';
import codeSystem from 'state/reducers/codeSystem';
import snackbar from 'state/reducers/snackbarReducer';
import fhirDataTypes from 'state/reducers/fhirDataTypes';

const persistConfig = {
  key: 'root',
  storage: storage
};

const rootReducer = combineReducers({
  resourceSlice,
  codeSystem,
  snackbar,
  fhirDataTypes
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
    immutableCheck: false
  })
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
//Typed dispatch hook to use instead of useDispatch
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
