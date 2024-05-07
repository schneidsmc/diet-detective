import { Outlet } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
// import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { RiMoonClearLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
// import { useEffect } from "react"
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
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
  );
}

export default App;
