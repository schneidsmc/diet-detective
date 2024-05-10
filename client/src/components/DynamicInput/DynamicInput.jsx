import React, { useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import { FaRegRectangleXmark } from "react-icons/fa6";

async function fetchDataFromOpenAI(foodInputs) {
  try {
    // API will use the base URL from environment variables (which we will put in .env once the site is hosted) OR localhost:3000
    const baseURL = "http://localhost:3001";
    const queryParams = new URLSearchParams({
      foodInputs: JSON.stringify(foodInputs),
    });
    const url = `${baseURL}/openai?${queryParams}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

function AddDynamicInput({ foodInputVal, setFoodInputVal }) {
  // const [val, setVal] = useState([]);
  const handleAdd = () => {
    const newVal = [...foodInputVal, []];
    if (newVal.length < 9) {
      setFoodInputVal(newVal);
    }
  };

  const handleChange = (onChangeValue, i) => {
    const inputdata = [...foodInputVal];
    inputdata[i] = onChangeValue.target.value;
    setFoodInputVal(inputdata);
  };

  const handleDelete = (i) => {
    const deleteVal = [...foodInputVal];
    deleteVal.splice(i);
    setFoodInputVal(deleteVal);
  };

  //TODO: This only console logs the foods right now.  We need to be able to save the foods object in state so that we can render it and save it.
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("submit button pressed");
    try {
      const foods = await fetchDataFromOpenAI(foodInputVal);
      console.log(foods);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(foodInputVal, "data-");

  return (
    <>
      <form>
        <button type="button" onClick={handleAdd}>
          <TbCirclePlus className="text-3xl  mt-2 dark:text-gray-600" />
        </button>

        {foodInputVal.map((data, i) => {
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
