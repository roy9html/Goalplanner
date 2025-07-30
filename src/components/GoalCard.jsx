import React, { useState } from "react";

function GoalCard({ goal, onUpdateGoal, onDeleteGoal }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: goal.name,
    targetAmount: goal.targetAmount,
    category: goal.category,
    deadline: goal.deadline
  });
  const [depositAmount, setDepositAmount] = useState("");

  const progress = ((goal.savedAmount / goal.targetAmount) * 100).toFixed(1);
  const isCompleted = goal.savedAmount >= goal.targetAmount;
  const remaining = goal.targetAmount - goal.savedAmount;
  
  // Calculate days remaining
  const today = new Date();
  const deadlineDate = new Date(goal.deadline);
  const daysRemaining = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
  const isOverdue = daysRemaining < 0 && !isCompleted;
  const isUrgent = daysRemaining <= 30 && daysRemaining > 0 && !isCompleted;

  const handleUpdate = async () => {
    try {
      // Update locally without server
      const updatedGoal = { ...goal, ...editData };
      onUpdateGoal(updatedGoal);
      setIsEditing(false);
      alert("Goal updated successfully!");
    } catch (error) {
      alert("Failed to update goal");
    }
  };

  const handleDeposit = async () => {
    if (!depositAmount || depositAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const newSavedAmount = goal.savedAmount + Number(depositAmount);
    
    try {
      // Update locally without server
      const updatedGoal = { ...goal, savedAmount: newSavedAmount };
      onUpdateGoal(updatedGoal);
      setDepositAmount("");
      alert("Deposit added successfully!");
    } catch (error) {
      alert("Failed to add deposit");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this goal?")) {
      try {
        onDeleteGoal(goal.id);
        alert("Goal deleted successfully!");
      } catch (error) {
        alert("Failed to delete goal");
      }
    }
  };

  const getStatusColor = () => {
    if (isCompleted) return "#4CAF50"; 
    if (isOverdue) return "#f44336"; 
    if (isUrgent) return "#ff9800"; 
    return "#2196F3"; 
  };

  return (
    <div style={{ 
      border: `2px solid ${getStatusColor()}`, 
      padding: "1rem", 
      margin: "1rem 0",
      backgroundColor: isCompleted ? "white" : "white"
    }}>
      {isEditing ? (
        <div>
          <input
            value={editData.name}
            onChange={(e) => setEditData({...editData, name: e.target.value})}
            style={{ margin: "5px", padding: "5px" }}
          />
          <input
            type="number"
            value={editData.targetAmount}
            onChange={(e) => setEditData({...editData, targetAmount: Number(e.target.value)})}
            style={{ margin: "5px", padding: "5px" }}
          />
          <input
            value={editData.category}
            onChange={(e) => setEditData({...editData, category: e.target.value})}
            style={{ margin: "5px", padding: "5px" }}
          />
          <input
            type="date"
            value={editData.deadline}
            onChange={(e) => setEditData({...editData, deadline: e.target.value})}
            style={{ margin: "5px", padding: "5px" }}
          />
          <button onClick={handleUpdate} style={{ margin: "5px", padding: "5px" }}>Save</button>
          <button onClick={() => setIsEditing(false)} style={{ margin: "5px", padding: "5px" }}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{goal.name}</h3>
          <p>Category: {goal.category}</p>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
          <p>Remaining: ${remaining}</p>
          <p>Progress: {progress}%</p>
          
          
          <div style={{ background: "#eee", height: "20px", borderRadius: "10px", margin: "10px 0" }}>
            <div style={{
              width: `${Math.min(progress, 100)}%`,
              height: "100%",
              backgroundColor: getStatusColor(),
              borderRadius: "10px",
              transition: "width 0.3s ease"
            }}></div>
          </div>

          
          {isCompleted && <p style={{ color: "green", fontWeight: "bold" }}>✅ Completed!</p>}
          {isOverdue && <p style={{ color: "red", fontWeight: "bold" }}> OVERDUE ({Math.abs(daysRemaining)} days ago)</p>}
          {isUrgent && <p style={{ color: "orange", fontWeight: "bold" }}> URGENT: {daysRemaining} days left!</p>}
          {!isCompleted && !isOverdue && !isUrgent && <p>📅 {daysRemaining} days remaining</p>}

          
          {!isCompleted && (
            <div style={{ marginTop: "10px" }}>
              <input
                type="number"
                placeholder="Deposit amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                style={{ margin: "5px", padding: "5px" }}
              />
              <button onClick={handleDeposit} style={{ margin: "5px", padding: "5px" }}>Add Deposit</button>
            </div>
          )}

          
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => setIsEditing(true)} style={{ margin: "5px", padding: "5px" }}>Edit</button>
            <button onClick={handleDelete} style={{ margin: "5px", padding: "5px", backgroundColor: "#f44336", color: "white" }}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GoalCard;
