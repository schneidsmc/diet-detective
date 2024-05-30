require("dotenv").config();
const chatGpt = require("openai");
const openai = new chatGpt({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getNutrition(userFoodInput) {
  const NutritionPrompt = {
    prompt:
      "Respond only using this JSON object with the properties included in this JSON object.  Respond with only valid JSON",
    question: `List the nutrition facts for ${userFoodInput} to include calories, protein, saturated fats, sodium, sugar, unsaturated fats, micronutrients and macronutrients.   Micronutrients should include
        calcium, iron, vitamin A and vitamin C. Macronutrients should include carbohydrates, fiber and total fats. Always use the generic brand nutrition information and do not include the brand in the JSON.  Be sure to include the name of the food as "foodname" at the top of the JSON.  Also make sure that you always have the unit of measurements after each value`,
  };

  console.log("NutritionPrompt", NutritionPrompt);
  const NutritionResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    max_tokens: 500,
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON",
      },
      {
        role: "user",
        content: JSON.stringify(NutritionPrompt),
      },
    ],
  });

  console.log("GPT RESPONSE", NutritionResponse.choices[0].message);

  const messageContent = NutritionResponse.choices[0].message.content;

  console.log("message content:", messageContent);

  //return the JSON response
  return messageContent;
}

async function getNutritionForFoods(foodInputs) {
  const nutritionData = [];
  for (const foodInput of foodInputs) {
    const nutritionResponse = await getNutrition(foodInput);
    // console.log('nutrition response', nutritionResponse);
    nutritionData.push({
      nutrition: JSON.parse(nutritionResponse),
    });
  }
  console.log("Hey look at me!");
  console.log(nutritionData);
  return nutritionData;
}
// const userFoodInput = ["animal crackers", "mac n cheese", "cheeseburger"];
// getNutritionForFoods(userFoodInput);

module.exports = getNutritionForFoods;
