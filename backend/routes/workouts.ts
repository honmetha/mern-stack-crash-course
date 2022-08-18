import express, { Request, Response } from "express";
import {
  createWorkout,
  getWorkouts,
  getWorkout,
} from "../controllers/workoutController";

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "DELETE a workout" });
});

// UPDATE a workout
router.patch("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "UPDATE a workout" });
});

export default router;
