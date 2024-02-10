import { BrowserRouter, Routes, Route } from "react-router-dom";
import MultiStepForm from "./components/stepForm";
import { useEffect } from "react";

import Step1 from "./components/step1";
import Step2 from "./components/step2";
import LeftBar from "./components/leftBar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Step3 from "./components/step3";
import LastStep from "./components/lastStep";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("steps");
    if (!token) {
      localStorage.setItem("steps", "1");
    }
  }, []);
  return (
    <div className="App">
      <LeftBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/lastStep" element={<LastStep />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
