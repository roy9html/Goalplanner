import React from "react";

function Overview({ goals }) {
  const totalSaved = goals.reduce((acc, g) => acc + g.savedAmount, 0);
  const totalTarget = goals.reduce((acc, g) => acc + g.targetAmount, 0);
  const completedGoals = goals.filter(g => g.savedAmount >= g.targetAmount).length;
  
  const today = new Date();
  const urgentGoals = goals.filter(g => {
    const deadline = new Date(g.deadline);
    const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    return daysLeft <= 30 && daysLeft > 0 && g.savedAmount < g.targetAmount;
  });

  const overdueGoals = goals.filter(g => {
    const deadline = new Date(g.deadline);
    return deadline < today && g.savedAmount < g.targetAmount;
  });

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "1rem", margin: "1rem 0" }}>
      <h2> Overview</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
        <div>
          <h4>Total Goals</h4>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{goals.length}</p>
        </div>
        <div>
          <h4>Total Saved</h4>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "green" }}>${totalSaved}</p>
        </div>
        <div>
          <h4>Total Target</h4>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>${totalTarget}</p>
        </div>
        <div>
          <h4>Completed Goals</h4>
          <p style={{ color: "green" }}>{completedGoals}</p>
        </div>
      </div>

      {/* Warnings */}
      {urgentGoals.length > 0 && (
        <div style={{ backgroundColor: "#fff3cd", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
          <h4 style={{ color: "#856404" }}> Urgent Goals ({urgentGoals.length})</h4>
          {urgentGoals.map(goal => {
            const daysLeft = Math.ceil((new Date(goal.deadline) - today) / (1000 * 60 * 60 * 24));
            return <p key={goal.id}>{goal.name} - {daysLeft} days left!</p>;
          })}
        </div>
      )}

      {overdueGoals.length > 0 && (
        <div style={{ padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
          <h4 style={{ color: "#721c24" }}>Overdue Goals ({overdueGoals.length})</h4>
          {overdueGoals.map(goal => {
            const daysOverdue = Math.ceil((today - new Date(goal.deadline)) / (1000 * 60 * 60 * 24));
            return <p key={goal.id}>{goal.name} - {daysOverdue} days overdue!</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default Overview;
