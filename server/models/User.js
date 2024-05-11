const { Schema, model } = require("mongoose");
const Mealplan = require("./Mealplan");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Must enter an email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  age: {
    type: Number,
  },
  sex: {
    type: String,
  },
  mealPlans: [
    {
      type: Schema.Types.ObjectId,
      ref: "Mealplan",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
