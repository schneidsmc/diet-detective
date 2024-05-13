import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Navigate } from "react-router-dom";
// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';
import Home from "./components/Home.jsx";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import MealPlan from "./components/MealPlan";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulated login logic
  const handleLogin = (email, password) => {
    // Simulate authentication
    if (email === "example@gmail.com" && password === "password") {
      setIsLoggedIn(true);
    } else {
      // If authentication fails, you might want to display an error message
      console.log("Invalid credentials. Please try again.");
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route
            path="/MealPlan"
            element={isLoggedIn ? <MealPlan /> : <Navigate to="/Login" replace />}
          /> */}
          <Route path="/MealPlan" element={<MealPlan />} />
        </Route>
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
