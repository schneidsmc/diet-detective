const {Food, User} = require("../models");
const {signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('foods')
    },
    user: async (parent, { username }) => {
        return User.findOne({ username }).populate('foods');
    },
    foods: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Food.find(params).sort({ createdAt: -1})
    },
    food: async (parent, { foodId }) => {
        return Food.findOne({ _id: foodId});
    },
    me: async (parent, args, context ) => {
        if (context.user) {
            return User.findOne({ _id: context.user._id}).populate('foods');
        }
        throw AuthenticationError;
    }
  },

  Mutation: {
    addUser: async (parent, {username, email, password }) => {
        const user = await User.create({username, email, password });
        const token = signToken(user);
        return { token, user };
    },
    login: async (parent, {email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw AuthenticationError;
        }

        const token = signToken(user);

        return {token, user};
    },
    addUserInfo: async (parent, {height, weight, age, sex}, context) => {
        if (context.user) {
            await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: {height: height}},
                { $addToSet: {weight: weight}},
                { $addToSet: {age: age}},
                { $addToSet: {sex: sex}},
            )
        }
    }
  }
};

module.exports = resolvers;
