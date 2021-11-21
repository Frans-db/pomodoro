const mongoose = require("mongoose");

const schema = mongoose.Schema({
  startTime: Number, // Starttime in seconds from epoch
  duration: Number, // Duration in seconds
});

module.exports = mongoose.model("Pomodoro", schema);
