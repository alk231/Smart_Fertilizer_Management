import React from "react";
import { GridView, Sensors, History, Menu, Close } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSideBar }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`
        fixed top-0 right-0 h-screen w-70 overflow-y-auto bg-green-900 text-white p-6 shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        z-50
      `}
    >
      <div className="head flex items-center  justify-center gap-5 mb-8">

        <div className="d"><h2 className="text-2xl font-semibold ">Smart Dashboard</h2></div>
        {isOpen && <Close
          className="text-white cursor-pointer "
          onClick={toggleSideBar}

        />}
      </div>


      <ul className="space-y-4">
        <li
          onClick={() => navigate("/")}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 transition cursor-pointer"
        >
          <GridView /> <span className="text-lg">Dashboard</span>
        </li>
        <li
          onClick={() => navigate("/sensors")}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 transition cursor-pointer"
        >
          <Sensors /> <span className="text-lg">Sensors</span>
        </li>
        <li
          onClick={() => navigate("/history")}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-800 transition cursor-pointer"
        >
          <History /> <span className="text-lg">History</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
