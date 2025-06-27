import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

// Custom X (Twitter) icon component since Lucide doesn't have the new X logo
const XIcon = ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
);

// Custom Threads icon component
const ThreadsIcon = ({ className }) => (
      <svg className={className} viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M342.383 237.038a177.282 177.282 0 00-6.707-3.046c-3.948-72.737-43.692-114.379-110.429-114.805-38.505-.255-72.972 15.445-94.454 48.041l36.702 25.178c15.265-23.159 39.221-28.096 56.864-28.096.204 0 .408 0 .61.002 21.974.14 38.555 6.529 49.287 18.987 7.81 9.071 13.034 21.606 15.621 37.425-19.483-3.311-40.553-4.329-63.077-3.038-63.45 3.655-104.24 40.661-101.501 92.08 1.391 26.083 14.385 48.523 36.587 63.181 18.772 12.391 42.95 18.45 68.077 17.079 33.183-1.819 59.215-14.48 77.377-37.63 13.793-17.58 22.516-40.363 26.368-69.069 15.814 9.544 27.535 22.103 34.007 37.2 11.006 25.665 11.648 67.84-22.764 102.223-30.15 30.121-66.392 43.151-121.164 43.554-60.758-.45-106.708-19.935-136.583-57.915-27.976-35.562-42.434-86.93-42.973-152.674.539-65.746 14.997-117.114 42.973-152.676 29.875-37.979 75.824-57.463 136.582-57.914 61.197.455 107.948 20.033 138.967 58.195 15.21 18.713 26.676 42.248 34.236 69.688L440 161.532c-9.163-33.775-23.582-62.881-43.203-87.017C357.031 25.59 298.872.519 223.936 0h-.3C148.851.518 91.344 25.683 52.709 74.795 18.331 118.499.598 179.308.002 255.535l-.002.18.002.18c.596 76.225 18.329 137.037 52.707 180.741 38.635 49.11 96.142 74.277 170.927 74.794h.3c66.486-.462 113.352-17.868 151.96-56.442 50.51-50.463 48.99-113.718 32.342-152.549-11.945-27.847-34.716-50.463-65.855-65.401zM227.587 344.967c-27.808 1.567-56.699-10.916-58.124-37.651-1.056-19.823 14.108-41.942 59.831-44.577a266.87 266.87 0 0115.422-.45c16.609 0 32.145 1.613 46.271 4.701-5.268 65.798-36.172 76.483-63.4 77.977z" /></svg>

);

const Footer = () => {
      const handleEmailClick = () => {
            const subject = encodeURIComponent('Inquiry about CheckMeds');
            const body = encodeURIComponent('Hello,\n\nI would like to inquire about CheckMeds. Please provide more information.\n\nThank you!');
            window.open(`mailto:ftayush04@gmail.com?subject=${subject}&body=${body}`, '_blank');
      };

      const handlePhoneClick = () => {
            window.open('tel:+917307333219', '_self');
      };

      return (
            <footer className="bg-gray-900 text-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {/* Company Info */}
                              <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                          <img
                                                src="/CheckMeds-Logo.png"
                                                alt="CheckMeds Logo"
                                                className="h-10 w-10 rounded-full"
                                          />
                                          <span className="text-xl font-bold">CheckMeds.</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                          Your trusted companion for reliable medicine information, personalized health insights,
                                          and expert medical guidance all in one comprehensive platform.
                                    </p>
                                    <div className="flex space-x-4">
                                          <a
                                                href="https://www.instagram.com/ayusharp.coder/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                                aria-label="Follow us on Instagram"
                                          >
                                                <Instagram className="h-5 w-5" />
                                          </a>
                                          <a
                                                href="https://www.threads.com/@ayusharpcoder"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                                aria-label="Follow us on Threads"
                                          >
                                                <ThreadsIcon className="h-5 w-5" />
                                          </a>
                                          <a
                                                href="https://x.com/Ayusharpcoder"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                                aria-label="Follow us on X (Twitter)"
                                          >
                                                <XIcon className="h-5 w-5" />
                                          </a>
                                          <a
                                                href="https://www.linkedin.com/in/ayush-vishwakarma-903669287/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                                aria-label="Connect with us on LinkedIn"
                                          >
                                                <Linkedin className="h-5 w-5" />
                                          </a>
                                    </div>
                              </div>

                              {/* Quick Links */}
                              <div className="space-y-4">
                                    <h3 className="text-lg font-semibold">Quick Links</h3>
                                    <ul className="space-y-2">
                                          <li>
                                                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                                                      Home
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to="/medicines" className="text-gray-300 hover:text-white transition-colors text-sm">
                                                      Medicines
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                                                      About Us
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to="/features" className="text-gray-300 hover:text-white transition-colors text-sm">
                                                      Features
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to="/login" className="text-gray-300 hover:text-white transition-colors text-sm">
                                                      Login
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to="/signup" className="text-gray-300 hover:text-white transition-colors text-sm">
                                                      Sign Up
                                                </Link>
                                          </li>
                                    </ul>
                              </div>

                              {/* Services */}
                              <div className="space-y-4">
                                    <h3 className="text-lg font-semibold">Services</h3>
                                    <ul className="space-y-2">
                                          <li className="text-gray-300 text-sm">Medicine Search</li>
                                          <li className="text-gray-300 text-sm">AI Health Assistant</li>
                                          <li className="text-gray-300 text-sm">Doctor Recommendations</li>
                                          <li className="text-gray-300 text-sm">Hospital Finder</li>
                                          <li className="text-gray-300 text-sm">Health Dashboard</li>
                                    </ul>
                              </div>

                              {/* Contact Info */}
                              <div className="space-y-4">
                                    <h3 className="text-lg font-semibold">Contact Us</h3>
                                    <div className="space-y-3">
                                          <div className="flex items-center space-x-3">
                                                <Mail className="h-4 w-4 text-gray-400" />
                                                <button
                                                      onClick={handleEmailClick}
                                                      className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                                                >
                                                      ftayush04@gmail.com
                                                </button>
                                          </div>
                                          <div className="flex items-center space-x-3">
                                                <Phone className="h-4 w-4 text-gray-400" />
                                                <button
                                                      onClick={handlePhoneClick}
                                                      className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                                                >
                                                      +91 0123456789
                                                </button>
                                          </div>
                                          <div className="flex items-start space-x-3">
                                                <span className="text-gray-300 text-sm">
                                                      Portfolio:
                                                      <a
                                                            href="https://ayush-portfolio-delta.vercel.app/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-400 hover:text-blue-300 transition-colors ml-1"
                                                      >
                                                            Visit Website
                                                      </a>
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="border-t border-gray-800 mt-8 pt-8">
                              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                    <div className="text-center md:text-left">
                                          <p className="text-gray-400 text-sm">
                                                © 2025 CheckMeds. All rights reserved.
                                          </p>
                                    </div>
                                    <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                                          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                                Privacy Policy
                                          </a>
                                          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                                Terms of Service
                                          </a>
                                          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                                Cookie Policy
                                          </a>
                                    </div>
                              </div>

                              {/* Medical Disclaimer */}
                              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                                    <p className="text-gray-400 text-xs text-center leading-relaxed">
                                          <strong>Medical Disclaimer:</strong> CheckMeds provides general information about medicines for educational purposes only.
                                          This information is not intended as medical advice and should not replace consultation with qualified healthcare professionals.
                                          Always consult your doctor or pharmacist before taking any medication or making health-related decisions.
                                    </p>
                              </div>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;