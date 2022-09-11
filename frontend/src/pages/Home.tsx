import * as React from "react";

import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { IWorkout, WorkoutKind } from "../types";

const Home = () => {
  const { user } = useAuthContext();
  const { workouts, dispatch } = useWorkoutsContext();

  React.useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: WorkoutKind.SET_WORKOUTS, payload: json });
      }
    };

    if (user) fetchWorkouts();
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout: IWorkout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
