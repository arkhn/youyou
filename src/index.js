// REACT
import React from "react";
import ReactDOM from "react-dom";
// EXTERNAL DEPENDENCIES

// MATERIAL UI
import { ThemeProvider } from "@material-ui/core";

// COMPONENTS & STATES
import App from "components/App";

// STYLE
import theme from "themeMUI";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
