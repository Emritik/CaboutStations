/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// SearchSuggestions.jsx
import  { useState } from 'react';

const SearchSuggestions = ({ cities, onSelect, placeholder, value, onChange, name }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

 // console.log(cities);
  

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    onChange(e); // Ensure parent component gets updated value
    
    if (value.length > 0) {
      const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (city) => {
    setQuery(city.name);
    setSuggestions([]);
    onSelect(city);
  };

  return (
    <div className="relative">
      <input
        type="text"
        name={name}
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      />
      {suggestions.length > 0 && (
        <ul className="absolute border border-gray-300 bg-white w-full mt-1 max-h-60 overflow-auto z-10">
          {suggestions.map((city) => (
            <li
              key={city.id}
              onClick={() => handleSelect(city)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchSuggestions;
