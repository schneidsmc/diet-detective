import React from "react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
