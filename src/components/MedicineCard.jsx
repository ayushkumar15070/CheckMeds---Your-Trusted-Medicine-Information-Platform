import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, Eye } from 'lucide-react';

const MedicineCard = ({ medicine, onViewDetails }) => {
      const [isExpanded, setIsExpanded] = useState(false);

      return (
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {/* Medicine Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img
                              src={medicine.image}
                              alt={medicine.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                    e.target.src = "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=500";
                              }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <button
                              onClick={() => onViewDetails(medicine)}
                              className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-colors duration-200 shadow-lg"
                              title="View full details"
                        >
                              <Eye className="h-4 w-4" />
                        </button>
                  </div>

                  <div className="p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{medicine.name}</h3>
                        <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{medicine.usage}</p>

                        {/* Medical Disclaimer */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                              <div className="flex items-start space-x-2">
                                    <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                    <p className="text-xs text-yellow-800">
                                          Consult a healthcare professional before taking this medication.
                                    </p>
                              </div>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                              <div>
                                    <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Key Benefits:</h4>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                                          {medicine.benefits.slice(0, 2).map((benefit, index) => (
                                                <li key={index}>{benefit}</li>
                                          ))}
                                    </ul>
                              </div>

                              {isExpanded && (
                                    <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t">
                                          {medicine.benefits.length > 2 && (
                                                <div>
                                                      <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Additional Benefits:</h4>
                                                      <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                                                            {medicine.benefits.slice(2).map((benefit, index) => (
                                                                  <li key={index}>{benefit}</li>
                                                            ))}
                                                      </ul>
                                                </div>
                                          )}

                                          <div>
                                                <h4 className="font-semibold text-green-700 mb-2 text-sm sm:text-base">Pros:</h4>
                                                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                                                      {medicine.pros.map((pro, index) => (
                                                            <li key={index}>{pro}</li>
                                                      ))}
                                                </ul>
                                          </div>

                                          <div>
                                                <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Cons:</h4>
                                                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                                                      {medicine.cons.map((con, index) => (
                                                            <li key={index}>{con}</li>
                                                      ))}
                                                </ul>
                                          </div>

                                          <div>
                                                <h4 className="font-semibold text-orange-700 mb-2 text-sm sm:text-base">Side Effects:</h4>
                                                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base">
                                                      {medicine.sideEffects.map((effect, index) => (
                                                            <li key={index}>{effect}</li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </div>
                              )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
                              <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm sm:text-base"
                              >
                                    {isExpanded ? 'Show Less' : 'Show More'}
                                    {isExpanded ? (
                                          <ChevronUp className="ml-1 h-4 w-4" />
                                    ) : (
                                          <ChevronDown className="ml-1 h-4 w-4" />
                                    )}
                              </button>

                              <button
                                    onClick={() => onViewDetails(medicine)}
                                    className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                              >
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default MedicineCard;