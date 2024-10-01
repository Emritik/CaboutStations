/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';

import CarCard from "../Components/CarCard";
import Header from "../Components/Header/Header";
import BookingPopup from "../Components/BookingPopUp";
import { BookingContext } from "../BookingContext";
import { useAuth } from "../AuthContext";
import { addBooking } from "../gapiScripts";
import { sheetId } from "../Constant";

const cars = [
  {
    id: 3,
    type: "SUV",
    price: "100",
    model: "Innova Crysta",
    image: "https://e7.pngegg.com/pngimages/14/788/png-clipart-toyota-innova-car-delhi-toyota-etios-car-compact-car-car-thumbnail.png",
    distance: "760 Km",
    driver: "Mike Johnson",
    rating: 3,
  },
  {
    id: 4,
    type: "Hatchback",
    price: "80",
    model: "Swift Dezire",
    image: "https://icon2.cleanpng.com/20180714/yks/kisspng-maruti-suzuki-dzire-car-suzuki-swift-2007-5b49a084493b83.4961784915315518763.jpg",
    distance: "760 Km",
    driver: "Alice Brown",
    rating: 4,
  },
  {
    id: 6,
    type: "SUV",
    price: "60",
    model: "Ertiga",
    image: "https://e7.pngegg.com/pngimages/549/418/png-clipart-suzuki-ertiga-car-maruti-toyota-innova-suzuki-compact-car-sedan-thumbnail.png",
    distance: "760 Km",
    driver: "Emma White",
    rating: 4,
  },
];

function calculateDistance(lat1, lon1, lat2, lon2) {
  
  const R = 6371; // Earth's radius in km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance);
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const CarListing = ({ id }) => {
  const { searchDetails, setSearchDetails } = useContext(BookingContext);
  const [selectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  let distance = searchDetails?.locationType == "char-dham-yatra"? 400 :calculateDistance(
    searchDetails?.pickup?.latitude,
    searchDetails?.pickup?.longitude,
    searchDetails?.destination?.latitude,
    searchDetails?.destination?.longitude
  );

  if (searchDetails?.tripType === "round") {
    distance *= 2;
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      anchorPlacement: 'center-bottom',
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener('load', refreshAOS);
    window.addEventListener('scroll', refreshAOS);

    return () => {
      window.removeEventListener('load', refreshAOS);
      window.removeEventListener('scroll', refreshAOS);
    };
  }, []);

  useEffect(() => {
    if (!searchDetails) {
      toast.error("Please enter booking details first!");
      navigate("/");
    }
  }, [searchDetails, navigate]);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleClosePopup = () => {
    setSelectedCar(null);
  };

  const handleConfirmBooking = async () => {
    if (!selectedCar) return;

    if (!user) {
      toast.success("Redirecting to home page for login");
      navigate("/");
      return;
    }

    const bookingDetails = {
      destination: searchDetails?.destination?.name,
      pickup: searchDetails?.pickup?.name,
      tripType: searchDetails?.tripType,
      service: searchDetails?.service,
      phone: searchDetails?.phone,
      locationType: searchDetails?.locationType,
      carId: selectedCar.id,
      carModel: selectedCar.model,
      carPrice: selectedCar.price * distance,
      carDistance: distance,
      carDriver: selectedCar.driver,
      carRating: selectedCar.rating,
      status: "booked",
      userName: user?.name || "Guest",
      userEmail: user?.email || "Guest",
      bookingId: Date.now(),
      pickupDate: searchDetails?.pickupDate,
      pickupTime: searchDetails?.pickupTime.toLocaleTimeString(),
    };

    try {
      await addBooking(user?.access_token, sheetId, bookingDetails);
      console.log("Booking added successfully");
      toast.success("Booking added successfully");
    } catch (error) {
      console.error("Error adding booking:", error);
      toast.error("Error adding booking");
    }

    setSearchDetails(null);
    localStorage.removeItem("searchDetails");
    setSelectedCar(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-7 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-down" data-aos-duration="600">
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          className="text-red-500 mr-2 cursor-pointer hover:text-red-600 transition-colors duration-300 transform hover:scale-110" 
          onClick={() => navigate('/')}
        />
        <Header />
      </div>
      
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl font-extrabold text-gray-900 mb-8 text-center" 
          data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-offset="100"
        >
          Available Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div 
              key={car.id} 
              onClick={() => handleCarClick(car)} 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              data-aos-offset="200"
              className="transform transition duration-300 hover:scale-105"
            >
              <CarCard distance={distance} car={car} />
            </div>
          ))}
        </div>
      </div>
      
      {selectedCar && (
        <div 
          data-aos="zoom-in" 
          data-aos-duration="600" 
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <BookingPopup
            distance={distance}
            user={user}
            searchDetails={searchDetails}
            car={selectedCar}
            onClose={handleClosePopup}
            onConfirm={handleConfirmBooking}
            disabled={!searchDetails}
          />
        </div>
      )}
    </div>
  );
};

export default CarListing;