const { Food, User, Mealplan } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("mealPlans");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("mealPlans");
    },
    mealPlans: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Mealplan.find(params).sort({ createdAt: -1 });
    },
    mealPlan: async (parent, { mealPlanId }) => {
      return Mealplan.findOne({ _id: mealPlanId });
    },
    foods: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Food.find(params).sort({ createdAt: -1 });
    },
    food: async (parent, { foodId }) => {
      return Food.findOne({ _id: foodId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("foods");
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log(token);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addUserInfo: async (parent, { height, weight, age, sex }, context) => {
      if (context.user) {
        await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              height: height,
              weight: weight,
              age: age,
              sex: sex,
            },
          },
        );
        // Fetch the updated user information from the database
        const updatedUser = await User.findById(context.user._id);

        // Return an object containing the updated user information and their username
        return {
          username: updatedUser.username,
          height: updatedUser.height,
          weight: updatedUser.weight,
          age: updatedUser.age,
          sex: updatedUser.sex,
        };
      }
    },
  },
};

module.exports = resolvers;
