import React, { useState, useEffect } from "react";
import GoalCard from "./components/GoalCard";
import GoalForm from "./components/GoalForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals on component mount
  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await fetch("http://localhost:3001/goals");
      if (response.ok) {
        const data = await response.json();
        setGoals(data);
      }
    } catch (error) {
      console.error("Failed to fetch goals:", error);
    }
  };

  const addGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  const updateGoal = (updatedGoal) => {
    setGoals(goals.map(goal => 
      goal.id === updatedGoal.id ? updatedGoal : goal
    ));
  };

  const deleteGoal = (goalId) => {
    setGoals(goals.filter(goal => goal.id !== goalId));
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "white", minHeight: "100vh" }}>
      <h1 style={{ color: "black", textAlign: "center" }}>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={addGoal} />
      <div>
        {goals.length === 0 ? (
          <p style={{ textAlign: "center", color: "gray" }}>No goals yet. Add your first goal above!</p>
        ) : (
          goals.map((goal) => (
            <GoalCard 
              key={goal.id} 
              goal={goal} 
              onUpdateGoal={updateGoal}
              onDeleteGoal={deleteGoal}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
