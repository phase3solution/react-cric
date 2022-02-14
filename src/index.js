import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Prediction from "views/Prediction";
import PredictionDetails from 'views/PredictionDetails';
import Criczine from 'views/Criczine';
import SliderTest from 'views/SliderTest';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />

      <Route path="/prediction" exact component={Prediction} />
      <Route path="/prediction/:slug" exact component={PredictionDetails} />

      <Route path="/criczine" exact component={Criczine} />
      <Route path="/slider-test" exact component={SliderTest} />

      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
