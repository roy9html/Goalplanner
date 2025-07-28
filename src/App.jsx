// src/App.jsx
import React, { useEffect, useState } from "react";
import GoalCard from "./components/GoalCard";
import GoalForm from "./components/GoalForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Failed to fetch goals:", err));
  }, []);

  function handleAddGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  function handleUpdateGoal(updatedGoal) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === updatedGoal.id ? updatedGoal : goal
      )
    );
  }

  function handleDeleteGoal(id) {
    fetch(`http://localhost:3001/goals/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete goal");
        }
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
      })
      .catch((err) => console.error("Error deleting goal:", err));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={handleAddGoal} />
      <div>
        {goals.length === 0 ? (
          <p>No goals yet. Add one!</p>
        ) : (
          goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onUpdateGoal={handleUpdateGoal}
              onDeleteGoal={handleDeleteGoal}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
