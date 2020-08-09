// Declare Variables
const Workout = require("../models/workout");
const router = require("express").Router();

// Post Route
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// Put Route
router.put("/apiworkouts/", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// Get Route Workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  // Get Route Workouts--Range
  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .limit(30)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
    // Clean it UP!
    router.delete("/api/workouts", ({ body }, res) => {
      Workout.findByIdAndRemove(body.id).then(() => {
        res.json(true);
      });
    });
  });
});
// Export
module.exports = router;
