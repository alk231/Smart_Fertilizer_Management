import React from "react";
import HistoryIcon from "@mui/icons-material/History";

const HistorySection = ({ historyData }) => {
  return (
    <div className="bg-[#f2efe2] p-6 rounded-xl shadow-md w-full h-full">
      <div className="flex items-center mb-4 text-green-900">
        <HistoryIcon className="mr-2" />
        <h2 className="text-xl font-semibold">History</h2>
      </div>

      <table className="w-full text-left text-green-900">
        <thead>
          <tr className="border-b border-green-300">
            <th className="pb-2">Date</th>
            <th className="pb-2">Growth</th>
            <th className="pb-2">Stage</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index} className="border-b border-green-100">
              <td className="py-2">{item.date}</td>
              <td className="py-2">{item.growth}</td>
              <td className="py-2">{item.stage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorySection;
