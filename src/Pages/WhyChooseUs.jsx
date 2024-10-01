/* eslint-disable react/no-unescaped-entities */
import { FaMoneyBillWave, FaUserCheck, FaDoorOpen } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Fair Prices',
      description: 'Experience unbeatable value with our transparent and competitive pricing. We believe in providing top-notch service without breaking the bank.',
      icon: <FaMoneyBillWave className="w-10 h-10 text-yellow-400" />
    },
    {
      title: 'Verified Driver',
      description: 'Your safety is our priority. All our drivers undergo rigorous background checks and regular performance evaluations.',
      icon: <FaUserCheck className="w-10 h-10 text-yellow-400" />
    },
    {
      title: 'Door to Door Services',
      description: "Enjoy the ultimate convenience with our seamless door-to-door service. From your doorstep to your destination, we've got you covered.",
      icon: <FaDoorOpen className="w-10 h-10 text-yellow-400" />
    }
  ];

  return (
    <div className="h-full bg-white py-10 mt-[-60px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black text-center mb-4 animate-fade-in-down">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          We are dedicated to providing exceptional services at affordable rates. Here's why you should ride with us.
        </p>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;

