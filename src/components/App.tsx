import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { StylesProvider, CssBaseline } from '@material-ui/core';

import Homepage from 'components/homepage/Homepage';
import ProfileEditor from 'components/profileEditor/ProfileEditor';
import ExtensionEditor from 'components/extensionEditor/ExtensionEditor';
import {
  requestExtensionDataTypes,
  requestFhirDataTypes
} from 'state/thunkMiddleware';
import { requestIdsThunk } from 'state/reducers/resource';
import { store, persistor } from 'state/store';

const App = (): JSX.Element => {
  /* @ts-ignore */
  store.dispatch(requestIdsThunk());
  /* @ts-ignore */
  store.dispatch(requestExtensionDataTypes());
  /* @ts-ignore */
  store.dispatch(requestFhirDataTypes());
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
