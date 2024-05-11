import React, { useState, useEffect } from "react";

//Noted out the following imports because I was getting some bugs from not technically using them yet
// import { Link } from 'react-router-dom';
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    console.log("form submit button hit");
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addProfile.token);
      console.log(data);
    } catch (error) {
      console.error("Mutation Error:", error);
    }
  };

  return (
    <div className="text-white text-center mt-20 ">
      <h1 className="text-5xl font-bold dark:text-gray-600">
        Experience the power of <br />
        wellness in the palm of your hand
      </h1>
      <form onSubmit={handleSubmit}>
        <p className="mt-16 text-xl pr-52 mb-2 dark:text-gray-600">Username:</p>
        <input
          type="text"
          name="username"
          className="rounded-lg w-80 text-black"
          placeholder="E.g. Sergio123"
          onChange={handleChange}
        />

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

        {/* <p className="mt-5 text-xl pr-36 mb-2 dark:text-gray-600">
          Confirm password:
        </p>
        <input
          type="password"
          name="confirmpassword"
          className="rounded-lg w-80 text-black"
          placeholder="Confirm password"
          onChange={handleChange}
        /> */}

        {/* <div className="block mt-5">
          <label
            htmlFor=""
            className="inline-block mt-5 text-xl mb-1 mr-2 dark:text-gray-600"
          >
            Gender:
          </label>
          <select
            name="gender"
            id="gender"
            className="text-black pl-2 w-30 h-8 rounded-lg"
          >
            <option value="Male" className="text-black">
              Male
            </option>
            <option value="Female" className="text-black">
              Female
            </option>
            <option value="Other" className="text-black">
              Other
            </option>
          </select>

          <label
            htmlFor="quantity"
            className="inline-block mt-5 text-xl mb-1 mr-2 ml-5 dark:text-gray-600"
          >
            Age:
          </label>
          <input
            placeholder="22"
            className="rounded-lg text-black h-8"
            type="number"
            id="age"
            name="quantity"
            min="1"
            max="99"
          />

          <label
            htmlFor="quantity"
            className="inline-block mt-5 text-xl mb-1 mr-2 ml-5 dark:text-gray-600"
          >
            Height:
          </label>
          <input
            placeholder="6.4"
            className="rounded-lg text-black h-8"
            type="number"
            id="height"
            name="quantity"
            min="1"
            max="8.12"
          />
          <p className="inline-block ml-1 dark:text-gray-600">ft.</p>

          <label
            htmlFor="quantity"
            className="inline-block mt-5 text-xl mb-1 mr-2 ml-5 dark:text-gray-600"
          >
            Weight:
          </label>
          <input
            placeholder="165"
            className="rounded-lg text-black h-8"
            type="number"
            id="weight"
            name="quantity"
            min="1"
            max="400"
          />
          <p className="inline-block ml-1 dark:text-gray-600">lbs.</p>
        </div> */}
        <p className="mt-4 dark:text-gray-600">
          Do you already have an account?{" "}
          <a className=" text-red-400 font-bold" href="/Login">
            Login
          </a>
        </p>
        <div>
          <button
            type="submit"
            className="my-20 text-3xl border-solid border-white dark:hover:bg-gray-800 dark:bg-gray-600 border-2 rounded-2xl py-3 pb-4 px-8 shadow-button font-bold"
          >
            Sign-up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
