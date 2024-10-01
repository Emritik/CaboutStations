import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faUserShield,faCircleCheck,faClock } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookingContext } from "../../BookingContext";
// change the props for changing the trip details
// const trip =[
//     {
//         from : "XYZ",
//         to :  "Aligarh, Rajasthan, India",
//         back : "XYZ",
//         type: "Round"
//     }
//   ];

const Header = () => {

  
 

  const { searchDetails } = useContext(BookingContext);

  const { pickup, destination, tripType } = searchDetails || {};
  return (
    <div>
      <div className="bg-gray-100 py-4 px-6 flex justify-between items-center mt-6">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="text-red-500 mr-2" />
          <Link to="/" className="text-red-500 cursor-pointer">
            BACK
          </Link>
        </div>
      </div>
      <div className="bg-yellow-500 p-4 text-white">
        <div className="flex justify-center items-center space-x-4">
          <div>{pickup?.name}</div>
          <div>&rarr;</div>
          {destination == "char-dham-yatra"?<div>{destination}</div>:<div>{destination?.name}</div>}
          {tripType === "round" && (
            <>
              <div>&rarr;</div>
              <div>{pickup?.name}</div>
            </>
          )}
        </div>
        <div className="text-center mt-2 font-bold"></div>
      </div>
      {/* edit the trip details by passing props */}
      <div className="bg-white p-4 flex justify-around items-center mt-4 shadow-md">
        <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faUserShield} />
          <span className="mt-2">Safety First</span>
        </div>
        <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faCircleCheck} />
          <span className="mt-2">Confirmed Cab</span>
        </div>
        <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faClock} />
          <span className="mt-2">Always On-time</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
