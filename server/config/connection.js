const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/diet-detective');

module.exports = mongoose.connection;