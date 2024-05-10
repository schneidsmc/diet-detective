import React, { useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import { FaRegRectangleXmark } from "react-icons/fa6";
import chatgpt from "openai";

function AddDynamicInput() {
  const [val, setVal] = useState([]);
  const [nutritionData, setNutritionData] = useState([]);

  const openai = new chatgpt({
    apiKey: "",
    dangerouslyAllowBrowser: true,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nutritionData = await getNutritionForFoods(val);
    setNutritionData(nutritionData);
  };
  async function getNutrition(foodInputs) {
    const NutritionPrompt = {
      prompt:
        "Respond only using this JSON object with the properties included in this JSON object.  Respond with only valid JSON",
      question: `List the nutrition facts for ${foodInputs} to include calories, protein, saturated fats, sodium, sugar, unsaturated fats, micronutrients and macronutrients. Micronutrients should include
      calcium, iron, vitamin A and vitamin C. Macronutrients should include carbohydrates, fiber and total fats. Always use the generic brand nutrition information`,
    };

    const NutritionResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output JSON",
        },
        {
          role: "user",
          content: JSON.stringify(NutritionPrompt),
        },
      ],
    });
    return JSON.stringify(NutritionResponse.choices[0].message);
  }
  const getNutritionForFoods = async (foodInputs) => {
    const nutritionData = [];
    for (const foodInput of foodInputs) {
      const NutritionResponse = await getNutrition(foodInput);

      nutritionData.push({
        nutrition: JSON.parse(NutritionResponse),
      });
    }
    console.log(nutritionData);

    return nutritionData;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        >
          Submit
        </button>
      </form>

      {nutritionData.length > 0 && (
        <div>
          <h2>Nutrtion Info:</h2>
          {nutritionData.map((item, index) => (
            <div key={index}>
              <h3>{item.food}</h3>
              <p>Calories: {item.nutrition.calories}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AddDynamicInput;
