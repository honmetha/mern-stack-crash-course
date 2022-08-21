import { IWorkout } from "../types";

interface IWorkoutDetails {
  workout: IWorkout;
}

const WorkoutDetails = ({ workout }: IWorkoutDetails) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
