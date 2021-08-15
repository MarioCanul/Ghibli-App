import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GhibliApp } from "../components/GhibliApp";
import { GhibliHeader } from "../components/GhibliHeader";
import { RedirectComponentType } from "../components/RedirectComponentType";



export const GhibliRouter = () => {

  return (
    <>
      <Router>
        <div>
        <GhibliHeader /> 
          <Switch>
            <Route exact path="/" component={GhibliApp} />
            <Route exact path="/More/:id/:tipo/:name" component={RedirectComponentType} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
