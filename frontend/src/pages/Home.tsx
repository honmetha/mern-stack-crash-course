import * as React from "react";

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
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      console.log("json", json);

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
            <p key={workout._id}>{workout.title}</p>
          ))}
      </div>
    </div>
  );
};

export default Home;
