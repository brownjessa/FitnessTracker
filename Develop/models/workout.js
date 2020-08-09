const Schema = mongoose.Schema;
const mongoose = require("mongoose");

const WorkoutSchema = new Schema({
  day: {},
  exercises: {},
  time: {},
  weight: {},
  reps: {},
  sets: {},
  distance: {},
});

const Workout = mongoose.model("workout",, workoutSchema);
module.exports = Workout;