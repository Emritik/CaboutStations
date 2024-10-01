/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import TravelCard from "../Components/TravelCard";
import { FaCar, FaRoute, FaShieldAlt } from 'react-icons/fa';

const Banner = () => {
  const heroImage = "https://images.unsplash.com/photo-1485739139909-d0d1783a7196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhYiUyMGJvb2tpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Car on Road"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-18">
        {/* Hero Content */}
        <div className="space-y-8 text-center lg:text-left mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight shadow-text">
            Elevate Your <span className="text-yellow-400">Travel Experience</span>
          </h1>
          {/* <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 shadow-text">
            Embark on seamless outstation journeys with our reliable cab service. From business trips to leisurely escapes, we ensure comfort, safety, and reliability at every mile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <Feature icon={<FaCar />} text="Premium Fleet" />
            <Feature icon={<FaRoute />} text="Flexible Routes" />
            <Feature icon={<FaShieldAlt />} text="Assured Safety" />
          </div> */}
        </div>

        {/* TravelCard (Cab Search Form) */}
        <div className="w-full z-20">
          <TravelCard />
        </div>
      </div>

     
      
    </div>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center justify-center sm:justify-start space-x-2 text-yellow-400 shadow-text">
    {icon}
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default Banner;
