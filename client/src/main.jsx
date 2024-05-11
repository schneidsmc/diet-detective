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
// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';
import Home from "./components/Home.jsx";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import MealPlan from "./components/MealPlan";

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   }
// })

// //Update the existing client variable
// client.link = authLink.concat(httpLink);

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
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/MealPlan",
        element: <MealPlan />,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <ApolloProvider client={client}>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </ApolloProvider>,
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
