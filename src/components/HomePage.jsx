import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Shield, Users, Heart, AlertTriangle } from 'lucide-react';
import SearchBar from './SearchBar';
import MedicineCard from './MedicineCard';
import MedicineDetailModal from './MedicineDetailModal';
import { medicines } from '../data/medicines';

const HomePage = ({ user }) => {
      const [searchResults, setSearchResults] = useState([]);
      const [showResults, setShowResults] = useState(false);
      const [selectedMedicine, setSelectedMedicine] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);

      const handleSearch = (query) => {
            if (query.trim() === '') {
                  setSearchResults([]);
                  setShowResults(false);
                  return;
            }

            const results = medicines.filter(medicine =>
                  medicine.name.toLowerCase().includes(query.toLowerCase()) ||
                  medicine.usage.toLowerCase().includes(query.toLowerCase()) ||
                  medicine.benefits.some(benefit =>
                        benefit.toLowerCase().includes(query.toLowerCase())
                  )
            );

            setSearchResults(results);
            setShowResults(true);
      };

      const handleViewDetails = (medicine) => {
            setSelectedMedicine(medicine);
            setIsModalOpen(true);
      };

      const closeModal = () => {
            setIsModalOpen(false);
            setSelectedMedicine(null);
      };

      return (
            <div className="min-h-screen">
                  {/* Hero Section */}
                  <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white">
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
                              <div className="text-center">
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                                          Your Trusted Medicine
                                          <span className="block text-green-200">Information Hub</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-blue-100 max-w-3xl mx-auto px-4">
                                          Search for medicines, discover their uses, benefits, and side effects.
                                          Get personalized health insights with our AI-powered platform.
                                    </p>

                                    {/* Medical Disclaimer */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
                                          <div className="flex items-start space-x-2 sm:space-x-3">
                                                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                                <p className="text-xs sm:text-sm text-yellow-800 text-left">
                                                      <strong>Medical Disclaimer:</strong> The information provided here is for general educational purposes only.
                                                      Always consult with a qualified healthcare professional before taking any medication or making health decisions.
                                                </p>
                                          </div>
                                    </div>

                                    {/* Search Bar */}
                                    <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                                          <SearchBar onSearch={handleSearch} />
                                    </div>

                                    {/* Only show Get Started button if user is not logged in */}
                                    {!user && (
                                          <Link
                                                to="/signup"
                                                className="inline-flex items-center bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                          >
                                                Get Started
                                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                          </Link>
                                    )}
                              </div>
                        </div>
                  </section>

                  {/* Search Results */}
                  {showResults && (
                        <section className="py-12 sm:py-16 bg-white">
                              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
                                          Search Results ({searchResults.length} found)
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                          {searchResults.map((medicine, index) => (
                                                <MedicineCard
                                                      key={index}
                                                      medicine={medicine}
                                                      onViewDetails={handleViewDetails}
                                                />
                                          ))}
                                    </div>
                              </div>
                        </section>
                  )}

                  {/* Features Section */}
                  <section className="py-16 sm:py-20 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="text-center mb-12 sm:mb-16">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                                          Why Choose CheckMeds?
                                    </h2>
                                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                          We provide comprehensive, accurate, and up-to-date medicine information
                                          to help you make informed decisions about your wellness.
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                          <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                                                <Search className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                                          </div>
                                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Smart Search</h3>
                                          <p className="text-sm sm:text-base text-gray-600">
                                                Instantly search through our comprehensive database of 50+ medicines
                                                with detailed information about uses, benefits, and side effects.
                                          </p>
                                    </div>

                                    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                          <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                                                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                                          </div>
                                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">AI Health Insights</h3>
                                          <p className="text-sm sm:text-base text-gray-600">
                                                Get personalized health recommendations based on your profile,
                                                symptoms, and medical history with our AI-powered assistant.
                                          </p>
                                    </div>

                                    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                                          <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                                                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                                          </div>
                                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Trusted Information</h3>
                                          <p className="text-sm sm:text-base text-gray-600">
                                                All medical information is carefully curated and regularly updated
                                                to ensure accuracy and reliability for your health decisions.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>

                  {/* CTA Section - Only show if user is not logged in */}
                  {!user && (
                        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                                          Ready to Take Control of Your Health?
                                    </h2>
                                    <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100">
                                          Join thousands of users who trust CheckMeds for their medical information needs.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                          <Link
                                                to="/signup"
                                                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                                          >
                                                Create Free Account
                                          </Link>
                                          <Link
                                                to="/features"
                                                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                                          >
                                                Explore Features
                                          </Link>
                                    </div>
                              </div>
                        </section>
                  )}

                  {/* Medicine Detail Modal */}
                  <MedicineDetailModal
                        medicine={selectedMedicine}
                        isOpen={isModalOpen}
                        onClose={closeModal}
                  />
            </div>
      );
};

export default HomePage;