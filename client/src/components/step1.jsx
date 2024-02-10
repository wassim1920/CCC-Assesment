import React, { useState } from "react";
import axios from "axios";
import "./step1.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Step1() {
  const [formData, setFormData] = useState({
    userEmail: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateEmail(formData.userEmail)) {
      try {
        const response = await axios.post(
          "http://localhost:5000/user/Subscription",
          {
            userEmail: formData.userEmail,
          }
        );

        console.log(response.data);

        navigate("/step2");
        localStorage.setItem("steps",2)
        window.location.reload()
      } catch (error) {
        toast.error("Invalid email !")
      }
    } else {
      console.log("Invalid email !")
      
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };


  return (
    <div style={{ width: "75%" }}>
      
      <div className="container" style={{padding: "13% 25%"}}>
      <ToastContainer />
      <h2 style={{color :"blue"}}>Personal Information</h2>
        <p className="text-muted">
          Please provide your name, email, address and phone number
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="userEmail"
              defaultValue={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number:</label>
            <input
              type="text"
              id="number"
              name="number"
              defaultValue={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-end">
            <button id="nextBtn"
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
              style={{
                width: "130px",
                height: "50px",
              }}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step1;
