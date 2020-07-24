import React from "react";
import initStore from '../state/store';
import {Provider} from 'react-redux';
import ProfileEditor from './resourceProfileMapping/resourceProfileMapping';

const store = initStore()

const App = () => {
  return (
    <Provider store={store}>
      <ProfileEditor />
    </Provider>
  );
}

export default App;