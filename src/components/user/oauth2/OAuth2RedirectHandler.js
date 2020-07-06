import React from "react";
import { ACCESS_TOKEN } from "../../constants";
import { Redirect } from "react-router-dom";

const OAuth2RedirectHandler = ({ history, location, match }) => {
  const getUrlParameter = (name) => {
    const name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    const results = regex.exec(this.props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("token");
  const error = getUrlParameter("error");

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token);
    return (
      <Redirect
        to={{
          pathname: "/profile",
          state: { from: location },
        }}
      />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: "/signin",
          state: {
            from: location,
            error: error,
          },
        }}
      />
    );
  }
};

export default OAuth2RedirectHandler;
