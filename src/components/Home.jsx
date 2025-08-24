import React from "react";
import InputSection from "./InputSection";
import SensorFeed from "./SensorFeed";
import ResultSection from "./ResultSection";
import HistorySection from "./HistorySection";

function Home({ backendData }) {
  return (
    <div className="pt-3 min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-green-200 w-full">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-green-900 my-10 tracking-wide">
        🌱 Smart Fertilizer Management
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-3">
        {/* Input Section */}
        <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
          <InputSection backendData={backendData} />
        </div>

        {/* Sensor Feed */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
          <SensorFeed
            temperature={backendData?.temperature || 24}
            soilMoisture={backendData?.soilMoisture || 42}
          />
        </div>

        {/* History Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
          <HistorySection
            historyData={[
              { date: "09/11/2024", growth: 1, stage: 80 },
              { date: "08/07/2024", growth: 2, stage: 100 },
              { date: "08/09/2024", growth: 1, stage: 70 },
            ]}
          />
        </div>

        {/* Result Section (spans full row) */}
        <div className="bg-white p-6 mb-5 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 ">
          <ResultSection
            nitrogen={backendData?.nitrogen || 90}
            phosphorus={backendData?.phosphorus || 60}
            potassium={backendData?.potassium || 75}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
