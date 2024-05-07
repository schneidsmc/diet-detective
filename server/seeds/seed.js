const db = require("../config/connection");
const { User, Mealplan, Food } = require("../models"); // Import Food model
const userSeeds = require("./userSeeds.json");
const mealplanSeeds = require("./mealplanSeeds.json");
const foodSeeds = require("./foodSeeds.json"); // Import foodSeeds.json

const seedDatabase = async () => {
  try {
    await db.dropDatabase();

    // Create users using seeded data from JSON
    const createdUsers = await User.create(userSeeds);

    // Create foods using seeded data from JSON
    const createdFoods = await Food.create(foodSeeds);

    // Create meal plans using seeded data from JSON and associate them with users
    for (const mealplanSeed of mealplanSeeds) {
      const { foods: foodNames, ...mealplanData } = mealplanSeed; // Separate food names from mealplan data

      // Find corresponding food IDs based on food names
      const mealPlanFoods = [];
      for (const foodName of foodNames) {
        const foundFood = createdFoods.find((food) => food.name === foodName);
        if (foundFood) {
          mealPlanFoods.push(foundFood._id);
        } else {
          console.error(`Food with name '${foodName}' not found.`);
        }
      }
      // Create meal plan without foods
      const mealplan = await Mealplan.create({
        ...mealplanData,
        foods: mealPlanFoods,
      });

      // Associate mealplan with a user
      await User.findByIdAndUpdate(createdUsers[0]._id, {
        $push: { mealPlans: mealplan._id },
      });
    }

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
