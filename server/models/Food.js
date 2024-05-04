const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    categories: {
        calories: Number,
        sodium: String,
        sugar: String,
        saturated_fats: String,
        unsaturated_fats: String,
        protein: String,
        macronutrients: {
            carbohydrate: String,
            fiber: String,
            total_fats: String
        },
        micronutrients: {
            vitamin_A: String,
            vitamin_C: String,
            calcium: String,
            iron: String
        }
    }
});

const Food = model('Food', foodSchema);

module.exports = Food;