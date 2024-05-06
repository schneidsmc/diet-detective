import React from "react";

const Login = () => {
  return (
    <div className="text-white text-center mt-20 ">
      <h1 className="text-5xl font-bold">Login</h1>
      <p>Email:</p>
      <input type="text" />
      <p>Password:</p>
      <input type="password" />
      <div>
        <button className="my-20 border-solid border-white border-2 py-3 px-8">
          Enter
        </button>
      </div>
    </div>
  );
};

export default Login;
