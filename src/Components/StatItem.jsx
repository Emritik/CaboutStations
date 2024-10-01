/* eslint-disable react/prop-types */
import CountUp from "react-countup";
const StatItem = ({ icon, number, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-yellow-400 rounded-full p-4 mb-2">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white">
      <CountUp end={number} duration={8} className="text-2xl font-bold text-highlight" />
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );


  export default StatItem;