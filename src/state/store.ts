import { createStore, combineReducers, applyMiddleware } from "redux";
import { resource } from "./reducers/resource";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  resource,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const createStoreWithMiddlewares = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMiddlewares(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
