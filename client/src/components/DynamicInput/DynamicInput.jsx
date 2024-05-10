import React, { useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import { FaRegRectangleXmark } from "react-icons/fa6";

async function fetchDataFromOpenAI(foodInputs) {
  try {
    // API will use the base URL from environment variables (which we will put in .env once the site is hosted) OR localhost:3000
    const baseURL = "http://localhost:5173/MealPlan";
    const response = await fetch(`${baseURL}/openai/?foodInputs=${foodInputs}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function AddDynamicInput({ val, setVal }) {
  // const [val, setVal] = useState([]);
  const handleAdd = () => {
    const newVal = [...val, []];
    if (newVal.length < 9) {
      setVal(newVal);
    }
  };

  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };

  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i);
    setVal(deleteVal);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("submit button pressed");
    try {
      const foods = await fetchDataFromOpenAI(val);
      console.log(foods);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(val, "data-");

  return (
    <>
      <form>
        <button type="button" onClick={handleAdd}>
          <TbCirclePlus className="text-3xl  mt-2 dark:text-gray-600" />
        </button>

        {val.map((data, i) => {
          return (
            <div key={i}>
              <input
                value={data}
                onChange={(e) => handleChange(e, i)}
                type="text"
                className="rounded-lg mx-auto text-black"
                placeholder="More food"
              />
              <button onClick={() => handleDelete(i)}>
                <FaRegRectangleXmark className="ml-5 mt-6 text-2xl text-red-600" />
              </button>
            </div>
          );
        })}

        <button
          type="submit"
          className="block my-20 mx-auto text-3xl border-solid border-white dark:hover:bg-gray-800 dark:bg-gray-600 border-2 rounded-2xl py-3 pb-4 px-8 shadow-button font-bold"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddDynamicInput;
