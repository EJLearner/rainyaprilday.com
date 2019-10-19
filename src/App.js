import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import Contact from "./Contact";

import "./App.css";
import routePaths from "./routePaths";
import Donate from "./Donate";
import Filmmakers from "./Filmmakers";
import Synopsis from "./Synopsis";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} path={routePaths.MAIN} />
          <Route component={AboutPage} path={routePaths.ABOUT_RADP} />
          <Route component={Contact} path={routePaths.CONTACT} />
          <Route component={Donate} path={routePaths.DONATE} />
          <Route component={Filmmakers} path={routePaths.FILMMAKERS} />
          <Route component={Synopsis} path={routePaths.SYNOPSIS} />

          <Route component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
