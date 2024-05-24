import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
// import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { RiMoonClearLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Auth from "./utils/auth.js";
// import { useEffect } from "react"

const httpLink = createHttpLink({
  uri: "https://diet-detective.onrender.com/graphql" || "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an 'authorization' header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//
const client = new ApolloClient({
  //Uncomment this uri link when working locally
  // uri: "http://localhost:3001/graphql",

  // Set up our client to execute the 'authLink' middleware prior to making the request to our graphQl API
  // Comment out this link when working locally
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //Check if user is authenticated
    if (!Auth.loggedIn()) {
      //Redirect to login page if not authenticated
      navigate("/login");
    } else {
      setDarkMode(true);
    }
  }, []); //Run only on component mount

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ApolloProvider client={client}>
      <div className={`${darkMode && "dark"}`}>
        <div className=" my-bg-color pt-8 dark:bg-white">
          <Navbar className="sticky top-0 z-50" />
          <Outlet className="dark:text-gray-600" />
          <button
            onClick={toggleDarkMode}
            className="sticky w-16 h-16 bottom-16 right-16 float-end bg-white dark:bg-gray-600 dark:text-white rounded-full font-semibold"
          >
            {darkMode ? (
              <RiMoonClearLine className="mx-auto text-4xl" />
            ) : (
              <FiSun className="mx-auto text-4xl" />
            )}
          </button>
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
