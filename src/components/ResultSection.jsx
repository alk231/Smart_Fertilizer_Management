import React from "react";
import OpacityIcon from "@mui/icons-material/Opacity"; // You can change this to appropriate icons

function ResultSection({ nitrogen, phosphorus, potassium }) {
  return (
    <div className="bg-[#f2efe2] p-6 rounded-xl shadow-md w-full h-full">
      <h2 className="text-xl font-semibold text-green-900 mb-4">
        Result Section
      </h2>

      {/* Nitrogen */}
      <div className="mb-4">
        <div className="flex justify-between text-green-900 font-medium mb-1">
          <span>Nitrogen</span>
          <span>{nitrogen} kg</span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div
            className="bg-green-700 h-3 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(nitrogen, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Phosphorus */}
      <div className="mb-4">
        <div className="flex justify-between text-green-900 font-medium mb-1">
          <span>Phosphorus</span>
          <span>{phosphorus} kg</span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div
            className="bg-green-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(phosphorus, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Potassium */}
      <div>
        <div className="flex justify-between text-green-900 font-medium mb-1">
          <span>Potassium</span>
          <span>{potassium} kg</span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(potassium, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ResultSection;
