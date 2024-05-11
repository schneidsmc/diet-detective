import { Outlet } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
// import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { RiMoonClearLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { useEffect } from "react"

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

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
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
