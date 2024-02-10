import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./lastStep.css"; // Import CSS file

const LastStep = () => {
  const navigate = useNavigate();
  const [confirmation, setConfirmation] = useState(false);

  const handleConfirm = () => {
    setConfirmation(true);
    navigate("/");
    localStorage.setItem("steps", 1);
    window.location.reload();
  };

  const handleBack = () => {
    navigate("/");
    localStorage.setItem("steps", 1);
    window.location.reload();
  };

  return (
    <div className="L_card">
      <div className="t_last">
      <h2 style={{ color: "blue" }}>Finish Up</h2>
        <p className="text-muted">
          Please provide your name, email, address and phone number
        </p>
      </div>
     
      <div className="button-container">
        
        <button className="button" onClick={handleConfirm}>
          Confirm{" "}
          <FontAwesomeIcon icon={faCheck} className="confirmation-icon" />s
        </button>
        {confirmation && (
          <FontAwesomeIcon icon={faCheck} className="confirmation-icon" />
        )}
        <button className="button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default LastStep;
