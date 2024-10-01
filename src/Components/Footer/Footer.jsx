/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { BookingContext } from '../../BookingContext'; // Import your BookingContext
import logo from "../Header/taxi-logo2.png";

const SocialIcon = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = ({ id }) => {
  const { setSearchDetails } = useContext(BookingContext);

  const handleDestinationClick = (destination) => {
    setSearchDetails(prev => ({
      ...prev,
      destination: destination
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nearbyDestinations = [
    { name: "Mussoorie", latitude: 30.4594, longitude: 78.8326 },
    { name: "Haridwar", latitude: 29.9499, longitude: 78.1642 },
    { name: "Rishikesh", latitude: 30.0968, longitude: 78.2716 },
    { name: "Nainital", latitude: 29.3919, longitude: 79.4549 },
    { name: "Shimla", latitude: 31.1048, longitude: 77.1734 },
    { name: "Jammu", latitude: 32.7266, longitude: 74.8570 },
    { name: "Kullu", latitude: 31.9640, longitude: 77.1786 },
    { name: "Manali", latitude: 32.2396, longitude: 77.1884 },
    { name: "Srinagar", latitude: 34.0836, longitude: 74.7973 },
    { name: "Leh", latitude: 34.1526, longitude: 77.5821 }
  ];

  return (
    <footer id={id} className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nearby Destinations</h3>
            <div className="grid grid-cols-2 gap-2">
              {nearbyDestinations.map((dest, index) => (
                <div
                  key={index}
                  onClick={() => handleDestinationClick(dest)}
                  className=" hover:text-yellow-400 cursor-pointer"
                >
                 Dehradun to  {dest.name}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img src={logo} className="bg-yellow-400 h-10 w-auto" alt="Yash Taxi Service Logo" />
              <span className="text-xl font-bold ml-2">Yash Taxi Service</span>
            </div>
            <p className="text-sm mb-4 my-4">
              Reliable rides, anytime, anywhere. We're committed to providing
              safe and comfortable transportation services to our valued
              customers.
            </p>
            <div className="flex space-x-4">
            <SocialIcon href="#" ariaLabel="Facebook">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Twitter">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Instagram">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Yash Taxi Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;