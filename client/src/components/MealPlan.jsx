import React, { useState, useEffect } from "react";
import DynamicInput from "./DynamicInput/DynamicInput";

const MealPlan = () => {
  const [foodInputVal, setFoodInputVal] = useState([]);

  useEffect(() => {
    // Call openai function when foodInputval changes
  });
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="sm:py-16">
        <div className="mt-4 md:mt-0 text-center flex">
          <div className="my-auto mx-auto">
            <h2 className="text-4xl font-bold mb-16  dark:text-gray-600">
              Welcome
            </h2>
            <p className="mt-5 text-2xl dark:text-gray-600">
              Add your food for today:{" "}
            </p>
            <p className="text-md dark:text-gray-600">Up to 8 items:</p>

            <DynamicInput
              foodInputVal={foodInputVal}
              setFoodInputVal={setFoodInputVal}
              className="block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
