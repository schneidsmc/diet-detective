require("dotenv").config();
const chatGpt = require("openai");
const openai = new chatGpt({
  apiKey: process.env.OPENAPIKEY,
});

async function getNutrition(userFoodInput) {
  const NutritionPrompt = {
    prompt:
      "Respond only using this JSON object with the properties included in this JSON object.  Respond with only valid JSON",
    question: `List the nutrition facts for ${userFoodInput} to include calories, protein, saturated fats, sodium, sugar, unsaturated fats, micronutrients and macronutrients. Micronutrients should include
        calcium, iron, vitamin A and vitamin C. Macronutrients should include carbohydrates, fiber and total fats. Always use the generic brand nutrition information`,
  };
  console.log("NutritionPrompt", NutritionPrompt);
  const NutritionResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    max_tokens: 350,
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
}

const userFoodInput = "animal crackers";
getNutrition(userFoodInput);
