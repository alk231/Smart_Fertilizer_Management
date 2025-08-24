import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Clock, Leaf, AlertTriangle } from "lucide-react"; // for icons

function HistoryPage() {
  const [history, setHistory] = useState([
    {
      timestamp: "2024-08-23 10:30",
      growthStage: 2,
      current: { Nitrogen: 80, Phosphorus: 40, Potassium: 60 },
      predicted: { Nitrogen: 100, Phosphorus: 50, Potassium: 70 },
      alerts: { Nitrogen: "Low", Phosphorus: "OK", Potassium: "Low" },
    },
    {
      timestamp: "2024-08-20 15:10",
      growthStage: 1,
      current: { Nitrogen: 90, Phosphorus: 35, Potassium: 55 },
      predicted: { Nitrogen: 110, Phosphorus: 50, Potassium: 65 },
      alerts: { Nitrogen: "OK", Phosphorus: "Low", Potassium: "OK" },
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/get-history")
  //     .then((response) => {
  //       setHistory(response.data.reverse()); // Show latest first
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching prediction history:", error);
  //     });
  // }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <Clock className="w-7 h-7 text-green-600" /> Prediction History
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {history.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col gap-4"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2">
              <p className="text-sm text-gray-500">{item.timestamp}</p>
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800 font-medium">
                Stage {item.growthStage}
              </span>
            </div>

            {/* Current nutrients */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-500" /> Current Nutrients
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>🌱 Nitrogen: {item.current.Nitrogen} g/m²</li>
                <li>🌱 Phosphorus: {item.current.Phosphorus} g/m²</li>
                <li>🌱 Potassium: {item.current.Potassium} g/m²</li>
              </ul>
            </div>

            {/* Predicted needs */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" /> Predicted
                Needs
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>
                  Nitrogen:{" "}
                  <span className="font-medium text-gray-800">
                    {item.predicted.Nitrogen} g/m²
                  </span>{" "}
                  <span
                    className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                      item.alerts.Nitrogen === "Low"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.alerts.Nitrogen}
                  </span>
                </li>
                <li>
                  Phosphorus:{" "}
                  <span className="font-medium text-gray-800">
                    {item.predicted.Phosphorus} g/m²
                  </span>{" "}
                  <span
                    className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                      item.alerts.Phosphorus === "Low"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.alerts.Phosphorus}
                  </span>
                </li>
                <li>
                  Potassium:{" "}
                  <span className="font-medium text-gray-800">
                    {item.predicted.Potassium} g/m²
                  </span>{" "}
                  <span
                    className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                      item.alerts.Potassium === "Low"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.alerts.Potassium}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryPage;
