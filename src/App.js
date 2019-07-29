import { hot } from "react-hot-loader/root";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

export default hot(App);
