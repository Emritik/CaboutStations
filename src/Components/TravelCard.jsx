import { useState, useContext, useEffect } from "react";
import { BookingContext } from "../BookingContext";
import { useNavigate } from 'react-router-dom';
import citiesData from '../assets/indian_cities.json';
import SearchSuggestions from '../Components/SearchSuggestion';
import DatePicker from 'react-datepicker';
import ReCAPTCHA from "react-google-recaptcha";
import "react-datepicker/dist/react-datepicker.css";

const TravelCard = () => {
  const navigate = useNavigate();
  const { searchDetails, setSearchDetails } = useContext(BookingContext);

  const defaultPickup = {
    name: "Dehradun",
    latitude: 30.3165,
    longitude: 78.0322
  };

  const [formData, setFormData] = useState({
    service: "Cabs",
    tripType: "oneway",
    locationType: "Outstation",
    pickup: defaultPickup,
    destination: "",
    phone: "",
    pickupDate: null,
    pickupTime: null,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  useEffect(() => {
    if (searchDetails) {
      setFormData(prev => ({
        ...prev,
        destination: searchDetails.destination || prev.destination,
        pickup: searchDetails.pickup || prev.pickup
      }));
    }
  }, [searchDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDestinationSelect = (city) => {
    setFormData(prev => ({ ...prev, destination: city, service: "Cabs" }));
  };

  const handleOptionChange = (option) => {
    if (option === "char-dham-yatra-package") {
      setFormData({
        service: "Cabs",
        tripType: "char-dham-yatra",
        locationType: "char-dham-yatra-package",
        pickup: defaultPickup,
        destination: "char-dham-yatra",
        phone: "",
        pickupDate: null,
        pickupTime: null,
      });
    } else {
      setFormData(prev => ({
        ...prev,
        tripType: "oneway",
        locationType: option,
        destination: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recaptchaValue) {
      console.log('Form Data:', formData);
      setSearchDetails(formData);
      navigate("/cars");
    } else {
      alert("Please complete the reCAPTCHA verification.");
    }
  };

  const phoneRegex = /^[6-9]\d{9}$/;

  useEffect(() => {
    const isPhoneValid = phoneRegex.test(formData.phone);
    const isDateValid = formData.pickupDate instanceof Date && !isNaN(formData.pickupDate);
    const isTimeValid = formData.pickupTime instanceof Date && !isNaN(formData.pickupTime);
    const isRecaptchaValid = recaptchaValue !== null;

    const isFormValid = isPhoneValid && isDateValid && isTimeValid && isRecaptchaValid;

    setIsFormValid(isFormValid);
  }, [formData, recaptchaValue]);

  return (
    <div className="flex items-center justify-center p-1">
      <div className="w-full mt-10 max-w-md bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex space-x-2">
              {["Outstation", "Local / Airport", "char-dham-yatra-package"].map((type) => (
                <label
                  key={type}
                  className={`flex-1 inline-flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer ${
                    formData.locationType === type
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => handleOptionChange(type)}
                >
                  <input
                    type="radio"
                    name="locationType"
                    value={type}
                    checked={formData.locationType === type}
                    onChange={handleChange}
                    className="hidden"
                    autoComplete="off"
                  />
                  <span>
                    {type === "char-dham-yatra-package" ? "Char Dham Yatra" : type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {formData.locationType !== "char-dham-yatra-package" && (
            <>
              <div className="mb-4">
                <div className="flex space-x-2">
                  {["round", "oneway"].map((type) => (
                    <label
                      key={type}
                      className={`flex-1 inline-flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer ${
                        formData.tripType === type
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tripType"
                        value={type}
                        autoComplete="off"
                        checked={formData.tripType === type}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span>
                        {type === "round" ? "Round Trip" : "One Way Trip"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <DatePicker
                      selected={formData.pickupDate}
                      onChange={(date) => setFormData(prev => ({ ...prev, pickupDate: date }))}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      required
                      minDate={new Date()}
                    />
                  </div>
                  <div className="flex-1">
                    <DatePicker
                      selected={formData.pickupTime}
                      onChange={(time) => setFormData(prev => ({ ...prev, pickupTime: time }))}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      placeholderText="Select time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  value={formData.pickup.name || ''}
                  onChange={(e) => handleChange({ target: { name: 'pickup', value: e.target.value } })}
                  placeholder="Pickup location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  disabled
                />
              </div>

              <div className="mb-4">
                <SearchSuggestions
                  cities={citiesData}
                  onSelect={handleDestinationSelect}
                  placeholder={searchDetails?.destination.name || "Enter Destination Location"}
                  value={formData.destination || searchDetails?.destination.name || ''} // Ensure destination value is used
                  onChange={(e) => handleDestinationSelect(e.target.value)} // Handle value changes
                  name="destination"
                />
              </div>
            </>
          )}

          {formData.locationType === "char-dham-yatra-package" && (
            <div className="mb-4">
              <div className="flex space-x-2">
                <div className="flex-1">
                  <DatePicker
                    selected={formData.pickupDate}
                    onChange={(date) => setFormData(prev => ({ ...prev, pickupDate: date }))}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    required
                    minDate={new Date()}
                  />
                </div>
                <div className="flex-1">
                  <DatePicker
                    selected={formData.pickupTime}
                    onChange={(time) => setFormData(prev => ({ ...prev, pickupTime: time }))}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    placeholderText="Select time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mb-4">
            <h2 className="text-sm font-medium text-gray-700 mb-2">
              Your Itinerary
            </h2>
            {formData.locationType === "char-dham-yatra-package" ? (
              <div className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded-lg shadow">
                <span>Char Dham Yatra</span>
              </div>
            ) : (
              formData.pickup && formData.destination && (
                <div className="space-y-2">
                  <div className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded-lg shadow">
                    <span>{formData.pickup.name}</span>
                    <span className="mx-2">➡</span>
                    <span>{formData.destination.name}</span>
                  </div>
                  {formData.tripType === "round" && (
                    <div className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded-lg shadow">
                      <span>{formData.destination.name}</span>
                      <span className="mx-2">➡</span>
                      <span>{formData.pickup.name}</span>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="off"
              className={`w-full px-3 py-2 border ${
                formData.phone && !phoneRegex.test(formData.phone)
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-lg shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
              placeholder="Enter mobile number"
            />
            {formData.phone && !phoneRegex.test(formData.phone) && (
              <p className="mt-1 text-xs text-red-500">Please enter a valid 10-digit mobile number starting with 6-9</p>
            )}
          </div>

          <div className="mb-4">
            <ReCAPTCHA
              sitekey="6LdL_igqAAAAAPDxD6AxVRKakJ9_FS9FeNi-nCjp"
              onChange={(value) => setRecaptchaValue(value)}
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ${
              !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!isFormValid}
          >
            Search Cabs
          </button>
        </form>
      </div>
    </div>
  );
};

export default TravelCard;
