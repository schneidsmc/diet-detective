import React from "react";
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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      // {
      //   path: '/Profile',
      //   element: <Profile />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
