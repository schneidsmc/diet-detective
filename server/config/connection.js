const mongoose = require("mongoose");

console.log("MONGODB_URI:", process.env.MONGODB_URI);

// you can uncomment this if the app now has trouble connecting to the mongoDB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/diet-detective');
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/diet-detective",
);

module.exports = mongoose.connection;
