import { Schema, model } from "mongoose";

interface IWorkout {
  title: string;
  reps: number;
  load: number;
}

const workoutSchema = new Schema<IWorkout>(
  {
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("Workout", workoutSchema);
