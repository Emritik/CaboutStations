import React, { useState } from "react";
import TripActionPopup from "./TripActionPopup";
import { updateBooking } from "../../gapiScripts";
import { useAuth } from "../../AuthContext";
import { sheetId } from "../../Constant";
import toast from "react-hot-toast";

const DetailPopup = ({ data, onClose }) => {
  const { user } = useAuth();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCancelTrip = () => {
    const updatedData = [...data];
    updatedData[12] = "cancelled";

    updateBooking(user.access_token, sheetId, data[15], updatedData)
      .then(() => {
        toast.success("Trip cancelled successfully");
      })
      .catch((error) => {
        console.error("Error cancelling trip:", error);
        toast.error("Failed to cancel trip");
      });

    setIsPopupOpen(false);
  };

  const handleEditTrip = () => {
    const updatedData = [...data];
    updatedData[12] = "completed";

    updateBooking(user.access_token, sheetId, data[15], updatedData)
      .then(() => {
        toast.success("Trip completed successfully");
      })
      .catch((error) => {
        console.error("Error completing trip:", error);
        toast.error("Failed to complete trip");
      });

    setIsPopupOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto shadow-lg absolute">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Trip Details</h2>
          <button className="text-gray-500 hover:text-gray-800" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="mt-4">
          <p><strong>Name:</strong> {data[13]}</p>
          <p><strong>Phone:</strong> {data[4]}</p>
          <p><strong>Email:</strong> {data[14]}</p>
          <p><strong>Trip Details:</strong> {data[1] + " to " + data[0]}</p>
          <p><strong>Distance:</strong> {data[9]} Km</p>
          <p><strong>Status:</strong> {data[12]}</p>
          <p><strong>Service:</strong> {data[3]}</p>
          <p><strong>Driver Name:</strong> {data[10]}</p>
          <p><strong>Ratings:</strong> {data[11]}</p>

          {data[12] === "booked" && (
            <button
              id="modifyButton"
              className="px-4 py-2 bg-yellow-600 text-white rounded mt-4"
              onClick={handleOpenPopup}
            >
              Modify
            </button>
          )}

          {isPopupOpen && data[12] === "booked" && (
            <div
              className="absolute bg-white shadow-lg rounded p-4 mt-2"
              style={{ top: '100%', left: '0', right: '0', marginTop: '10px' }}
            >
              <TripActionPopup
                onClose={handleClosePopup}
                onCancel={handleCancelTrip}
                onEdit={handleEditTrip}
              />
            </div>
          )}
          <div className="mt-4 text-right">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPopup;
