import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
