import React, { useState } from "react";

function GoalCard({ goal, onUpdateGoal, onDeleteGoal }) {
  const {
    id,
    name,
    targetAmount,
    savedAmount,
    category,
    deadline,
  } = goal;

  const [depositAmount, setDepositAmount] = useState("");

  const percentage = ((savedAmount / targetAmount) * 100).toFixed(1);
  const remaining = targetAmount - savedAmount;
  const isZero = savedAmount === 0;
  const isComplete = savedAmount >= targetAmount;

  function handleDeposit(e) {
    e.preventDefault();
    const amount = Number(depositAmount);
    if (!amount || amount <= 0) return alert("Enter a valid amount");

    const updatedAmount = savedAmount + amount;

    fetch(`http://localhost:3001/goals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ savedAmount: updatedAmount })
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        onUpdateGoal(updatedGoal);
        setDepositAmount(""); 
      })
      .catch((err) => console.error("Deposit failed:", err));
  }

  function handleDeleteClick() {
    const confirmDelete = window.confirm(`Delete "${name}" goal?`);
    if (confirmDelete) {
      onDeleteGoal(id);
    }
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "12px", borderRadius: "10px" }}>
      <h2>{name}</h2>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Saved:</strong> ${savedAmount}</p>
      <p><strong>Target:</strong> ${targetAmount}</p>
      <p><strong>Remaining:</strong> ${remaining}</p>
      <p><strong>Deadline:</strong> {deadline}</p>

      <div style={{
        background: "#eee",
        borderRadius: "20px",
        overflow: "hidden",
        height: "20px",
        marginTop: "10px"
      }}>
        <div style={{
          width: `${percentage}%`,
          backgroundColor: isComplete ? "green" : "#007bff",
          height: "100%",
          transition: "width 0.3s ease"
        }} />
      </div>

      <p style={{ marginTop: "8px" }}>
        {percentage}% Complete{" "}
        {isZero && <span style={{ color: "red" }}>– My savings are zero</span>}
      </p>

      <form onSubmit={handleDeposit} style={{ marginTop: "10px" }}>
        <input
          type="number"
          value={depositAmount}
          placeholder="Enter deposit"
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button type="submit">Deposit</button>
      </form>

      <button
        onClick={handleDeleteClick}
        style={{
          marginTop: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Delete Goal
      </button>
    </div>
  );
}

export default GoalCard;
