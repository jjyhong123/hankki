import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import Home from "./pages/Home.js";
import Kitchen from "./pages/Kitchen.js";
import Recipes from "./pages/Recipes.js";
import Profile from "./pages/Profile.js";
import Auth from "./pages/Auth.js";


const App = ({ store }) => (
  <Provider store={store}>
    <Router>

      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/kitchen" component={Kitchen} />
        {/*<Route exact path="/recipes" component={Recipes} />*/}
        {/*<Route exact path="/profile" component={Profile} />*/}
      </Switch>

    </Router>
  </Provider>
)

export default App;
