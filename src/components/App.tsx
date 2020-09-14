import React from "react";
import { store, persistor } from "../state/store";
import { Provider } from "react-redux";
import Homepage from "./homepage/Homepage";
import { requestIds, requestDataTypes } from "../state/thunkMiddleware";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Editor from "src/components/editor/Editor";
import ExtensionEditor from "src/components/extensionEditor/ExtensionEditor";
import { PersistGate } from "redux-persist/integration/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/core";

const App = () => {
  /* @ts-ignore */
  store.dispatch(requestIds());
  /* @ts-ignore */
  store.dispatch(requestDataTypes());
  return (
    <Provider store={store}>
      <CssBaseline />
      <StylesProvider injectFirst>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/profile/edit" component={Editor} />
              <Route path="/extension/edit" component={ExtensionEditor} />
            </Switch>
          </Router>
        </PersistGate>
      </StylesProvider>
    </Provider>
  );
};

export default App;
