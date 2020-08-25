import React from "react";
import { store, persistor } from "../state/store";
import { Provider } from "react-redux";
import Homepage from "./homepage/Homepage";
import { requestIds } from "../state/thunkMiddleware";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Editor from "./editor/Editor";
import { PersistGate } from "redux-persist/integration/react";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  /* @ts-ignore */
  store.dispatch(requestIds());
  return (
    <Provider store={store}>
      <CssBaseline />
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/editprofile" component={Editor} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
