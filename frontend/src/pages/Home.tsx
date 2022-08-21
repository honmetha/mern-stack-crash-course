import * as React from "react";

import WorkoutDetails from "../components/WorkoutDetails";

interface IWorkout {
  _id: String;
  title: String;
  reps: Number;
  load: Number;
  createdAt: Date;
  updatedAt: Date;
  __v: Number;
}

const Home = () => {
  const [workouts, setWorkouts] = React.useState<any>(null);

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
          workouts.map((workout: any) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
