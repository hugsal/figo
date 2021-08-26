import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { PostScreen } from "../components/post/PostScreen";

import { useDispatch, useSelector } from "react-redux";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { login } from "../actions/auth";

const init = () => {
  return localStorage.getItem("Token");
};

export const AppRouter = () => {
  const auth = useSelector((state) => state.auth);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isToken = init();
    if (isToken) setIsLoggedIn(true);
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={PostScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
