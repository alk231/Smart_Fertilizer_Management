import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SensorsIcon from "@mui/icons-material/Sensors";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`
        fixed left-0 h-screen w-70 overflow-y-auto bg-green-900 text-white p-6 shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        z-50
      `}
    >
      <h2 className="text-2xl font-semibold mb-8">Smart Dashboard</h2>

      <ul className="space-y-4">
        <li
          onClick={() => navigate("/")}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 transition cursor-pointer"
        >
          <GridViewIcon /> <span className="text-lg">Dashboard</span>
        </li>
        <li
          onClick={() => navigate("/sensors")}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 transition cursor-pointer"
        >
          <SensorsIcon /> <span className="text-lg">Sensors</span>
        </li>
        <li
          onClick={() => navigate("/history")}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 transition cursor-pointer"
        >
          <HistoryIcon /> <span className="text-lg">History</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
