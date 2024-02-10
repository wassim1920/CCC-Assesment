import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";


import "./leftBar.css";

const steps = [
  {
    label: "YOUR INFO",
  },
  { 
    label: "SELECT PLAN",
  },
  {
    label: "ADD-ONS",
  },
  {
    label: "SUMMARY",
  },
];

const LeftBar = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    const token = localStorage.getItem("steps");
    console.log(token);
    setActiveStep(token);
  }, []);

  return (
    <div  className ="main " style={{ width: "25%", backgroundColor: "rgb(72 62 255)" }}>
      <div
        className="d-flex flex-column justify-content-around"
        style={{ height: "95vh", margin: "0% 19%" }}
      >
        {steps.map((el, i) => {
          return (
            <div key={i} className="d-flex justify-content-around">
              <Avatar
                style={{
                  width: "60px",
                  height: "60px",
                  background: "transparent",
                  borderColor: "white",
                  borderStyle: "solid",
                }}
                className={activeStep === (i + 1) + "" ? "isActive" : null}
              >
                {i + 1}
              </Avatar>
              <div>
                <p className="text-muted fw-500">{"STEP " + (i + 1)}</p>
                <p className="text-white" style={{ fontWeight: 500 }}>
                  {el.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftBar;
