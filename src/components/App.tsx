import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { StylesProvider, CssBaseline } from '@material-ui/core';

import {
  requestIdsThunk,
  requestFhirDataTypesThunk
} from 'state/thunkMiddleware';
import { store, persistor } from 'state/store';
import Homepage from 'components/homepage/Homepage';
import ProfileEditor from 'components/profileEditor/ProfileEditor';
import ExtensionEditor from 'components/extensionEditor/ExtensionEditor';
import { requestCodeSystemDataTypeThunk } from 'state/thunkMiddleware';

const App = (): JSX.Element => {
  /* @ts-ignore */
  store.dispatch(requestIdsThunk());
  /* @ts-ignore */
  store.dispatch(requestCodeSystemDataTypeThunk());
  /* @ts-ignore */
  store.dispatch(requestFhirDataTypesThunk());
  return (
    <Provider store={store}>
      <CssBaseline />
      <StylesProvider injectFirst>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/profile/edit" component={ProfileEditor} />
              <Route path="/extension/edit" component={ExtensionEditor} />
            </Switch>
          </Router>
        </PersistGate>
      </StylesProvider>
    </Provider>
  );
};

export default App;
