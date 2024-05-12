import { gql, useMutation } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FOOD_TO_MEAL_PLAN = gql`
  mutation addFoodToMealPlan($mealPlanId: ID!, $foodId: ID!) {
    addFoodToMealPlan(mealPlanId: $mealPlanId, foodId: $foodId) {
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
`;
