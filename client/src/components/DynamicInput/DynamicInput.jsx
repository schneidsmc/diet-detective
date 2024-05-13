import React, { useState, useEffect } from "react";
import { TbCirclePlus } from "react-icons/tb";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { ADD_FOOD_TO_MEAL_PLAN } from "../../utils/mutations";

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

function AddDynamicInput({ foodInputVal, setFoodInputVal, userToken }) {
  // const [val, setVal] = useState([]);
  const [fetchedData, setFetchedData] = useState(null); // State to store fetched data
  const [savedToMealPlan, setSavedToMealPlan] = useState(false);
  const [mealPlanId, setMealPlanId] = useState(null);
  const [addFoodToMealPlan] = useMutation(ADD_FOOD_TO_MEAL_PLAN);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3001/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          query: `
          query {
            me {
              mealPlans {
                _id
                date
                foods {
                  _id
                  name
                  categories {
                    calories
                    sodium
                    sugar
                    saturated_fats
                    unsaturated_fats
                    protein
                    macronutrients {
                      carbohydrates
                      fiber
                      total_fats
                    }
                    micronutrients {
                      vitamin_A
                      vitamin_C
                      calcium
                      iron
                    }
                  }
                }
              }
            }
          }
          `,
        }),
      });
      const responseData = await response.json();
      const userMealPlans = responseData.data.me.mealPlans;
      if (userMealPlans && userMealPlans.length > 0) {
        const firstMealPlan = userMealPlans[0];
        setMealPlanId(firstMealPlan._id);
      } else {
        console.error("No meal plans found for this user");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveToMealPlan = async () => {
    if (!mealPlanId) {
      console.error("Meal Plan ID Not Found");
      return;
    }

    try {
      const { data } = await addFoodToMealPlan({
        variables: {
          mealPlanId: mealPlanId,
          foodId: fetchedData._id, // Assuming fetchedData contains the food ID
        },
      });

      console.log("Response", data);
      setSavedToMealPlan(true);
    } catch (err) {
      console.error(err);
    }
  };

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
    deleteVal.splice(i, 1);
    setFoodInputVal(deleteVal);
  };

  //TODO: This only console logs the foods right now.  We need to be able to save the foods object in state so that we can render it and save it.
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("submit button pressed");
    try {
      const foods = await fetchDataFromOpenAI(foodInputVal);
      console.log(foods);
      setFetchedData(foods); // Update the state with fetched data
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
                placeholder="Add food"
              />
              <button onClick={() => handleDelete(i)}>
                <FaRegRectangleXmark className="ml-5 mt-6 text-2xl text-red-600" />
              </button>
            </div>
          );
        })}

        <button
          type="submit"
          className="block mt-10 mb-5 mx-auto text-3xl border-solid border-white dark:hover:bg-gray-800 dark:bg-gray-600 border-2 rounded-2xl py-3 pb-4 px-8 shadow-button font-bold"
          onClick={handleFormSubmit}
        >
          Submit
        </button>

        {/* <div className="display-data w-fit mx-auto text-center left-11 background-mine divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mb-10 pr-10">
          {fetchedData && <pre>{JSON.stringify(fetchedData, null, 2)}</pre>}
        </div> */}

        <div className="display-data w-fit mx-auto text-center left-11 background-mine divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mb-10 px-10 py-5">
          {fetchedData && (
            <pre>
              {Object.entries(fetchedData).map(([key, value]) => (
                <div key={key}>
                  {key !== "nutrition" && key !== "nutrition_facts" && (
                    <div></div>
                  )}
                  {typeof value === "object" &&
                  key !== "nutrition" &&
                  key !== "nutrition_facts" ? (
                    Object.entries(value).map(([subKey, subValue]) => (
                      <div key={subKey}>
                        <div className="text-2xl">{subKey}:</div>
                        {typeof subValue === "object" && (
                          <div>
                            {Object.entries(subValue).map(
                              ([subSubKey, subSubValue]) => (
                                <div key={subSubKey}>
                                  <div className="wrapping flex-wrap">
                                    {subSubKey}: {foodInputVal}
                                  </div>
                                  {typeof subSubValue === "object" && (
                                    <div>
                                      {Object.entries(subSubValue).map(
                                        ([subSubSubKey, subSubSubValue]) => (
                                          <div key={subSubSubKey}>
                                            <div>
                                              {subSubSubKey}:{" "}
                                              {JSON.stringify(subSubSubValue)}
                                            </div>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </div>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div>{value}</div>
                  )}
                </div>
              ))}
            </pre>
          )}
        </div>

        <button
          type="button"
          onClick={handleSaveToMealPlan}
          className={`block mx-auto text-3xl border-solid border-white dark:hover:bg-gray-800 dark:bg-gray-600 border-2 rounded-2xl py-3 pb-4 px-8 shadow-button font-bold ${savedToMealPlan ? "bg-green-500" : ""}`}
          disabled={!fetchedData || savedToMealPlan || !mealPlanId} // Disable button if conditions are not met
        >
          {savedToMealPlan ? "Saved!" : "Save to Meal Plan"}
        </button>
      </form>
    </>
  );
}

export default AddDynamicInput;
