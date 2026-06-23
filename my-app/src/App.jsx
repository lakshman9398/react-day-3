import React, { useState } from "react";

function App() {
  // State for plan, price, and subscription status
  const [plan, setPlan] = useState("Basic");
  const [price, setPrice] = useState(199);
  const [status, setStatus] = useState("Active");

  // Function to upgrade the plan
  const upgradePlan = () => {
    if (plan === "Basic") {
      setPlan("Standard");
      setPrice(499);
    } else if (plan === "Standard") {
      setPlan("Premium");
      setPrice(649);
    } else {
      alert("You are already using the Premium Plan!");
    }
  };

  // Pause subscription
  const pauseSubscription = () => {
    setStatus("Paused");
  };

  // Resume subscription
  const resumeSubscription = () => {
    setStatus("Active");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>🎬 Netflix Subscription Dashboard</h1>

      <h2>Current Plan: {plan}</h2>

      <h3>Price: ₹{price}/month</h3>

      <h3>Status: {status}</h3>

      <br />

      <button
        onClick={upgradePlan}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Upgrade Plan
      </button>

      <button
        onClick={pauseSubscription}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Pause Subscription
      </button>

      <button
        onClick={resumeSubscription}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Resume Subscription
      </button>

      <hr />

      {/* Status Message */}
      {status === "Paused" ? (
        <h2 style={{ color: "red" }}>❌ Subscription Paused</h2>
      ) : (
        <h2 style={{ color: "green" }}>✅ Enjoy your shows!</h2>
      )}

      {/* Premium Feature */}
      {plan === "Premium" && (
        <h2 style={{ color: "gold" }}>⭐ Ultra HD Enabled</h2>
      )}
    </div>
  );
}

export default App;