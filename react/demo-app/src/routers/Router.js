import React from "react";
import { IsAuthenticated } from "./IsAuthenticated";
import { Route, Redirect } from "react-router-dom";

const PrivetRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      IsAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const PublicRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !IsAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/companyprofile",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default { PrivetRouter, PublicRouter };
