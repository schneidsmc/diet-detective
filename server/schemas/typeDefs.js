const typeDefs = `
    type User {
        _id: ID 
        username: String!
        email: String!
        password: String!
        height: String
        weight: String
        sex: String
        age: Number
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
        categories: Foodcategories
    }

    type FoodCategories {
        calories: Number
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
        foods(username: String): [Food]
        food(foodId: ID!): Food
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addUserInfo(height: String!, weight: String!, age: Number!, sex: String!): User
    }
    `;
