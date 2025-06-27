import React from 'react';
import { Heart, Shield, Users, Award, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = ({ user }) => {
      return (
            <div className="min-h-screen bg-gray-50 py-12">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Hero Section */}
                        <div className="text-center mb-16">
                              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    About CheckMeds
                              </h1>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Your trusted companion for reliable medicine information, personalized insights,
                                    and expert medical guidance all in one comprehensive platform.
                              </p>
                        </div>

                        {/* Medical Disclaimer */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
                              <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                                    <div>
                                          <h3 className="text-lg font-medium text-yellow-800 mb-2">Important Medical Disclaimer</h3>
                                          <p className="text-yellow-700">
                                                All information provided on CheckMeds is for general educational purposes only and should not be considered as medical advice.
                                                Always consult with qualified healthcare professionals before making any medical decisions or taking any medications.
                                                CheckMeds does not replace professional medical consultation, diagnosis, or treatment.
                                          </p>
                                    </div>
                              </div>
                        </div>

                        {/* Mission Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                              <div className="text-center mb-8">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                          <Heart className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                              </div>
                              <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
                                    At CheckMeds, we believe everyone deserves access to accurate, comprehensive medicine information.
                                    Our mission is to empower individuals with the knowledge and tools they need to make informed
                                    healthcare decisions, promote wellness, and improve their quality of life through technology
                                    and reliable medical insights.
                              </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                              <div className="bg-white p-8 rounded-xl shadow-lg">
                                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                          <Shield className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Trusted Information</h3>
                                    <p className="text-gray-600">
                                          All our medical information is carefully curated from reliable sources and
                                          regularly updated to ensure accuracy and relevance for your health needs.
                                    </p>
                              </div>

                              <div className="bg-white p-8 rounded-xl shadow-lg">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                          <Users className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Care</h3>
                                    <p className="text-gray-600">
                                          Get tailored health recommendations based on your personal profile,
                                          symptoms, and medical history through our AI-powered platform.
                                    </p>
                              </div>

                              <div className="bg-white p-8 rounded-xl shadow-lg">
                                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                          <Award className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Network</h3>
                                    <p className="text-gray-600">
                                          Connect with qualified healthcare professionals and hospitals in your area
                                          based on your specific health needs and location.
                                    </p>
                              </div>
                        </div>

                        {/* What We Offer */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What We Offer</h2>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                          <div className="flex items-start space-x-4">
                                                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                                <div>
                                                      <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Medicine Database</h3>
                                                      <p className="text-gray-600">
                                                            Search through our extensive database of 50+ medicines with detailed information
                                                            about uses, benefits, side effects, and precautions.
                                                      </p>
                                                </div>
                                          </div>

                                          <div className="flex items-start space-x-4">
                                                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                                <div>
                                                      <h3 className="font-semibold text-gray-900 mb-2">AI Health Assistant</h3>
                                                      <p className="text-gray-600">
                                                            Get instant answers to your health questions with our intelligent AI assistant
                                                            that provides personalized guidance based on your symptoms.
                                                      </p>
                                                </div>
                                          </div>

                                          <div className="flex items-start space-x-4">
                                                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                                <div>
                                                      <h3 className="font-semibold text-gray-900 mb-2">Personal Health Dashboard</h3>
                                                      <p className="text-gray-600">
                                                            Track your health profile, manage medications, and receive personalized
                                                            recommendations for doctors and hospitals.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="space-y-6">
                                          <div className="flex items-start space-x-4">
                                                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                                <div>
                                                      <h3 className="font-semibold text-gray-900 mb-2">Doctor & Hospital Finder</h3>
                                                      <p className="text-gray-600">
                                                            Find qualified healthcare professionals and hospitals in your area
                                                            based on your specific medical needs and conditions.
                                                      </p>
                                                </div>
                                          </div>

                                          <div className="flex items-start space-x-4">
                                                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                                <div>
                                                      <h3 className="font-semibold text-gray-900 mb-2">Symptom Analysis</h3>
                                                      <p className="text-gray-600">
                                                            Input your symptoms and get relevant medicine suggestions and
                                                            professional recommendations for proper medical care.
                                                      </p>
                                                </div>
                                          </div>

                                          <div className="flex items-start space-x-4">
                                                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                                <div>
                                                      <h3 className="font-semibold text-gray-900 mb-2">Privacy & Security</h3>
                                                      <p className="text-gray-600">
                                                            Your health information is completely secure and private. We follow
                                                            strict data protection protocols to keep your information safe.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* CTA Section - Only show if user is not logged in */}
                        {!user && (
                              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
                                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Health Journey?</h2>
                                    <p className="text-xl mb-8 text-blue-100">
                                          Join thousands of users who trust CheckMeds for their medical information needs.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                          <Link
                                                to="/signup"
                                                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                                          >
                                                Get Started Free
                                          </Link>
                                          <Link
                                                to="/features"
                                                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                                          >
                                                Explore Features
                                          </Link>
                                    </div>
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default About;