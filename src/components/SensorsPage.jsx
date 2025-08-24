import React from "react";
import OpacityIcon from "@mui/icons-material/Opacity";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

const SensorsPage = ({ sensorData }) => {
  const { soilMoisture, temperature, humidity, lastUpdated } = sensorData;

  return (
    <div className="min-h-screen bg-[#f2efe2] p-6">
      <h2 className="text-3xl font-bold text-green-900 mb-6">
        Sensor Readings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Soil Moisture */}
        <div className="bg-[#fffdf4] rounded-xl p-6 shadow-md flex flex-col items-center">
          <OpacityIcon className="text-green-700 text-4xl mb-2" />
          <p className="text-lg font-semibold text-gray-700">Soil Moisture</p>
          <p className="text-2xl font-bold text-green-900">{soilMoisture}%</p>
        </div>

        {/* Temperature */}
        <div className="bg-[#fffdf4] rounded-xl p-6 shadow-md flex flex-col items-center">
          <ThermostatIcon className="text-green-700 text-4xl mb-2" />
          <p className="text-lg font-semibold text-gray-700">Temperature</p>
          <p className="text-2xl font-bold text-green-900">{temperature}°C</p>
        </div>

        {/* Humidity */}
        <div className="bg-[#fffdf4] rounded-xl p-6 shadow-md flex flex-col items-center">
          <WaterDropIcon className="text-green-700 text-4xl mb-2" />
          <p className="text-lg font-semibold text-gray-700">Humidity</p>
          <p className="text-2xl font-bold text-green-900">{humidity}%</p>
        </div>
      </div>

      {/* Last Update Time */}
      <div className="mt-8 text-sm text-gray-500 text-center">
        Last Updated: {lastUpdated}
      </div>
    </div>
  );
};

export default SensorsPage;
