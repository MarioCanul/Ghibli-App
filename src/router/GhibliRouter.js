import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GhibliApp } from "../components/GhibliApp";
import { RedirectComponentType } from "../components/RedirectComponentType";



export const GhibliRouter = () => {

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={GhibliApp} />
            <Route exact path="/More/:id/:tipo" component={RedirectComponentType} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
