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
import AuthProvider from "./utils/authContext.jsx";

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

    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            {/* Wrap Profile and Mealplan routes with withAuth component */}
            <Route path="/Profile" element={<Profile />} />
            {/* <Route path="/Profile" element={withAuth(Profile)} />  */}
            <Route path="/Mealplan" element={<MealPlan />} />
            {/* <Route path="/MealPlan" element={withAuth(MealPlan)} />  */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
