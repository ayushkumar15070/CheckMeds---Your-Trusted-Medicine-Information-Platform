import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, AlertTriangle } from 'lucide-react';
import SearchBar from './SearchBar';
import MedicineCard from './MedicineCard';
import MedicineDetailModal from './MedicineDetailModal';
import { medicines } from '../data/medicines';

const MedicinesPage = ({ user }) => {
      const [searchQuery, setSearchQuery] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('all');
      const [viewMode, setViewMode] = useState('grid'); // grid or list
      const [sortBy, setSortBy] = useState('name'); // name, usage
      const [selectedMedicine, setSelectedMedicine] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);

      // Get unique categories from medicines
      const categories = useMemo(() => {
            const cats = new Set();
            medicines.forEach(medicine => {
                  const usage = medicine.usage.toLowerCase();
                  if (usage.includes('pain') || usage.includes('fever')) cats.add('Pain & Fever');
                  else if (usage.includes('heart') || usage.includes('blood pressure') || usage.includes('cholesterol')) cats.add('Heart & Circulation');
                  else if (usage.includes('diabetes') || usage.includes('blood sugar')) cats.add('Diabetes');
                  else if (usage.includes('depression') || usage.includes('anxiety') || usage.includes('mental')) cats.add('Mental Health');
                  else if (usage.includes('asthma') || usage.includes('breathing') || usage.includes('respiratory')) cats.add('Respiratory');
                  else if (usage.includes('stomach') || usage.includes('acid') || usage.includes('ulcer') || usage.includes('digestive')) cats.add('Digestive');
                  else if (usage.includes('antibiotic') || usage.includes('infection')) cats.add('Antibiotics');
                  else if (usage.includes('allergy') || usage.includes('allergic')) cats.add('Allergies');
                  else cats.add('Other');
            });
            return Array.from(cats).sort();
      }, []);

      // Filter and sort medicines
      const filteredMedicines = useMemo(() => {
            let filtered = medicines;

            // Filter by search query
            if (searchQuery.trim()) {
                  filtered = filtered.filter(medicine =>
                        medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        medicine.usage.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        medicine.benefits.some(benefit =>
                              benefit.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                  );
            }

            // Filter by category
            if (selectedCategory !== 'all') {
                  filtered = filtered.filter(medicine => {
                        const usage = medicine.usage.toLowerCase();
                        switch (selectedCategory) {
                              case 'Pain & Fever':
                                    return usage.includes('pain') || usage.includes('fever');
                              case 'Heart & Circulation':
                                    return usage.includes('heart') || usage.includes('blood pressure') || usage.includes('cholesterol');
                              case 'Diabetes':
                                    return usage.includes('diabetes') || usage.includes('blood sugar');
                              case 'Mental Health':
                                    return usage.includes('depression') || usage.includes('anxiety') || usage.includes('mental');
                              case 'Respiratory':
                                    return usage.includes('asthma') || usage.includes('breathing') || usage.includes('respiratory');
                              case 'Digestive':
                                    return usage.includes('stomach') || usage.includes('acid') || usage.includes('ulcer') || usage.includes('digestive');
                              case 'Antibiotics':
                                    return usage.includes('antibiotic') || usage.includes('infection');
                              case 'Allergies':
                                    return usage.includes('allergy') || usage.includes('allergic');
                              default:
                                    return true;
                        }
                  });
            }

            // Sort medicines
            filtered.sort((a, b) => {
                  if (sortBy === 'name') {
                        return a.name.localeCompare(b.name);
                  } else if (sortBy === 'usage') {
                        return a.usage.localeCompare(b.usage);
                  }
                  return 0;
            });

            return filtered;
      }, [searchQuery, selectedCategory, sortBy]);

      const handleSearch = (query) => {
            setSearchQuery(query);
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
            <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-8 sm:mb-12">
                              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Medicine Database
                              </h1>
                              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
                                    Browse through our comprehensive collection of {medicines.length} medicines.
                                    Search by name, condition, or symptoms to find detailed information about uses, benefits, and side effects.
                              </p>

                              {/* Medical Disclaimer */}
                              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 max-w-4xl mx-auto">
                                    <div className="flex items-start space-x-3">
                                          <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                                          <div className="text-left">
                                                <h3 className="text-base sm:text-lg font-medium text-yellow-800 mb-2">Important Medical Disclaimer</h3>
                                                <p className="text-sm sm:text-base text-yellow-700">
                                                      All medicine information provided is for general educational purposes only.
                                                      Always consult with qualified healthcare professionals before taking any medication or making health decisions.
                                                      This information should not replace professional medical advice, diagnosis, or treatment.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Search and Filters */}
                        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
                              {/* Search Bar */}
                              <div className="mb-4 sm:mb-6">
                                    <SearchBar onSearch={handleSearch} />
                              </div>

                              {/* Filters and Controls */}
                              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                                    {/* Category Filter */}
                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                                                Filter by Category:
                                          </label>
                                          <select
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base min-w-0"
                                          >
                                                <option value="all">All Categories</option>
                                                {categories.map(category => (
                                                      <option key={category} value={category}>{category}</option>
                                                ))}
                                          </select>
                                    </div>

                                    {/* Sort and View Controls */}
                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                          {/* Sort By */}
                                          <div className="flex items-center space-x-2">
                                                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                                                      Sort by:
                                                </label>
                                                <select
                                                      value={sortBy}
                                                      onChange={(e) => setSortBy(e.target.value)}
                                                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                                >
                                                      <option value="name">Name</option>
                                                      <option value="usage">Usage</option>
                                                </select>
                                          </div>

                                          {/* View Mode Toggle */}
                                          <div className="flex items-center space-x-2">
                                                <span className="text-sm font-medium text-gray-700">View:</span>
                                                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                                      <button
                                                            onClick={() => setViewMode('grid')}
                                                            className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                                      >
                                                            <Grid className="h-4 w-4" />
                                                      </button>
                                                      <button
                                                            onClick={() => setViewMode('list')}
                                                            className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                                      >
                                                            <List className="h-4 w-4" />
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Results Count */}
                        <div className="mb-4 sm:mb-6">
                              <p className="text-sm sm:text-base text-gray-600">
                                    Showing {filteredMedicines.length} of {medicines.length} medicines
                                    {searchQuery && ` for "${searchQuery}"`}
                                    {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                              </p>
                        </div>

                        {/* Medicines Grid/List */}
                        {filteredMedicines.length > 0 ? (
                              <div className={
                                    viewMode === 'grid'
                                          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                                          : "space-y-4 sm:space-y-6"
                              }>
                                    {filteredMedicines.map((medicine, index) => (
                                          <div key={index} className={viewMode === 'list' ? 'max-w-4xl mx-auto' : ''}>
                                                <MedicineCard
                                                      medicine={medicine}
                                                      onViewDetails={handleViewDetails}
                                                />
                                          </div>
                                    ))}
                              </div>
                        ) : (
                              <div className="text-center py-12 sm:py-16">
                                    <div className="bg-gray-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                          <Search className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">No medicines found</h3>
                                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                          Try adjusting your search terms or category filter to find what you're looking for.
                                    </p>
                                    <button
                                          onClick={() => {
                                                setSearchQuery('');
                                                setSelectedCategory('all');
                                          }}
                                          className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                                    >
                                          Clear Filters
                                    </button>
                              </div>
                        )}

                        {/* Browse by Category Section */}
                        {!searchQuery && selectedCategory === 'all' && (
                              <div className="mt-12 sm:mt-16">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                                          Browse by Category
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                                          {categories.map(category => {
                                                const categoryCount = medicines.filter(medicine => {
                                                      const usage = medicine.usage.toLowerCase();
                                                      switch (category) {
                                                            case 'Pain & Fever':
                                                                  return usage.includes('pain') || usage.includes('fever');
                                                            case 'Heart & Circulation':
                                                                  return usage.includes('heart') || usage.includes('blood pressure') || usage.includes('cholesterol');
                                                            case 'Diabetes':
                                                                  return usage.includes('diabetes') || usage.includes('blood sugar');
                                                            case 'Mental Health':
                                                                  return usage.includes('depression') || usage.includes('anxiety') || usage.includes('mental');
                                                            case 'Respiratory':
                                                                  return usage.includes('asthma') || usage.includes('breathing') || usage.includes('respiratory');
                                                            case 'Digestive':
                                                                  return usage.includes('stomach') || usage.includes('acid') || usage.includes('ulcer') || usage.includes('digestive');
                                                            case 'Antibiotics':
                                                                  return usage.includes('antibiotic') || usage.includes('infection');
                                                            case 'Allergies':
                                                                  return usage.includes('allergy') || usage.includes('allergic');
                                                            default:
                                                                  return true;
                                                      }
                                                }).length;

                                                return (
                                                      <button
                                                            key={category}
                                                            onClick={() => setSelectedCategory(category)}
                                                            className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-left border border-gray-200 hover:border-blue-300"
                                                      >
                                                            <h3 className="font-medium text-gray-900 text-sm sm:text-base mb-1">{category}</h3>
                                                            <p className="text-xs sm:text-sm text-gray-600">{categoryCount} medicines</p>
                                                      </button>
                                                );
                                          })}
                                    </div>
                              </div>
                        )}
                  </div>

                  {/* Medicine Detail Modal */}
                  <MedicineDetailModal
                        medicine={selectedMedicine}
                        isOpen={isModalOpen}
                        onClose={closeModal}
                  />
            </div>
      );
};

export default MedicinesPage;