/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import aboutuscar from "../assets/image/aboutuscar.png";
import StatItem from "../Components/StatItem";

const AboutUs = ({id}) => {
  return (
    <div id={id} className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side with image */}
          <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="absolute top-0 left-0 bg-yellow-400 rounded-full p-3 z-5">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="absolute top-full left-0 mt-1 text-xs font-bold whitespace-nowrap">
                Years Of
                <br />
                Quality Service
              </span>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <img
                src={aboutuscar}
                alt="Yellow Taxi"
                className="relative z-5 rounded-full object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right side with text */}
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-yellow-400 text-lg font-semibold mb-2">
              ABOUT US
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              We Provide Trusted{" "}
              <span className="text-yellow-400">Cab Service</span> Across India
            </h1>
            <p className="text-gray-600 mb-6">
              Based in the beautiful city of Dehradun, our cab service is
              dedicated to providing reliable and comfortable transportation
              solutions throughout India. Whether you're traveling for Holidays
              or Some other purposes, our fleet of well-maintained vehicles are here to ensure your journey is smooth and enjoyable.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Reliable and punctual service for all your travel needs.
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Professional drivers with extensive knowledge of routes.
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Affordable rates with no hidden charges.
              </li>
            </ul>
            {/* <button className="bg-yellow-400 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
              DISCOVER MORE →
            </button> */}
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem
              icon={
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              }
              number="500"
              label="+ Available Taxis"
            />
            <StatItem
              icon={
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              }
              number="1000"
              label="+ Happy Clients"
            />
            <StatItem
              icon={
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              number="700"
              label="+ Professional Drivers"
            />
            <StatItem
              icon={
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              number="1800"
              label="+ Road Trips Completed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
