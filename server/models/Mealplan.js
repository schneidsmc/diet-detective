const { Schema, model } = require("mongoose");

const mealPlanSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  foods: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
});

const Mealplan = model("Mealplan", mealPlanSchema);

module.exports = Mealplan;
