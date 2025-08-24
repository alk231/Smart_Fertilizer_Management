import { useState, useEffect } from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import SensorsPage from "./components/SensorsPage";
import HistoryPage from "./components/HistoryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    // Simulate fetching data from backend
    setTimeout(() => {
      setBackendData({
        soilMoisture: 40,
        temperature: 26,
        humidity: 65,
        growthStage: 1,
      });
    }, 1000);
  }, []);

  return (
    <Router>
      {/* Top Navbar */}
      <NavBar toggleSideBar={() => setIsSideBarOpen(!isSideBarOpen)} />

      {/* Sidebar + Main Content Layout */}
      <div className="flex pt-12 ">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ${
            isSideBarOpen ? "w-[250px] pr-[120px]" : "w-0 overflow-hidden"
          }`}
        >
          <Sidebar isOpen={isSideBarOpen} />
        </div>

        {/* Main Content */}
        <div className="overflow-x-hidden w-full min-h-screen ">
          <Routes>
            <Route path="/" element={<Home backendData={backendData} />} />
            <Route
              path="/sensors"
              element={backendData && <SensorsPage sensorData={backendData} /> }
            />
            <Route
              path="/history"
              element={<HistoryPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
