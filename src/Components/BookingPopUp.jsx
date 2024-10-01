/* eslint-disable react/prop-types */
const BookingPopup = ({  distance,user, searchDetails, car, onClose, onConfirm, disabled }) => {
  const fakeDistance = 1200;
  const validDistance = isNaN(distance) ? fakeDistance : distance;
  // console.log(searchDetails.destination)
  const destination = typeof(searchDetails.destination.name) == "undefined"? "Char-Dham-Yatra":searchDetails.destination.name;
  console.log(destination)
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {car.type}
          </h3>
          <div className="mt-2 px-7 py-3">
            <img
              src={car.image}
              alt={car.model}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            {console.log(car)}
            <h4 className="text-lg text-gray-700 mb-1">
              {searchDetails?.tripType == "round" &&
                destination +
                  "  ➡  " +
                  searchDetails?.pickup?.name}
            </h4>
            <h4 className="text-lg text-gray-700 mb-1">
              {
                searchDetails?.pickup?.name +
                  "  ➡  " +
                  destination}
            </h4>
            <p className="text-sm text-gray-500 mb-1">Model: {car?.model}</p>
            <p className="text-sm text-gray-500 mb-1">Price: ₹{car?.price*validDistance}</p>
            <p className="text-sm text-gray-500 mb-1">
              Distance: {validDistance} km
            </p>
            
            <div className="flex items-center justify-center mb-4">
              <p className="text-sm text-gray-500 mr-1">Rating:</p>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < car.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onConfirm}
              className={`px-4 py-2 ${
                disabled
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600"
              } text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300`}
              disabled={disabled}
            >
              {
                user
                  ? "Confirm Booking"
                  : "Please signin to book a cab"
              }
              
            </button>
            <button
              onClick={onClose}
              className="mt-3 px-4 py-2 bg-gray-100 text-gray-700 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
