import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { PostScreen } from "../components/post/PostScreen";

import { useDispatch, useSelector } from "react-redux";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { login } from "../actions/auth";

export const AppRouter = () => {
  const auth = useSelector((state) => state.auth);

  const token = useMemo(() => {
    return localStorage.getItem("Token") || auth.token;
  }, [auth.token]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) setIsLoggedIn(true);
  }, [token]);

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
