/* eslint-disable react/prop-types */


const TripActionPopup = ({ onClose, onCancel, onEdit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/2 shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Trip Actions</h2>
          <button className="text-gray-500 hover:text-gray-800" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="mt-4">
          <button
            className="w-full px-4 py-2 mb-2 bg-red-600 text-white rounded"
            onClick={onCancel}
          >
            Cancel Trip
          </button>
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded"
            onClick={onEdit}
          >
            Mark As Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripActionPopup;
