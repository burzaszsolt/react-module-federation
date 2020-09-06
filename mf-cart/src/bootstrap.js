import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

ReactDOM.render(<App theme={theme} />, document.getElementById("root"));
