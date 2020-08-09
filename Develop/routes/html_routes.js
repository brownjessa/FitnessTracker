const Workout = require("../models/workout");
const router = require("express").Router();

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});
router.put("/apiworkouts/", (req, res) => {
  Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});
router.get("/api/workouts", (req, res) => {
  Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
  });
  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .limit(30)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      });
    router.delete("/api/workouts", ({ body }, res) => {
      Workout.findByIdAndRemove(body.id).then(() => {
        res.json(true);
      });
    });
  });
});
