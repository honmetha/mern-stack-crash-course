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
  DELETE_WORKOUT = "DELETE_WORKOUT",
}

export type WorkoutAction =
  | { type: WorkoutKind.SET_WORKOUTS; payload: IWorkout[] }
  | { type: WorkoutKind.CREATE_WORKOUT; payload: IWorkout }
  | { type: WorkoutKind.DELETE_WORKOUT; payload: IWorkout };

export interface IUser {
  email: string;
  password: string;
  token: string;
  _id: string;
  _v: number;
}

export enum AuthKind {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export type AuthAction =
  | { type: AuthKind.LOGIN; payload: IUser }
  | { type: AuthKind.LOGOUT };
