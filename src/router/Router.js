import React from 'react';
import { Router, Route } from "react-router-dom";
import { Provider } from '../context/Context';
import RouteListing from '../views/RouteListing';
import RouteView from '../views/RouteView';
import Home from '../views/Home';
import Header from '../components/General/Header';
import Footer from '../components/General/Footer';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <Provider>
        <Header />
          <Route path="/" exact component={Home} />
          <Route path="/routes" exact component={RouteListing} />
          <Route path="/route/:id" exact component={RouteView} />
        <Footer />
      </Provider>
    </Router>
  );
}

export default AppRouter;
