import { useState } from "react";
import Popup from "./Popups/DetailPopup";

const BookingCard = (booking) => {
  
  
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    booked: "bg-blue-100 text-blue-800",
    cancelled: "bg-red-100 text-red-800",
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // use export the data from the backend then pass as a props...
  /* const data = {
    name: "John Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    service: "service",
    tripDetails: "Trip to San Francisco on 2024-08-05",
    status: "status",
    driverName: "Jane Smith",
    ratings: 4.5,
  }; */
  // function to open and close the popup button
  const handleViewDetails = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">{booking.booking[5]}</h3>
          <p className="text-sm text-gray-600">
            {
            booking?.booking[1]+" to "+booking?.booking[0]
}
          </p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            statusColors[booking.booking[12].toLowerCase()]
          }`}
        >
          {booking.booking[12]==="booked"?"Upcoming":""}
          {booking.booking[12]==="completed"?"Completed":""}
          {booking.booking[12]==="cancelled"?"Cancelled":""}
        </span>
      </div>
      <div className="border-t pt-4">
        <button
          className="text-yellow-500 hover:text-yellow-600 text-sm font-medium"
          onClick={handleViewDetails}
        >
          View Details
        </button>
        {isPopupOpen && <Popup data={booking?.booking} onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default BookingCard;
