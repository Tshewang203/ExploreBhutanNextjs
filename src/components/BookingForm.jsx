'use client'

import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

export default function BookingForm({ selectedPackage }) {
  // Add state for tour packages
  const [tourPackages, setTourPackages] = useState([]);
  
  // Update initial state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    alternateEmail: '',  
    nationality: '',     
    passportNumber: '', 
    arrivalDate: '',
    departureDate: '',
    tourPackage: '',
    adults: '1',
    children: '0',
    specialRequests: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [dateError, setDateError] = useState('')

  // Fetch tour packages
  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await fetch('/api/tour-packages');
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        setTourPackages(data);
      } catch (err) {
        toast.error('Failed to load tour packages');
      }
    };

    fetchTourPackages();
  }, []);

  // Update form when package is selected
  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        tourPackage: selectedPackage
      }))
    }
  }, [selectedPackage])

  // Move validateDates function here
  const validateDates = (arrival, departure) => {
    const arrivalDate = new Date(arrival);
    const departureDate = new Date(departure);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!arrival || !departure) return '';
    if (arrivalDate < today) {
      return 'Arrival date must be in the future';
    }
    if (departureDate <= arrivalDate) {
      return 'Departure date must be after arrival date';
    }
    const daysDiff = Math.ceil((departureDate - arrivalDate) / (1000 * 60 * 60 * 24));
    if (daysDiff > 30) {
      return 'Tour duration cannot exceed 30 days';
    }
    return '';
  };

  const validateGroupSize = (adults, children) => {
      const totalSize = parseInt(adults) + parseInt(children);
      if (totalSize > 20) {
        return 'Total group size cannot exceed 20 people';
      }
      return '';
    };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  
    if (name === 'adults' || name === 'children') {
      const newValues = {
        ...formData,
        [name]: value
      };
      const error = validateGroupSize(
        name === 'adults' ? value : newValues.adults,
        name === 'children' ? value : newValues.children
      );
      if (error) {
        toast.error(error);
        return;
      }
    }
    // Validate dates when either date field changes
    if (name === 'arrivalDate' || name === 'departureDate') {
      const newDates = {
        ...formData,
        [name]: value
      }
      const error = validateDates(
        name === 'arrivalDate' ? value : newDates.arrivalDate,
        name === 'departureDate' ? value : newDates.departureDate
      )
      setDateError(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const confirmed = window.confirm(
      `Please confirm your booking details:\n\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Nationality: ${formData.nationality}\n` +
      `Passport: ${formData.passportNumber}\n` +
      `Tour Package: ${formData.tourPackage}\n` +
      `Dates: ${formData.arrivalDate} to ${formData.departureDate}\n` +
      `Group Size: ${formData.adults} Adults, ${formData.children} Children\n\n` +
      `Would you like to proceed with the booking?`
    );

    if (!confirmed) {
      return;
    }

    // Validate dates before submission
    const error = validateDates(formData.arrivalDate, formData.departureDate);
    if (error) {
      setDateError(error);
      toast.error(error);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          status: 'pending',
          bookingDate: new Date().toISOString()
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit booking');
      }

      if (data.success) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          alternateEmail: '',
          nationality: '',
          passportNumber: '',
          arrivalDate: '',
          departureDate: '',
          tourPackage: '',
          adults: '1',
          children: '0',
          specialRequests: ''
        });
        toast.success('Booking request submitted successfully!');
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(data.error || 'Failed to submit booking');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error(error.message || 'Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="booking-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-['Cinzel'] text-[#2B3F55]">
          Book Your Bhutan Adventure
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block mb-2 font-['Playfair_Display']">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 font-['Playfair_Display']">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-['Playfair_Display']">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                required
              />
            </div>

            {/* Add nationality and passport fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nationality" className="block mb-2 font-['Playfair_Display']">
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                  required
                />
              </div>
              <div>
                <label htmlFor="passportNumber" className="block mb-2 font-['Playfair_Display']">
                  Passport Number
                </label>
                <input
                  type="text"
                  id="passportNumber"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="alternateEmail" className="block mb-2 font-['Playfair_Display']">
                  Alternate Email (Optional)
                </label>
                <input
                  type="email"
                  id="alternateEmail"
                  name="alternateEmail"
                  value={formData.alternateEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                />
              </div>
              <div>
                <label htmlFor="arrivalDate" className="block mb-2 font-['Playfair_Display']">
                  Arrival Date
                </label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                  required
                />
              </div>
              <div>
                <label htmlFor="departureDate" className="block mb-2 font-['Playfair_Display']">
                  Departure Date
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                  required
                />
              </div>
            </div>

            {dateError && (
              <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg">
                {dateError}
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="tourPackage" className="block mb-2 font-['Playfair_Display']">
                Select Tour Package
              </label>
              <select
                id="tourPackage"
                name="tourPackage"
                value={formData.tourPackage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                required
              >
                <option value="">Choose a package...</option>
                {tourPackages.map(pkg => (
                  <option key={pkg._id} value={pkg._id}>
                    {pkg.title} ({pkg.duration}) - ${pkg.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="adults" className="block mb-2 font-['Playfair_Display']">
                  Number of Adults
                </label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  value={formData.adults}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                  required
                />
              </div>
              <div>
                <label htmlFor="children" className="block mb-2 font-['Playfair_Display']">
                  Number of Children
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  value={formData.children}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="specialRequests" className="block mb-2 font-['Playfair_Display']">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B3F55]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !!dateError}
              className={`w-full py-3 bg-[#2B3F55] text-white rounded-lg transition-all font-['Cinzel'] 
                ${(isSubmitting || !!dateError) 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#1a2633] hover:shadow-lg transform hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Book Now'}
            </button>

            {submitSuccess && (
              <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                Thank you for your booking request! We will contact you shortly to confirm your reservation.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}