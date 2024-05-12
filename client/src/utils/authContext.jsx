import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

const withAuth = (Component) => {
  const AuthRoute = (props) => {
    const navigate = useNavigate();
    //Check if user is authenticated
    if (!Auth.loggedIn()) {
      navigate("/login");
      return null;
    }

    //If authenticated, render the component
    return <Component {...props} />;
  };

  return AuthRoute;
};

export default withAuth;
