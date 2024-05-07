import React from "react";

const Login = () => {
  return (
    <div className="text-white text-center mt-20 ">
      <h1 className="text-5xl font-bold pb-12 dark:text-gray-600">
        Welcome back!
      </h1>
      <form action="">
        <p className="mt-5 text-xl pr-64 mb-2 dark:text-gray-600">Email:</p>
        <input
          type="text"
          className="rounded-lg w-80 text-black"
          placeholder="Example123@gmail.com"
        />

        <p className="mt-5 text-xl pr-56 mb-2 dark:text-gray-600">Password:</p>
        <input
          type="password"
          className="rounded-lg w-80 text-black"
          placeholder="Password"
        />
        <p className="mt-3 dark:text-gray-600">
          Don’t have an account yet?{" "}
          <a className=" text-red-400 font-bold" href="/Signup">
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
