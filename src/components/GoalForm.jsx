import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !targetAmount || !category || !deadline) {
      alert("Please fill in all fields");
      return;
    }

    const newGoal = {
      id: Date.now().toString(), // Simple ID generation
      name,
      targetAmount: Number(targetAmount),
      savedAmount: 0,
      category,
      deadline,
      createdAt: new Date().toISOString().split("T")[0]
    };

    // Add goal directly to state (no server needed)
    onAddGoal(newGoal);
    
    // Clear form
    setName("");
    setTargetAmount("");
    setCategory("");
    setDeadline("");
    
    alert("Goal added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h3>Add New Goal</h3>
      <input
        type="text"
        placeholder="Goal name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ margin: "5px", padding: "8px", width: "200px" }}
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        required
        style={{ margin: "5px", padding: "8px", width: "200px" }}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={{ margin: "5px", padding: "8px", width: "200px" }}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
        style={{ margin: "5px", padding: "8px", width: "200px" }}
      />
      <button type="submit" style={{ margin: "5px", padding: "8px" }}>Add Goal</button>
    </form>
  );
}

export default GoalForm;
