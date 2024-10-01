/* eslint-disable react/prop-types */


const CarCard = ({ car,distance }) => {
  const { type, price, model, image, rating } = car;
  const fakeDistance = 1200;
  const validDistance = isNaN(distance) ? fakeDistance : distance;
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={model}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4 text-center">
        <div className="text-xl font-bold text-green-600">₹{price*validDistance}</div>
        <div className="text-gray-600">{type} </div>
        <div className="text-gray-700 mt-2">{model}</div>
        <div className="text-gray-700 mt-2">Distance: {validDistance} Km</div>
        <div className="mt-2">
          
          <div className="flex justify-center">
            {[...Array(5)].map((star, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.571-.955L10 0l2.94 5.955 6.57.955-4.754 4.635L15.878 18 10 15z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
            Book Now
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default CarCard;
