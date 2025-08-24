import { useEffect, useState } from "react";

function InputSection({ backendData }) {
  const [inputs, setInputs] = useState({
    soilMoisture: 0,
    temperature: 0,
    humidity: 0,
    growthStage: 1,
  });

  // Update values when backendData changes
  useEffect(() => {
    if (backendData) {
      setInputs({
        soilMoisture: backendData.soilMoisture,
        temperature: backendData.temperature,
        humidity: backendData.humidity,
        growthStage: backendData.growthStage,
      });
    }
  }, [backendData]);

  return (
    <div className="main-class">
      <div className="Input-section bg-[#f3efdd] p-6 rounded-xl shadow-md w-full  ">
        <h2 className="text-xl font-semibold text-green-900 mb-4">
          Input Section
        </h2>

        {/* Soil Moisture */}
        <div className="mb-4">
          <label className="block text-green-900 font-medium mb-1">
            Soil Moisture
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={inputs.soilMoisture}
            readOnly
            className="w-full accent-green-700"
          />
          <span className="text-right block text-green-900">
            {inputs.soilMoisture}
          </span>
        </div>

        {/* Temperature */}
        <div className="mb-4">
          <label className="block text-green-900 font-medium mb-1">
            Temperature
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={inputs.temperature}
            readOnly
            className="w-full accent-green-700"
          />
          <span className="text-right block text-green-900">
            {inputs.temperature}
          </span>
        </div>

        {/* Humidity */}
        <div className="mb-4">
          <label className="block text-green-900 font-medium mb-1">
            Humidity
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={inputs.humidity}
            readOnly
            className="w-full accent-green-700"
          />
          <span className="text-right block text-green-900">
            {inputs.humidity}
          </span>
        </div>

        {/* Growth Stage */}
        <div className="mb-6">
          <label className="block text-green-900 font-medium mb-1">
            Growth Stage
          </label>
          <input type="text" className="w-full text-center border rounded-md" />
        </div>

        <button className="bg-green-700 text-white font-semibold py-2 px-4 w-full rounded-md hover:bg-green-800">
          Predict Fertilizer
        </button>
      </div>
    </div>
  );
}

export default InputSection;
