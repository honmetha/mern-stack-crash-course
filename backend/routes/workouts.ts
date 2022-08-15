import express, { Request, Response } from "express";

const router = express.Router();

// GET all workouts
router.get("/", (req: Request, res: Response) => {
  res.json({ mssg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "GET a single workout" });
});

// POST a new workout
router.post("/", (req: Request, res: Response) => {
  res.json({ mssg: "POST a new workout" });
});

// DELETE a workout
router.delete("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "DELETE a workout" });
});

// UPDATE a workout
router.patch("/:id", (req: Request, res: Response) => {
  res.json({ mssg: "UPDATE a workout" });
});

export default router;
