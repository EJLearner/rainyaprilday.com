import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage";
import AboutPage from "./AboutPage";

import "./App.css";
import routePaths from "./routePaths";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} path={routePaths.MAIN} />
          <Route component={AboutPage} path={routePaths.ABOUT_RADP} />

          <Route component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
