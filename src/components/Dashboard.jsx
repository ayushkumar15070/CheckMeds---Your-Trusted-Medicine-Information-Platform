import React, { useState, useEffect } from 'react';
import { User, MapPin, Calendar, AlertCircle, Pill, Stethoscope, Building, Bot, AlertTriangle } from 'lucide-react';
import HealthProfile from './HealthProfile';
import AIAssistant from './AIAssistant';
import MedicineDetailModal from './MedicineDetailModal';
import { medicines } from '../data/medicines';
import { doctors } from '../data/doctors';
import { hospitals } from '../data/hospitals';

const Dashboard = ({ user }) => {
      const [healthProfile, setHealthProfile] = useState(null);
      const [activeTab, setActiveTab] = useState('profile');
      const [selectedMedicine, setSelectedMedicine] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [recommendations, setRecommendations] = useState({
            medicines: [],
            doctors: [],
            hospitals: []
      });

      useEffect(() => {
            // Load health profile from localStorage
            const savedProfile = localStorage.getItem(`healthProfile_${user.id}`);
            if (savedProfile) {
                  const profile = JSON.parse(savedProfile);
                  setHealthProfile(profile);
                  generateRecommendations(profile);
            }
      }, [user.id]);

      const generateRecommendations = (profile) => {
            if (!profile) return;

            // Enhanced AI-like recommendations based on profile data
            let recommendedMedicines = [];
            let recommendedDoctors = [];
            let recommendedHospitals = [];

            // Medicine recommendations based on symptoms and diseases
            if (profile.symptoms.length > 0) {
                  profile.symptoms.forEach(symptom => {
                        const symptomLower = symptom.toLowerCase();
                        const matches = medicines.filter(med =>
                              med.usage.toLowerCase().includes(symptomLower) ||
                              med.benefits.some(benefit =>
                                    benefit.toLowerCase().includes(symptomLower)
                              ) ||
                              // Enhanced matching for common symptoms
                              (symptomLower.includes('pain') && med.name.toLowerCase().includes('ibuprofen')) ||
                              (symptomLower.includes('headache') && (med.name.toLowerCase().includes('acetaminophen') || med.name.toLowerCase().includes('aspirin'))) ||
                              (symptomLower.includes('fever') && med.name.toLowerCase().includes('acetaminophen')) ||
                              (symptomLower.includes('cough') && med.usage.toLowerCase().includes('respiratory')) ||
                              (symptomLower.includes('cold') && med.usage.toLowerCase().includes('respiratory'))
                        );
                        recommendedMedicines = [...recommendedMedicines, ...matches];
                  });
            }

            if (profile.diseases.length > 0) {
                  profile.diseases.forEach(disease => {
                        const diseaseLower = disease.toLowerCase();
                        const matches = medicines.filter(med =>
                              med.usage.toLowerCase().includes(diseaseLower) ||
                              // Enhanced matching for common diseases
                              (diseaseLower.includes('diabetes') && med.name.toLowerCase().includes('metformin')) ||
                              (diseaseLower.includes('hypertension') && (med.name.toLowerCase().includes('lisinopril') || med.name.toLowerCase().includes('amlodipine'))) ||
                              (diseaseLower.includes('heart') && med.name.toLowerCase().includes('atorvastatin')) ||
                              (diseaseLower.includes('depression') && (med.name.toLowerCase().includes('sertraline') || med.name.toLowerCase().includes('escitalopram'))) ||
                              (diseaseLower.includes('anxiety') && med.name.toLowerCase().includes('lorazepam'))
                        );
                        recommendedMedicines = [...recommendedMedicines, ...matches];
                  });
            }

            // Enhanced Doctor recommendations based on diseases and symptoms
            const allConditions = [...(profile.diseases || []), ...(profile.symptoms || [])];
            if (allConditions.length > 0) {
                  allConditions.forEach(condition => {
                        const conditionLower = condition.toLowerCase();
                        const matchingDoctors = doctors.filter(doctor => {
                              const specializationLower = doctor.specialization.toLowerCase();
                              return (
                                    specializationLower.includes(conditionLower) ||
                                    // Enhanced matching logic
                                    (conditionLower.includes('heart') && specializationLower.includes('cardio')) ||
                                    (conditionLower.includes('skin') && specializationLower.includes('dermat')) ||
                                    (conditionLower.includes('mental') && specializationLower.includes('psychiatr')) ||
                                    (conditionLower.includes('depression') && specializationLower.includes('psychiatr')) ||
                                    (conditionLower.includes('anxiety') && specializationLower.includes('psychiatr')) ||
                                    (conditionLower.includes('diabetes') && specializationLower.includes('endocrin')) ||
                                    (conditionLower.includes('bone') && specializationLower.includes('orthoped')) ||
                                    (conditionLower.includes('joint') && specializationLower.includes('orthoped')) ||
                                    (conditionLower.includes('stomach') && specializationLower.includes('gastro')) ||
                                    (conditionLower.includes('lung') && specializationLower.includes('pulmon')) ||
                                    (conditionLower.includes('breathing') && specializationLower.includes('pulmon')) ||
                                    (conditionLower.includes('nerve') && specializationLower.includes('neuro')) ||
                                    (conditionLower.includes('headache') && specializationLower.includes('neuro')) ||
                                    // General conditions that internal medicine can handle
                                    (conditionLower.includes('fever') && specializationLower.includes('internal')) ||
                                    (conditionLower.includes('pain') && specializationLower.includes('internal'))
                              );
                        });
                        recommendedDoctors = [...recommendedDoctors, ...matchingDoctors];
                  });
            }

            // Enhanced Hospital recommendations based on location and specialties needed
            if (profile.location) {
                  const locationLower = profile.location.toLowerCase();
                  let matchingHospitals = hospitals.filter(hospital =>
                        hospital.location.toLowerCase().includes(locationLower) ||
                        // Match by state/city
                        locationLower.split(',').some(part =>
                              hospital.location.toLowerCase().includes(part.trim())
                        )
                  );

                  // If no location match, get hospitals with relevant specialties
                  if (matchingHospitals.length === 0 && allConditions.length > 0) {
                        matchingHospitals = hospitals.filter(hospital => {
                              return allConditions.some(condition => {
                                    const conditionLower = condition.toLowerCase();
                                    return hospital.specialties.some(specialty => {
                                          const specialtyLower = specialty.toLowerCase();
                                          return (
                                                specialtyLower.includes(conditionLower) ||
                                                (conditionLower.includes('heart') && specialtyLower.includes('cardio')) ||
                                                (conditionLower.includes('cancer') && specialtyLower.includes('oncology')) ||
                                                (conditionLower.includes('brain') && specialtyLower.includes('neuro')) ||
                                                (conditionLower.includes('bone') && specialtyLower.includes('orthoped'))
                                          );
                                    });
                              });
                        });
                  }

                  // If still no matches, show some general hospitals
                  if (matchingHospitals.length === 0) {
                        matchingHospitals = hospitals.slice(0, 3);
                  }

                  recommendedHospitals = matchingHospitals;
            } else {
                  // If no location provided, show general hospitals
                  recommendedHospitals = hospitals.slice(0, 3);
            }

            // Remove duplicates and limit results
            recommendedMedicines = Array.from(new Set(recommendedMedicines.map(m => m.name)))
                  .map(name => recommendedMedicines.find(m => m.name === name))
                  .slice(0, 6);

            recommendedDoctors = Array.from(new Set(recommendedDoctors.map(d => d.name)))
                  .map(name => recommendedDoctors.find(d => d.name === name))
                  .slice(0, 6);

            recommendedHospitals = Array.from(new Set(recommendedHospitals.map(h => h.name)))
                  .map(name => recommendedHospitals.find(h => h.name === name))
                  .slice(0, 6);

            setRecommendations({
                  medicines: recommendedMedicines,
                  doctors: recommendedDoctors,
                  hospitals: recommendedHospitals
            });
      };

      const handleProfileUpdate = (profile) => {
            setHealthProfile(profile);
            localStorage.setItem(`healthProfile_${user.id}`, JSON.stringify(profile));
            // Real-time update: regenerate recommendations immediately
            generateRecommendations(profile);
      };

      const handleViewMedicineDetails = (medicine) => {
            setSelectedMedicine(medicine);
            setIsModalOpen(true);
      };

      const closeModal = () => {
            setIsModalOpen(false);
            setSelectedMedicine(null);
      };

      const tabs = [
            { id: 'profile', name: 'Health Profile', icon: User },
            { id: 'recommendations', name: 'Recommendations', icon: Stethoscope },
            { id: 'assistant', name: 'AI Assistant', icon: Bot },
      ];

      return (
            <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
                              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                                    <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                                          <User className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Welcome back, {user.name}!</h1>
                                          <p className="text-sm sm:text-base text-gray-600">Here's your personalized health dashboard</p>
                                    </div>
                              </div>
                        </div>

                        {/* Medical Disclaimer */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
                              <div className="flex items-start space-x-2 sm:space-x-3">
                                    <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                    <p className="text-xs sm:text-sm text-yellow-800">
                                          <strong>Important:</strong> All recommendations and information provided are for general educational purposes only.
                                          Always consult with qualified healthcare professionals before making any medical decisions or taking medications.
                                    </p>
                              </div>
                        </div>

                        {/* Tabs */}
                        <div className="mb-6 sm:mb-8">
                              <div className="border-b border-gray-200">
                                    <nav className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto">
                                          {tabs.map((tab) => {
                                                const Icon = tab.icon;
                                                return (
                                                      <button
                                                            key={tab.id}
                                                            onClick={() => setActiveTab(tab.id)}
                                                            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-1 sm:space-x-2 whitespace-nowrap ${activeTab === tab.id
                                                                        ? 'border-blue-500 text-blue-600'
                                                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                                                  }`}
                                                      >
                                                            <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                                                            <span className="hidden sm:inline">{tab.name}</span>
                                                            <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
                                                      </button>
                                                );
                                          })}
                                    </nav>
                              </div>
                        </div>

                        {/* Tab Content */}
                        {activeTab === 'profile' && (
                              <HealthProfile
                                    user={user}
                                    healthProfile={healthProfile}
                                    onProfileUpdate={handleProfileUpdate}
                              />
                        )}

                        {activeTab === 'recommendations' && (
                              <div className="space-y-6 sm:space-y-8">
                                    {!healthProfile ? (
                                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
                                                <div className="flex items-center">
                                                      <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 mr-3" />
                                                      <div>
                                                            <h3 className="text-base sm:text-lg font-medium text-yellow-800">Complete Your Health Profile</h3>
                                                            <p className="text-sm sm:text-base text-yellow-600">Fill out your health profile to get personalized recommendations.</p>
                                                      </div>
                                                </div>
                                          </div>
                                    ) : (
                                          <>
                                                {/* Medicine Recommendations */}
                                                <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                                                      <div className="flex items-center mb-4">
                                                            <Pill className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-3" />
                                                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Recommended Medicines</h2>
                                                      </div>
                                                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                                                            <p className="text-xs sm:text-sm text-red-800">
                                                                  <strong>Warning:</strong> These are general suggestions based on your profile.
                                                                  Always consult a doctor before taking any medication.
                                                            </p>
                                                      </div>
                                                      {recommendations.medicines.length > 0 ? (
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                                  {recommendations.medicines.map((medicine, index) => (
                                                                        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                                                                              onClick={() => handleViewMedicineDetails(medicine)}>
                                                                              <div className="flex items-center mb-3">
                                                                                    <img
                                                                                          src={medicine.image}
                                                                                          alt={medicine.name}
                                                                                          className="w-12 h-12 object-cover rounded-lg mr-3"
                                                                                          onError={(e) => {
                                                                                                e.target.src = "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=500";
                                                                                          }}
                                                                                    />
                                                                                    <div className="flex-1">
                                                                                          <h3 className="font-medium text-gray-800 text-sm sm:text-base">{medicine.name}</h3>
                                                                                          <p className="text-xs sm:text-sm text-blue-600 mb-2">{medicine.usage}</p>
                                                                                    </div>
                                                                              </div>
                                                                              <p className="text-xs sm:text-sm text-gray-600">{medicine.benefits[0]}</p>
                                                                              <button className="mt-2 text-xs text-blue-600 hover:text-blue-700">
                                                                                    Click to view details →
                                                                              </button>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      ) : (
                                                            <p className="text-sm sm:text-base text-gray-500">No specific medicine recommendations based on your profile.</p>
                                                      )}
                                                </div>

                                                {/* Doctor Recommendations */}
                                                <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                                                      <div className="flex items-center mb-4">
                                                            <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3" />
                                                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Recommended Doctors</h2>
                                                      </div>
                                                      {recommendations.doctors.length > 0 ? (
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                                  {recommendations.doctors.map((doctor, index) => (
                                                                        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                                                              <h3 className="font-medium text-gray-800 text-sm sm:text-base">Dr. {doctor.name}</h3>
                                                                              <p className="text-xs sm:text-sm text-blue-600 mb-1">{doctor.specialization}</p>
                                                                              <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
                                                                                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                                                    {doctor.location}
                                                                              </div>
                                                                              <p className="text-xs sm:text-sm text-gray-600">Experience: {doctor.experience}</p>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      ) : (
                                                            <p className="text-sm sm:text-base text-gray-500">No specific doctor recommendations based on your profile.</p>
                                                      )}
                                                </div>

                                                {/* Hospital Recommendations */}
                                                <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                                                      <div className="flex items-center mb-4">
                                                            <Building className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mr-3" />
                                                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Recommended Hospitals</h2>
                                                      </div>
                                                      {recommendations.hospitals.length > 0 ? (
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                                  {recommendations.hospitals.map((hospital, index) => (
                                                                        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                                                              <h3 className="font-medium text-gray-800 text-sm sm:text-base">{hospital.name}</h3>
                                                                              <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
                                                                                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                                                    {hospital.location}
                                                                              </div>
                                                                              <p className="text-xs sm:text-sm text-blue-600">Specialties: {hospital.specialties.slice(0, 2).join(', ')}</p>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      ) : (
                                                            <p className="text-sm sm:text-base text-gray-500">No hospital recommendations based on your location.</p>
                                                      )}
                                                </div>
                                          </>
                                    )}
                              </div>
                        )}

                        {activeTab === 'assistant' && (
                              <AIAssistant user={user} healthProfile={healthProfile} />
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

export default Dashboard;