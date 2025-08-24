import React from "react";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import EnergySavingsLeafRoundedIcon from "@mui/icons-material/EnergySavingsLeafRounded";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function SensorFeed({ temperature, soilMoisture,Humidity }) {
  return (
    <div className="bg-[#e3e0cd] p-4 rounded-xl w-full max-w-[450px] shadow-md">
      <h2 className="text-lg font-semibold text-green-900 mb-4">Sensor Feed</h2>

      {/* Temperature Box */}
      <div className="bg-[#f2efe2] p-3 mb-4 rounded-lg flex items-center gap-3">
        <DeviceThermostatIcon className="text-green-800 text-5xl" />
        <div>
          <p className="text-sm text-green-900">Temperature</p>
          <p className="text-xl font-bold text-green-900">{temperature} ℃</p>
        </div>
      </div>

      {/* Soil Moisture Box */}
      <div className="bg-[#f2efe2] p-3 mb-4 rounded-lg flex items-center gap-3">
        <EnergySavingsLeafRoundedIcon className="text-green-800 text-5xl" />
        <div>
          <p className="text-sm text-green-900">Soil Moisture</p>
          <p className="text-xl font-bold text-green-900">{soilMoisture} %</p>
        </div>
      </div>

      <div className="bg-[#f2efe2] p-3 rounded-lg flex items-center gap-3">
        <WbSunnyIcon className="text-green-800 text-5xl" />
        <div>
          <p className="text-sm text-green-900">Soil Moisture</p>
          <p className="text-xl font-bold text-green-900">{soilMoisture} %</p>
        </div>
      </div>
    </div>
  );
}

export default SensorFeed;
