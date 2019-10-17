import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} path={"/"} />
          <Route component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
