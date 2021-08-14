import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GhibliApp } from "../components/GhibliApp";



export const GhibliRouter = () => {

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={GhibliApp} />
       
          </Switch>
        </div>
      </Router>
    </>
  );
};
