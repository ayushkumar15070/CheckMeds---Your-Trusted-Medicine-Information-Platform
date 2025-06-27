import React, { useState, useEffect } from 'react';
import { Save, User, MapPin, Calendar, AlertCircle, Heart, Pill } from 'lucide-react';

const HealthProfile = ({ user, healthProfile, onProfileUpdate }) => {
      const [formData, setFormData] = useState({
            age: '',
            gender: '',
            location: '',
            symptoms: [],
            diseases: [],
            allergies: [],
            currentMedications: [],
            emergencyContact: '',
            bloodType: '',
            height: '',
            weight: ''
      });

      const [newSymptom, setNewSymptom] = useState('');
      const [newDisease, setNewDisease] = useState('');
      const [newAllergy, setNewAllergy] = useState('');
      const [newMedication, setNewMedication] = useState('');

      useEffect(() => {
            if (healthProfile) {
                  setFormData(healthProfile);
            }
      }, [healthProfile]);

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            });
      };

      const addItem = (type, value, setterFunction) => {
            if (value.trim()) {
                  setFormData({
                        ...formData,
                        [type]: [...formData[type], value.trim()]
                  });
                  setterFunction('');
            }
      };

      const removeItem = (type, index) => {
            setFormData({
                  ...formData,
                  [type]: formData[type].filter((_, i) => i !== index)
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            onProfileUpdate(formData);
      };

      return (
            <div className="bg-white rounded-xl shadow-sm">
                  <div className="p-4 sm:p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                              <User className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Health Profile</h2>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">Complete your health information to get personalized recommendations</p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                        {/* Basic Information */}
                        <div>
                              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4 flex items-center">
                                    <User className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                                    Basic Information
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                                          <input
                                                type="number"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                                placeholder="Enter your age"
                                          />
                                    </div>

                                    <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                          <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                          >
                                                <option value="">Select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                                <option value="prefer-not-to-say">Prefer not to say</option>
                                          </select>
                                    </div>

                                    <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                          <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                                placeholder="City, State"
                                          />
                                    </div>

                                    <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
                                          <select
                                                name="bloodType"
                                                value={formData.bloodType}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                          >
                                                <option value="">Select blood type</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                          </select>
                                    </div>

                                    <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                                          <input
                                                type="number"
                                                name="height"
                                                value={formData.height}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                                placeholder="170"
                                          />
                                    </div>

                                    <div>
                                          <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                                          <input
                                                type="number"
                                                name="weight"
                                                value={formData.weight}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                                placeholder="70"
                                          />
                                    </div>
                              </div>
                        </div>

                        {/* Current Symptoms */}
                        <div>
                              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4 flex items-center">
                                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-orange-600" />
                                    Current Symptoms
                              </h3>
                              <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                          <input
                                                type="text"
                                                value={newSymptom}
                                                onChange={(e) => setNewSymptom(e.target.value)}
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                                placeholder="Add a symptom (e.g., headache, fever)"
                                          />
                                          <button
                                                type="button"
                                                onClick={() => addItem('symptoms', newSymptom, setNewSymptom)}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
                                          >
                                                Add
                                          </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                          {formData.symptoms.map((symptom, index) => (
                                                <span
                                                      key={index}
                                                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs sm:text-sm flex items-center"
                                                >
                                                      {symptom}
                                                      <button
                                                            type="button"
                                                            onClick={() => removeItem('symptoms', index)}
                                                            className="ml-2 text-orange-600 hover:text-orange-800"
                                                      >
                                                            ×
                                                      </button>
                                                </span>
                                          ))}
                                    </div>
                              </div>
                        </div>

                        {/* Known Diseases */}
                        <div>
                              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4 flex items-center">
                                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-600" />
                                    Known Diseases/Conditions
                              </h3>
                              <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                          <input
                                                type="text"
                                                value={newDisease}
                                                onChange={(e) => setNewDisease(e.target.value)}
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                                placeholder="Add a condition (e.g., diabetes, hypertension)"
                                          />
                                          <button
                                                type="button"
                                                onClick={() => addItem('diseases', newDisease, setNewDisease)}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
                                          >
                                                Add
                                          </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                          {formData.diseases.map((disease, index) => (
                                                <span
                                                      key={index}
                                                      className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs sm:text-sm flex items-center"
                                                >
                                                      {disease}
                                                      <button
                                                            type="button"
                                                            onClick={() => removeItem('diseases', index)}
                                                            className="ml-2 text-red-600 hover:text-red-800"
                                                      >
                                                            ×
                                                      </button>
                                                </span>
                                          ))}
                                    </div>
                              </div>
                        </div>

                        {/* Allergies */}
                        <div>
                              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4 flex items-center">
                                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-600" />
                                    Allergies
                              </h3>
                              <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                          <input
                                                type="text"
                                                value={newAllergy}
                                                onChange={(e) => setNewAllergy(e.target.value)}
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                                placeholder="Add an allergy (e.g., peanuts, penicillin)"
                                          />
                                          <button
                                                type="button"
                                                onClick={() => addItem('allergies', newAllergy, setNewAllergy)}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
                                          >
                                                Add
                                          </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                          {formData.allergies.map((allergy, index) => (
                                                <span
                                                      key={index}
                                                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs sm:text-sm flex items-center"
                                                >
                                                      {allergy}
                                                      <button
                                                            type="button"
                                                            onClick={() => removeItem('allergies', index)}
                                                            className="ml-2 text-yellow-600 hover:text-yellow-800"
                                                      >
                                                            ×
                                                      </button>
                                                </span>
                                          ))}
                                    </div>
                              </div>
                        </div>

                        {/* Current Medications */}
                        <div>
                              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4 flex items-center">
                                    <Pill className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-600" />
                                    Current Medications
                              </h3>
                              <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                          <input
                                                type="text"
                                                value={newMedication}
                                                onChange={(e) => setNewMedication(e.target.value)}
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                                placeholder="Add a medication (e.g., Aspirin 100mg daily)"
                                          />
                                          <button
                                                type="button"
                                                onClick={() => addItem('currentMedications', newMedication, setNewMedication)}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
                                          >
                                                Add
                                          </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                          {formData.currentMedications.map((medication, index) => (
                                                <span
                                                      key={index}
                                                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs sm:text-sm flex items-center"
                                                >
                                                      {medication}
                                                      <button
                                                            type="button"
                                                            onClick={() => removeItem('currentMedications', index)}
                                                            className="ml-2 text-green-600 hover:text-green-800"
                                                      >
                                                            ×
                                                      </button>
                                                </span>
                                          ))}
                                    </div>
                              </div>
                        </div>

                        {/* Emergency Contact */}
                        <div>
                              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">Emergency Contact</h3>
                              <input
                                    type="text"
                                    name="emergencyContact"
                                    value={formData.emergencyContact}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                    placeholder="Emergency contact name and phone number"
                              />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                              <button
                                    type="submit"
                                    className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                              >
                                    <Save className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                    Save Profile
                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default HealthProfile;