export interface IWorkout {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export enum WorkoutKind {
  SET_WORKOUTS = "SET_WORKOUTS",
  CREATE_WORKOUT = "CREATE_WORKOUT",
}
