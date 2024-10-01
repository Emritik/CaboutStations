// TestimonialCard.js


const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ name, avatar, testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
        <img src={avatar} alt={`${name}'s avatar`} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-yellow-500 mb-4">Customer</p>
      <p className="text-sm text-gray-600 text-center mb-4">{testimonial}</p>
      <div className="flex">
        {
            //array for the no of stars of the review
        [...Array(4)].map((_, i) => <StarIcon key={i} />)
        }
      </div>
    </div>
  );
};

export default TestimonialCard;