import React from "react";
import sergio from "../assets/sergio.png";
import { MdWork } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="sm:py-16">
        <div className="mt-4 md:mt-0 text-center flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-16 dark:text-gray-600">
              Welcome, User
            </h2>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-center mb-10 font-bold text-4xl dark:text-gray-600">
            Daily intake
          </h1>
          <div
            id="day1"
            class="backdrop-filter p-4 mx-auto border-solid border-2 border-gray-500 rounded-md mb-10"
          >
            <h3
              id="card-name"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Total Chart
            </h3>
            <h3
              id="card-date"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Sunday, 5 May, 2024
            </h3>
            <p id="card-calories" className="text-2xl dark:text-gray-600">
              Total Calories: 520
            </p>
            <p id="card-sugar" className="text-2xl dark:text-gray-600">
              Total Cugar: 6 g
            </p>
            <p id="card-sodium" className="text-2xl dark:text-gray-600">
              Total Sodium: 820 mg
            </p>
            <p id="card-protein" className="text-2xl dark:text-gray-600">
              Total Protein: 25 g
            </p>
          </div>
        </div>
        <hr className="my-10" />
        <h1 className="text-center my-10 font-bold text-4xl dark:text-gray-600">
          Nutricion Tracker
        </h1>
        <div className="mt-4 md:mt-0 grid grid-cols-3">
          <div
            id="day1"
            class="backdrop-filter p-4 w-80 border-solid border-2 border-gray-500 rounded-md mb-10"
          >
            <h3
              id="card-name"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Cheeseburger
            </h3>
            <h3
              id="card-date"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Sunday, 5 May, 2024
            </h3>
            <p id="card-calories" className="dark:text-gray-600">
              Calories: 520
            </p>
            <p id="card-sugar" className="dark:text-gray-600">
              Sugar: 6 g
            </p>
            <p id="card-sodium" className="dark:text-gray-600">
              Sodium: 820 mg
            </p>
            <p id="card-protein" className="dark:text-gray-600">
              Protein: 25 g
            </p>
          </div>
          <div
            id="day1"
            class="backdrop-filter p-4 w-80 border-solid border-2 border-gray-500 rounded-md mb-10"
          >
            <h3
              id="card-name"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Cheeseburger
            </h3>
            <h3
              id="card-date"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Sunday, 5 May, 2024
            </h3>
            <p id="card-calories" className="dark:text-gray-600">
              Calories: 520
            </p>
            <p id="card-sugar" className="dark:text-gray-600">
              Sugar: 6 g
            </p>
            <p id="card-sodium" className="dark:text-gray-600">
              Sodium: 820 mg
            </p>
            <p id="card-protein" className="dark:text-gray-600">
              Protein: 25 g
            </p>
          </div>
          <div
            id="day1"
            class="backdrop-filter p-4 w-80 border-solid border-2 border-gray-500 rounded-md mb-10"
          >
            <h3
              id="card-name"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Cheeseburger
            </h3>
            <h3
              id="card-date"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Sunday, 5 May, 2024
            </h3>
            <p id="card-calories" className="dark:text-gray-600">
              Calories: 520
            </p>
            <p id="card-sugar" className="dark:text-gray-600">
              Sugar: 6 g
            </p>
            <p id="card-sodium" className="dark:text-gray-600">
              Sodium: 820 mg
            </p>
            <p id="card-protein" className="dark:text-gray-600">
              Protein: 25 g
            </p>
          </div>
          <div
            id="day1"
            class="backdrop-filter p-4 w-80 border-solid border-2 border-gray-500 rounded-md mb-10"
          >
            <h3
              id="card-name"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Cheeseburger
            </h3>
            <h3
              id="card-date"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Sunday, 5 May, 2024
            </h3>
            <p id="card-calories" className="dark:text-gray-600">
              Calories: 520
            </p>
            <p id="card-sugar" className="dark:text-gray-600">
              Sugar: 6 g
            </p>
            <p id="card-sodium" className="dark:text-gray-600">
              Sodium: 820 mg
            </p>
            <p id="card-protein" className="dark:text-gray-600">
              Protein: 25 g
            </p>
          </div>
          <div
            id="day1"
            class="backdrop-filter p-4 w-80 border-solid border-2 border-gray-500 rounded-md mb-10"
          >
            <h3
              id="card-name"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Cheeseburger
            </h3>
            <h3
              id="card-date"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Sunday, 5 May, 2024
            </h3>
            <p id="card-calories" className="dark:text-gray-600">
              Calories: 520
            </p>
            <p id="card-sugar" className="dark:text-gray-600">
              Sugar: 6 g
            </p>
            <p id="card-sodium" className="dark:text-gray-600">
              Sodium: 820 mg
            </p>
            <p id="card-protein" className="dark:text-gray-600">
              Protein: 25 g
            </p>
          </div>
          <div
            id="day1"
            class="backdrop-filter p-4 w-80 border-solid border-2 border-gray-500 rounded-md mb-10"
          >
            <h3
              id="card-name"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Cheeseburger
            </h3>
            <h3
              id="card-date"
              class="text-3xl mb-10 text-center dark:text-gray-600"
            >
              Sunday, 5 May, 2024
            </h3>
            <p id="card-calories" className="dark:text-gray-600">
              Calories: 520
            </p>
            <p id="card-sugar" className="dark:text-gray-600">
              Sugar: 6 g
            </p>
            <p id="card-sodium" className="dark:text-gray-600">
              Sodium: 820 mg
            </p>
            <p id="card-protein" className="dark:text-gray-600">
              Protein: 25 g
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
