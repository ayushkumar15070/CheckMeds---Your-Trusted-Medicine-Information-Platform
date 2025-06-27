import React from 'react';
import { X, AlertTriangle, CheckCircle, XCircle, AlertCircle as AlertIcon } from 'lucide-react';

const MedicineDetailModal = ({ medicine, isOpen, onClose }) => {
      if (!isOpen || !medicine) return null;

      return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Header with Image */}
                        <div className="relative">
                              <div className="h-64 sm:h-80 overflow-hidden rounded-t-2xl">
                                    <img
                                          src={medicine.image}
                                          alt={medicine.name}
                                          className="w-full h-full object-cover"
                                          onError={(e) => {
                                                e.target.src = "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=500";
                                          }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                              </div>

                              {/* Close Button */}
                              <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors duration-200 shadow-lg"
                              >
                                    <X className="h-5 w-5" />
                              </button>

                              {/* Medicine Name Overlay */}
                              <div className="absolute bottom-4 left-4 right-4">
                                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{medicine.name}</h1>
                                    <p className="text-lg sm:text-xl text-blue-200 font-medium">{medicine.usage}</p>
                              </div>
                        </div>

                        <div className="p-6 sm:p-8">
                              {/* Medical Disclaimer */}
                              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                    <div className="flex items-start space-x-3">
                                          <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                                          <div>
                                                <h3 className="text-lg font-medium text-red-800 mb-2">Important Medical Disclaimer</h3>
                                                <p className="text-red-700">
                                                      This information is for general educational purposes only and should not replace professional medical advice.
                                                      Always consult with qualified healthcare professionals before taking any medication or making health decisions.
                                                </p>
                                          </div>
                                    </div>
                              </div>

                              {/* Content Grid */}
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                    {/* Benefits */}
                                    <div className="bg-green-50 rounded-xl p-6">
                                          <div className="flex items-center mb-4">
                                                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                                                <h2 className="text-xl sm:text-2xl font-bold text-green-800">Benefits</h2>
                                          </div>
                                          <ul className="space-y-2">
                                                {medicine.benefits.map((benefit, index) => (
                                                      <li key={index} className="flex items-start">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                            <span className="text-green-700">{benefit}</span>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>

                                    {/* Pros */}
                                    <div className="bg-blue-50 rounded-xl p-6">
                                          <div className="flex items-center mb-4">
                                                <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                                                <h2 className="text-xl sm:text-2xl font-bold text-blue-800">Advantages</h2>
                                          </div>
                                          <ul className="space-y-2">
                                                {medicine.pros.map((pro, index) => (
                                                      <li key={index} className="flex items-start">
                                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                            <span className="text-blue-700">{pro}</span>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>

                                    {/* Cons */}
                                    <div className="bg-red-50 rounded-xl p-6">
                                          <div className="flex items-center mb-4">
                                                <XCircle className="h-6 w-6 text-red-600 mr-3" />
                                                <h2 className="text-xl sm:text-2xl font-bold text-red-800">Disadvantages</h2>
                                          </div>
                                          <ul className="space-y-2">
                                                {medicine.cons.map((con, index) => (
                                                      <li key={index} className="flex items-start">
                                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                            <span className="text-red-700">{con}</span>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>

                                    {/* Side Effects */}
                                    <div className="bg-orange-50 rounded-xl p-6">
                                          <div className="flex items-center mb-4">
                                                <AlertIcon className="h-6 w-6 text-orange-600 mr-3" />
                                                <h2 className="text-xl sm:text-2xl font-bold text-orange-800">Side Effects</h2>
                                          </div>
                                          <ul className="space-y-2">
                                                {medicine.sideEffects.map((effect, index) => (
                                                      <li key={index} className="flex items-start">
                                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                            <span className="text-orange-700">{effect}</span>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              </div>

                              {/* Bottom Warning */}
                              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <div className="flex items-center">
                                          <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                                          <p className="text-yellow-800 text-sm">
                                                <strong>Remember:</strong> This information is for educational purposes only.
                                                Dosage, interactions, and suitability vary by individual. Always consult your healthcare provider.
                                          </p>
                                    </div>
                              </div>

                              {/* Close Button */}
                              <div className="mt-6 text-center">
                                    <button
                                          onClick={onClose}
                                          className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
                                    >
                                          Close
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default MedicineDetailModal;