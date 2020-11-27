import { createStore, combineReducers, applyMiddleware } from 'redux';
import resource from 'state/reducers/resource';
import { codeSystem } from 'state/reducers/codeSystem';
import { snackbarReducer } from 'state/reducers/snackbarReducer';
import { fhirDataTypes } from 'state/reducers/fhirDataTypes';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: storage
};

const rootReducer = combineReducers({
  resource,
  codeSystem,
  snackbarReducer,
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
//const createStoreWithMiddlewares = applyMiddleware(thunk)(createStore);

//export const store = createStoreWithMiddlewares(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
//Typed dispatch hook to use instead of useDispatch
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
