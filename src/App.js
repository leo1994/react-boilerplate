import { hot } from "react-hot-loader/root";
import React from "react";
import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Router />
  </BrowserRouter>
);

export default hot(App);
