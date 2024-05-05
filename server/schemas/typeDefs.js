const typeDefs = `
    type User {
        _id: ID 
        username: String!
        email: String!
        password: String!
        height: String
        weight: String
        sex: String
        age: Int
        mealPlans: [Mealplan]!
    }

    type Mealplan {
        _id: ID!
        date: String
        foods: [Food]!
    }

    type Macronutrients {
        carbohydrates: String
        fiber: String
        total_fats: String
    }

    type Micronutrients {
        vitamin_A: String
        vitamin_C: String
        calcium: String
        iron: String
    }
    
    type Food {
        _id: ID!
        name: String
        categories: FoodCategories
    }

    type FoodCategories {
        calories: Float
        sodium: String
        sugar: String
        saturated_fats: String
        unsaturated_fats: String
        protein: String
        macronutrients: Macronutrients
        micronutrients: Micronutrients
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users:[User]
        user(username: String!): User
        mealPlans(username: String!): [Mealplan]
        mealPlan(mealPlanId: ID!): Mealplan
        foods(username: String): [Food]
        food(foodId: ID!): Food
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addUserInfo(height: String!, weight: String!, age: Int!, sex: String!): User
    }
    `;

module.exports = typeDefs;
