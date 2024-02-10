// Step2.js
import React from "react";
import "./step3.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Step3() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selected2Card, setSelected2Card] = useState(null);
  const [selected3Card, setSelected3Card] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/lastStep");
    localStorage.setItem("steps", 4);
    window.location.reload();
  };
  const handleCardClick = (card) => {
    setSelectedCard((prevSelectedCard) =>
      prevSelectedCard === "Online" ? null : "Online"
    );
  };

  const handleCardClick2 = () => {
    setSelected2Card((prevSelectedCard) =>
      prevSelectedCard === "Advanced" ? null : "Advanced"
    );
  };

  const handleCardClick3 = () => {
    setSelected3Card((prevSelectedCard) =>
      prevSelectedCard === "Pro" ? null : "Pro"
    );
  };

  const handleBack = () => {
    navigate("/step2");
    localStorage.setItem("steps", 2);
    window.location.reload();
  };
  
  return (
    <div style={{ width: "75%" }}>
      <div className="container" style={{ padding: "4% 20% 0% 20%" }}>
        <h2 style={{ color: "blue" }}>Pick Add-Ons</h2>
        <p className="text-muted">
          Please provide your name, email, address and phone number
        </p>

        <div class="row-cols-3 mb-5 ">
          <div className="col-sm-12 mb-4">
            <div
              
               className={`card ${
                 selectedCard === "Online" ? "selected-card" : ""
               }`}
               onClick={handleCardClick}
             
            >
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Online Service </h5>
                    <p class="card-text">Access For All The Games</p>
                  </div>
                  <div>
                    <p class="card-tx m-3">$12 / Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 mb-4">
          <div
             
             className={`card ${
               selected2Card === "Advanced" ? "selected-card" : ""
             }`}
             onClick={handleCardClick2}
           
            >
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Larger Storage  </h5>
                    <p class="card-text">Access For All The Games</p>
                  </div>
                  <div>
                    <p class="card-tx m-3">$12 / Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 mb-4">
          <div
             className={`card ${
              selected3Card === "Pro" ? "selected-card" : ""
            }`}
            onClick={handleCardClick3}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 class="card-title">Profile </h5>
                    <p class="card-text">Access For All The Games</p>
                  </div>
                  <div>
                    <p class="card-tx m-3">$12 / Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between m-5">
          <button
            id="backBtn"
            className="btn "
            onClick={handleBack}
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
            disabled={
              !selectedCard ? (!selected2Card ? !selected3Card : null) : null   }
            onClick={handleClick}
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

export default Step3;
