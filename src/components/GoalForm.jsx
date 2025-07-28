
import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log("Form submitted with:", { name, targetAmount, category, deadline });

    const newGoal = {
      name,
      targetAmount: Number(targetAmount),
      savedAmount: 0,
      category,
      deadline,
      createdAt: new Date().toISOString().split("T")[0]
    };

    console.log("Sending goal:", newGoal);

    fetch("http://localhost:3001/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
      mode: 'cors'
    })
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Goal added:", data);
        onAddGoal(data);
        setName("");
        setTargetAmount("");
        setCategory("");
        setDeadline("");
      })
      .catch((err) => {
        console.error("Failed to add goal:", err);
        alert("Failed to add goal: " + err.message);
      });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Create a Goal</h2>
      <input
        type="text"
        value={name}
        placeholder="Goal name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        value={targetAmount}
        placeholder="Target amount"
        onChange={(e) => setTargetAmount(e.target.value)}
        required
      />
      <input
        type="text"
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
