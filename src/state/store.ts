import { createStore, combineReducers, applyMiddleware } from "redux";
import { resource } from "state/reducers/resource";
import { codeSystem } from "state/reducers/codeSystem";
import { snackbarReducer } from "state/reducers/snackbarReducer";
import { fhirDataTypes } from "state/reducers/fhirDataTypes";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storage
};

const rootReducer = combineReducers({
  resource,
  codeSystem,
  snackbarReducer,
  fhirDataTypes
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const createStoreWithMiddlewares = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMiddlewares(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
