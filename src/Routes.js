import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/pages/Home";
import NotFound from "./containers/pages/NotFound";
import UserRegister from "./containers/pages/UserRegister";

import { FormProvider } from "./contexts/form";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/new-user" exact>
          <FormProvider>
            <UserRegister />
          </FormProvider>
        </Route>
        <Route path="*" exact>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
