import React from 'react';
import { Search, Bot, Heart, Stethoscope, Users, Shield, Smartphone, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = ({ user }) => {
      const features = [
            {
                  icon: Search,
                  title: 'Smart Medicine Search',
                  description: 'Instantly search through our comprehensive database of 50+ medicines with detailed information about uses, benefits, side effects, and dosage guidelines.',
                  color: 'blue'
            },
            {
                  icon: Bot,
                  title: 'AI Health Assistant',
                  description: 'Get personalized health guidance with our intelligent AI assistant that analyzes your symptoms and provides relevant recommendations 24/7.',
                  color: 'green'
            },
            {
                  icon: Heart,
                  title: 'Personal Health Dashboard',
                  description: 'Create a comprehensive health profile with your medical history, current medications, allergies, and receive tailored health insights.',
                  color: 'red'
            },
            {
                  icon: Stethoscope,
                  title: 'Doctor Recommendations',
                  description: 'Find qualified healthcare professionals in your area based on your specific conditions, symptoms, and location preferences.',
                  color: 'purple'
            },
            {
                  icon: Users,
                  title: 'Hospital Finder',
                  description: 'Locate the best hospitals and medical facilities near you with specialized departments that match your healthcare needs.',
                  color: 'indigo'
            },
            {
                  icon: Shield,
                  title: 'Privacy & Security',
                  description: 'Your health information is completely secure with end-to-end encryption and strict privacy controls protecting your personal data.',
                  color: 'gray'
            },
            {
                  icon: Smartphone,
                  title: 'Mobile Responsive',
                  description: 'Access your health information anywhere, anytime with our fully responsive design that works perfectly on all devices.',
                  color: 'teal'
            },
            {
                  icon: Clock,
                  title: '24/7 Availability',
                  description: 'Get instant access to health information and AI assistance any time of day or night, ensuring help is always available when you need it.',
                  color: 'orange'
            }
      ];

      const getColorClasses = (color) => {
            const colorMap = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  red: 'bg-red-100 text-red-600',
                  purple: 'bg-purple-100 text-purple-600',
                  indigo: 'bg-indigo-100 text-indigo-600',
                  gray: 'bg-gray-100 text-gray-600',
                  teal: 'bg-teal-100 text-teal-600',
                  orange: 'bg-orange-100 text-orange-600'
            };
            return colorMap[color] || 'bg-blue-100 text-blue-600';
      };

      return (
            <div className="min-h-screen bg-gray-50 py-12">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    Powerful Features for Your Health
                              </h1>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Discover all the tools and features that make CheckMeds your comprehensive
                                    health information platform and personal wellness companion.
                              </p>
                        </div>

                        {/* Medical Disclaimer */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
                              <div className="flex items-start space-x-3">
                                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                                    <div>
                                          <h3 className="text-lg font-medium text-yellow-800 mb-2">Medical Disclaimer</h3>
                                          <p className="text-yellow-700">
                                                All features and information provided are for educational purposes only.
                                                Always consult with qualified healthcare professionals before making any medical decisions or taking medications.
                                          </p>
                                    </div>
                              </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                              {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                          <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
                                                      <Icon className="h-8 w-8" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                          </div>
                                    );
                              })}
                        </div>

                        {/* How It Works Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How CheckMeds Works</h2>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                          <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                                1
                                          </div>
                                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Search & Explore</h3>
                                          <p className="text-gray-600">
                                                Start by searching for medicines, symptoms, or conditions using our intelligent search system.
                                                Browse through detailed information and discover relevant health insights.
                                          </p>
                                    </div>

                                    <div className="text-center">
                                          <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                                2
                                          </div>
                                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Your Profile</h3>
                                          <p className="text-gray-600">
                                                Set up your personal health dashboard with your medical history, current medications,
                                                allergies, and symptoms to receive personalized recommendations.
                                          </p>
                                    </div>

                                    <div className="text-center">
                                          <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                                3
                                          </div>
                                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Get AI Guidance</h3>
                                          <p className="text-gray-600">
                                                Use our AI assistant for instant health guidance, receive personalized medicine suggestions,
                                                and find qualified healthcare professionals in your area.
                                          </p>
                                    </div>
                              </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white mb-12">
                              <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold mb-4">Why Choose CheckMeds?</h2>
                                    <p className="text-xl text-blue-100">
                                          Join thousands of users who trust our platform for their health information needs
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="text-center">
                                          <div className="text-3xl font-bold mb-2">50+</div>
                                          <p className="text-blue-100">Medicines in Database</p>
                                    </div>
                                    <div className="text-center">
                                          <div className="text-3xl font-bold mb-2">24/7</div>
                                          <p className="text-blue-100">AI Assistant Available</p>
                                    </div>
                                    <div className="text-center">
                                          <div className="text-3xl font-bold mb-2">100%</div>
                                          <p className="text-blue-100">Privacy Protected</p>
                                    </div>
                                    <div className="text-center">
                                          <div className="text-3xl font-bold mb-2">Free</div>
                                          <p className="text-blue-100">Always Free to Use</p>
                                    </div>
                              </div>
                        </div>

                        {/* CTA Section - Only show if user is not logged in */}
                        {!user && (
                              <div className="text-center">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                          Ready to Experience These Features?
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-8">
                                          Start your health journey today with CheckMeds' comprehensive platform.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                          <Link
                                                to="/signup"
                                                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                                          >
                                                Get Started Free
                                          </Link>
                                          <Link
                                                to="/"
                                                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                                          >
                                                Try Medicine Search
                                          </Link>
                                    </div>
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default Features;