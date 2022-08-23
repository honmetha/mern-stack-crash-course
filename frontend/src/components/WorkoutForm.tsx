import * as React from "react";

const WorkoutForm = () => {
  const [title, setTitle] = React.useState("");
  const [load, setLoad] = React.useState("");
  const [reps, setReps] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
