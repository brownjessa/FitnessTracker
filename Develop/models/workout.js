const Schema = mongoose.Schema;
const mongoose = require("mongoose");

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: {
    type: String,
    required: "What kind of exercise?",
  },
  name: {
    type: "What is the name of the exercise?",
  },
  time: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;
