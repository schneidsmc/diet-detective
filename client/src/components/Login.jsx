import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      console.log(data);
      alert("Logged in successfully!");
      window.location.assign("/");
    } catch (error) {
      console.error("Login Error:", error);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div className="text-white text-center mt-20 ">
      <h1 className="text-5xl font-bold pb-12 dark:text-gray-600">
        Welcome back!
      </h1>
      <form onSubmit={handleSubmit}>
        <p className="mt-5 text-xl pr-64 mb-2 dark:text-gray-600">Email:</p>
        <input
          type="text"
          name="email"
          className="rounded-lg w-80 text-black"
          placeholder="Example123@gmail.com"
          onChange={handleChange}
        />

        <p className="mt-5 text-xl pr-56 mb-2 dark:text-gray-600">Password:</p>
        <input
          type="password"
          name="password"
          className="rounded-lg w-80 text-black"
          placeholder="Password"
          onChange={handleChange}
        />
        <p className="mt-3 dark:text-gray-600">
          Don’t have an account yet?{" "}
          <a className=" text-red-400 font-bold" href="/Login">
            Sign up
          </a>
        </p>
        <div>
          <button className="my-20 text-3xl border-solid dark:hover:bg-gray-800 dark:bg-gray-600 border-white border-2 rounded-2xl py-3 pb-4 px-8 shadow-button font-bold ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
