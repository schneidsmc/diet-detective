const { Food, User, Mealplan } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate({
        path: "mealPlans",
        populate: { path: "foods" },
      });
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate({
        path: "mealPlans",
        populate: { path: "foods" },
      });
    },
    mealPlans: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Mealplan.find(params).sort({ createdAt: -1 }).populate("foods");
    },
    mealPlan: async (parent, { mealPlanId }) => {
      return Mealplan.findOne({ _id: mealPlanId }).populate("foods");
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
      console.log(token);

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
    addFoodToMealPlan: async (parent, { mealPlanId, foodId }, context) => {
      if (context.user) {
        await Mealplan.findOneAndUpdate(
          { _id: mealPlanId },
          { $addToSet: { foods: foodId } },
        );

        const updatedMealPlan =
          await Mealplan.findById(mealPlanId).populate("foods");

        return updatedMealPlan;
      }
      throw new AuthenticationError("Please login to save to Meal Plan.");
    },
    createMealPlan: async (parent, { date }, context) => {
      if (!context.user) {
        throw new Error("Authentication required.");
      }

      try {
        const currentDate = new Date().toISOString().split("T")[0];
        const formattedDate = date || currentDate;

        const mealPlan = await Mealplan.create({ date: formattedDate });

        //Update the user document in the database to add this mealPlan
        await User.findByIdAndUpdate(
          context.user._id, //User ID
          { mealPlan: mealPlan._id },
          { new: true },
        );
        return mealPlan;
      } catch (error) {
        console.error("Error creating meal plan:", error);
        throw new Error("Failed to create meal Plan.");
      }
    },
  },
};

module.exports = resolvers;
