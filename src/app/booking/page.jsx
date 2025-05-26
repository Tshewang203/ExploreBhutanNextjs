'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import CostCalculator from '@/components/CostCalculator';
import BookingForm from '@/components/BookingForm';
import Nav from '../../components/Navigation';
import Image from 'next/image';

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [hoveredPackage, setHoveredPackage] = useState(null);
  const router = useRouter();

  // Fetch tour packages
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/tour-packages');
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        setPackages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
    // Scroll to booking form with smooth animation
    document.getElementById('booking-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <Layout>
      <Nav />
      <div className="pt-20">
        {/* Header Section with enhanced styling */}
        <div className="bg-[#2B3F55] py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <h1 className="text-5xl font-bold text-center mb-6 font-['Cinzel'] text-white">
              Plan Your Bhutan Journey
            </h1>
            <p className="text-xl text-center font-['Playfair_Display'] text-[var(--rice-white)] max-w-2xl mx-auto">
              Explore our curated packages and embark on a journey through the Land of Thunder Dragon
            </p>
          </div>
        </div>

        {/* Tour Packages Section */}
        <section className="py-20 bg-gradient-to-b from-[var(--rice-white)] to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 font-['Cinzel'] text-[#2B3F55]">
              Featured Tour Packages
            </h2>
            <p className="text-center text-gray-600 mb-12 font-['Playfair_Display'] max-w-2xl mx-auto">
              Choose from our carefully crafted packages designed to give you the ultimate Bhutanese experience
            </p>
            
            {error && (
              <div className="mb-8 p-4 bg-red-100 text-red-700 rounded-md text-center">
                {error}
              </div>
            )}
            
            {loading ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 border-4 border-[#2B3F55] border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-[#2B3F55] font-['Playfair_Display']">Loading amazing experiences...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map(pkg => (
                  <div
                    key={pkg._id}
                    className={`group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 
                      ${selectedPackage === pkg._id 
                        ? 'ring-4 ring-[#2B3F55] transform scale-[1.02] shadow-2xl' 
                        : 'hover:shadow-2xl hover:transform hover:scale-[1.02]'
                      }
                      ${hoveredPackage === pkg._id ? 'shadow-2xl' : ''}
                    `}
                    onMouseEnter={() => setHoveredPackage(pkg._id)}
                    onMouseLeave={() => setHoveredPackage(null)}
                  >
                    <div className="relative">
                      <div className="relative h-72 overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className={`object-cover transition-all duration-700 
                            ${hoveredPackage === pkg._id ? 'scale-110 brightness-90' : 'scale-100'}
                            group-hover:filter group-hover:brightness-95
                          `}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={packages.indexOf(pkg) === 0}
                          quality={90}
                        />
                        {/* Enhanced overlay with gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 
                          ${hoveredPackage === pkg._id ? 'opacity-80' : 'opacity-60'}
                        `} />
                      </div>

                      {/* Floating badges with enhanced styling */}
                      <div className={`absolute top-4 left-4 px-4 py-2 rounded-full transition-all duration-500 
                        backdrop-blur-sm flex items-center gap-2 shadow-lg
                        ${hoveredPackage === pkg._id 
                          ? 'bg-[#2B3F55] text-white translate-y-0 opacity-100' 
                          : 'bg-white/90 text-[#2B3F55] -translate-y-1 opacity-90'
                        }
                      `}>
                        <i className="bi bi-clock text-lg"></i>
                        <span className="font-medium">{pkg.duration}</span>
                      </div>

                      <div className={`absolute top-4 right-4 px-4 py-2 rounded-full transition-all duration-500 
                        backdrop-blur-sm shadow-lg
                        ${hoveredPackage === pkg._id 
                          ? 'bg-white text-[#2B3F55] translate-y-0 opacity-100' 
                          : 'bg-[#2B3F55]/90 text-white translate-y-1 opacity-90'
                        }
                      `}>
                        <span className="font-medium text-lg">${pkg.price}</span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className={`text-2xl font-bold mb-4 font-['Cinzel'] transition-colors duration-300
                        ${hoveredPackage === pkg._id ? 'text-[#1a2633]' : 'text-[#2B3F55]'}
                      `}>
                        {pkg.title}
                      </h3>

                      {/* Highlights with enhanced styling */}
                      <div className="space-y-3 mb-8">
                        {pkg.highlights.map((highlight, index) => (
                          <p key={index} className={`flex items-start gap-3 transition-all duration-300
                            ${hoveredPackage === pkg._id ? 'translate-x-1' : ''}
                          `}>
                            <i className={`bi bi-check-circle-fill text-lg transition-colors duration-300 mt-0.5
                              ${hoveredPackage === pkg._id ? 'text-[#1a2633]' : 'text-[#2B3F55]'}
                            `}></i>
                            <span className="font-['Playfair_Display'] text-gray-600 leading-relaxed">
                              {highlight}
                            </span>
                          </p>
                        ))}
                      </div>

                      {/* Enhanced action button */}
                      <button
                        onClick={() => handlePackageSelect(pkg._id)}
                        className={`w-full py-4 px-6 rounded-lg transition-all duration-500 flex items-center justify-center gap-3 text-lg font-medium
                          ${selectedPackage === pkg._id
                            ? 'bg-[#2B3F55] text-white transform scale-105 shadow-lg'
                            : 'bg-white text-[#2B3F55] border-2 border-[#2B3F55] hover:bg-[#2B3F55] hover:text-white hover:shadow-lg'
                          }
                          ${hoveredPackage === pkg._id ? 'shadow-xl' : ''}
                        `}
                      >
                        <i className={`bi ${selectedPackage === pkg._id ? 'bi-check-circle-fill' : 'bi-calendar-check'} text-xl`}></i>
                        <span className="font-['Cinzel']">
                          {selectedPackage === pkg._id ? 'Package Selected' : 'Choose This Package'}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Cost Calculator Section with enhanced styling */}
        <section className="py-20 bg-gradient-to-b from-white to-[var(--rice-white)]">
          <div className="container mx-auto px-4">
            <CostCalculator />
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking-form" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <BookingForm selectedPackage={selectedPackage} />
          </div>
        </section>

        {/* Enhanced Why Book With Us Section */}
        <section className="py-20 bg-gradient-to-t from-white to-[var(--rice-white)]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6 font-['Cinzel'] text-[#2B3F55]">
              Why Book With Us
            </h2>
            <p className="text-center text-gray-600 mb-12 font-['Playfair_Display'] max-w-2xl mx-auto">
              Experience the difference of traveling with experts who care about your journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-5xl mb-6">🏆</div>
                <h3 className="text-xl font-bold mb-4 font-['Cinzel']">Expert Local Guides</h3>
                <p className="font-['Playfair_Display'] text-gray-600">
                  Our guides are certified professionals with deep knowledge of Bhutanese culture and traditions.
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-5xl mb-6">✨</div>
                <h3 className="text-xl font-bold mb-4 font-['Cinzel']">Customized Experiences</h3>
                <p className="font-['Playfair_Display'] text-gray-600">
                  We tailor each journey to your preferences, ensuring a unique and memorable experience.
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-5xl mb-6">💯</div>
                <h3 className="text-xl font-bold mb-4 font-['Cinzel']">24/7 Support</h3>
                <p className="font-['Playfair_Display'] text-gray-600">
                  Our team is available around the clock to assist you before and during your trip.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}