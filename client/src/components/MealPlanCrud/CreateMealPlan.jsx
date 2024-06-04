import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_MEALPLAN } from "../../utils/mutations";

const CreateMealPlanComponent = ({ userToken }) => {
  const [createMealPlan] = useMutation(CREATE_MEALPLAN);

  const handleCreateMealPlanPlaceHolder = () =>
    alert("This functionality is not currently available :(");
  const handleCreateMealPlan = async () => {
    try {
      const currentDate = new Date().toISOString().split("T")[0]; // Get current date
      const { data } = await createMealPlan({
        variables: { date: currentDate },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log(data);
      console.log("Created meal plan:", data.createMealPlan);
      // Handle success
    } catch (error) {
      console.error("Error creating meal plan:", error);
      // Handle error
    }
  };

  return (
    <button
      className="block mt-10 mb-5 mx-auto text-3xl border-solid border-white dark:hover:bg-gray-800 dark:bg-gray-600 border-2 rounded-2xl py-3 pb-4 px-8 shadow-button font-bold"
      // onClick={handleCreateMealPlan}
      // This code is currently just a placeholder alert
      onClick={handleCreateMealPlanPlaceHolder}
    >
      Create Meal Plan
    </button>
  );
};

export default CreateMealPlanComponent;
