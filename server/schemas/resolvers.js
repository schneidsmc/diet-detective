const User = require("../models/User");

const resolvers = {
  Query: {
    user: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("Error fetching users");
      }
    },
  },
};

module.exports = resolvers;
