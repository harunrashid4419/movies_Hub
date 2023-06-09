import React from "react";
import "./Trial.css";

const Trial = () => {
  return (
    <div className="container">
      <div className="trail-section">
        <h1>Start for your first 30 days.</h1>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className="input-feild">
          <input type="email" placeholder="Type your Email address" />
          <button>get started</button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
