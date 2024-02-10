import React, { useState } from "react";
import "./step2.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

function Step2() {
  const [selectedCard1, setSelectedCard1] = useState(null);
  const [selectedCard2, setSelectedCard2] = useState(null);
  const [selectedCard3, setSelectedCard3] = useState(null);
  const navigate = useNavigate();

  const handleSub = () => {
    navigate("/step3");
    localStorage.setItem("steps", 3);
    window.location.reload();
  };

  const handleClick = () => {
    navigate("/");
    localStorage.setItem("steps", 1);
    window.location.reload();
  };

  const handleCardClick1 = () => {
    setSelectedCard1((prevSelectedCard) =>
      prevSelectedCard === "Arcade" ? null : "Arcade"
    );
  };  

  const handleCardClick2 = () => {
    setSelectedCard2((prevSelectedCard) =>
      prevSelectedCard === "Advanced" ? null : "Advanced"
    );
  };

  const handleCardClick3 = () => {
    setSelectedCard3((prevSelectedCard) =>
      prevSelectedCard === "Pro" ? null : "Pro"
    );
  };

  return (
    <div style={{ width: "75%" }}>
      <div className="container" style={{ padding: "13% 25% 10% 20%" }}>
        <h2 style={{ color: "blue" }}>Select Your Plan</h2>
        <p className="text-muted">
          Please provide your name, email, address and phone number
        </p>

        <div className="row-cols-3 d-flex row justify-content-evently">
          <div className="col-sm-3">
            <div
              className={`card ${
                selectedCard1 === "Arcade" ? "selected-card" : ""
              }`}
              onClick={handleCardClick1}
            >
              <FontAwesomeIcon
                icon={faProductHunt}
                style={{ color: "#FFD43B", padding: "10% 0% 10% 0%" }}
                size="2xl"
              />
              <div className="card-body">
                <h5 className="card-title" style={{color:"#000080		"}}>Arcade </h5>
                <p className="card-text">$9 / Month</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className={`card ${
                selectedCard2 === "Advanced" ? "selected-card" : ""
              }`}
              onClick={handleCardClick2}
            >
              <FontAwesomeIcon
                icon={faProductHunt}
                style={{ color: "#ed2c2c", padding: "10% 0% 10% 0%" }}
                size="2xl"
              />
              <div className="card-body">
                <h5 className="card-title" style={{color:"#000080		"}}>Advanced </h5>
                <p className="card-text">$10 / Month</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className={`card ${
                selectedCard3 === "Pro" ? "selected-card" : ""
              }`}
              onClick={handleCardClick3}
            >
              <FontAwesomeIcon
                icon={faProductHunt}
                style={{ color: "#74C0FC", padding: "10% 0% 10% 0%" }}
                size="2xl"
              />
              <div className="card-body">
                <h5 className="card-title" style={{color:"#000080		"}}>Pro </h5>
                <p className="card-text">$12 / Month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between m-5">
          <button
            id="backBtn"
            className="btn"
            onClick={handleClick}
            style={{
              width: "130px",
              height: "50px",
            }}
          >
            Back
          </button>
          <button
            id="nextBtn"
            className="btn btn-primary"
            type="submit"
            disabled={!selectedCard1 && !selectedCard2 && !selectedCard3}
            onClick={handleSub}
            style={{
              width: "130px",
              height: "50px",
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
