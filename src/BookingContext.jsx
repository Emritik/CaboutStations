/* eslint-disable react/prop-types */
// BookingContext.js
import  { createContext, useState, useEffect } from 'react';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [searchDetails, setSearchDetails] = useState(() => {
    const savedDetails = localStorage.getItem('searchDetails');
    return savedDetails ? JSON.parse(savedDetails) : null;
  });

  useEffect(() => {
    localStorage.setItem('searchDetails', JSON.stringify(searchDetails));
  }, [searchDetails]);

  return (
    <BookingContext.Provider value={{ searchDetails, setSearchDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProvider };
