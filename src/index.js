import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@material-ui/core';

import App from 'components/App';

import theme from 'themeMUI';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
