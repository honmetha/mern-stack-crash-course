import * as React from "react";

import WorkoutDetails from "../components/WorkoutDetails";
import { IWorkout } from "../types";

const Home = () => {
  const [workouts, setWorkouts] = React.useState<IWorkout[] | null>(null);

  React.useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout: IWorkout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
