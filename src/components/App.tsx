import React from "react";
import initStore from '../state/store';
import { Provider } from 'react-redux';
import Homepage from './homepage/Homepage';
import { getData } from "../state/thunkMiddleware";


const store = initStore()

const App = () => {
  /* @ts-ignore */
  store.dispatch(getData())
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;