import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPage from './MainPage';
import AboutPage from './AboutPage';
import Contact from './Contact';

import './App.css';
import routePaths from './routePaths';

import AfterDonatePage from './AfterDonatePage.tsx';
import Donate from './Donate.tsx';
import FilmmakersPage from './FilmmakersPage';
import SquareLoading from './SquareLoading.tsx';
import Synopsis from './Synopsis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} path={routePaths.MAIN} />
          <Route component={AfterDonatePage} path={routePaths.AFTER_DONATE_PAGE} />
          <Route component={AboutPage} path={routePaths.ABOUT_RADP} />
          <Route component={Contact} path={routePaths.CONTACT} />
          <Route component={Donate} path={routePaths.DONATE} />
          <Route component={FilmmakersPage} path={routePaths.FILMMAKERS} />
          <Route component={SquareLoading} path={routePaths.SQUARE_LOADING} />
          <Route component={Synopsis} path={routePaths.SYNOPSIS} />

          <Route component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
