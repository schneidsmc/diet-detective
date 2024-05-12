import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_MEALPLAN } from "../../utils/mutations";

const CreateMealPlanComponent = () => {
  const [createMealPlan] = useMutation(CREATE_MEALPLAN);

  const handleCreateMealPlan = async () => {
    try {
      const currentDate = new Date().toISOString().split("T")[0]; // Get current date
      const { data } = await createMealPlan({
        variables: { date: currentDate },
      });
      console.log("Created meal plan:", data.createMealPlan);
      // Handle success
    } catch (error) {
      console.error("Error creating meal plan:", error);
      // Handle error
    }
  };

  return <button onClick={handleCreateMealPlan}>Create Meal Plan</button>;
};

export default CreateMealPlanComponent;
