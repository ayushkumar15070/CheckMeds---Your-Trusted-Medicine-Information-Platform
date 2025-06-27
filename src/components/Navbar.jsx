import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';

const Navbar = ({ user, onLogout }) => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isProfileOpen, setIsProfileOpen] = useState(false);
      const navigate = useNavigate();

      const handleLogout = () => {
            onLogout();
            navigate('/');
            setIsProfileOpen(false);
      };

      return (
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-14 sm:h-16">
                              {/* Logo */}
                              <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
                                    <img
                                          src="/CheckMeds-Logo.png"
                                          alt="CheckMeds Logo"
                                          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                                    />
                                    <span className="text-lg sm:text-xl font-bold text-gray-800">CheckMeds.</span>
                              </Link>

                              {/* Desktop Navigation */}
                              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                                    <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base">
                                          Home
                                    </Link>
                                    <Link to="/medicines" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base">
                                          Medicines
                                    </Link>
                                    <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base">
                                          About
                                    </Link>
                                    <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base">
                                          Features
                                    </Link>

                                    {user ? (
                                          <div className="relative">
                                                <button
                                                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                                                      className="flex items-center space-x-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm"
                                                >
                                                      <User className="h-3 w-3 sm:h-4 sm:w-4" />
                                                      <span className="hidden sm:inline">{user.name}</span>
                                                      <span className="sm:hidden">{user.name.split(' ')[0]}</span>
                                                </button>

                                                {isProfileOpen && (
                                                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                                            <Link
                                                                  to="/dashboard"
                                                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                  onClick={() => setIsProfileOpen(false)}
                                                            >
                                                                  Dashboard
                                                            </Link>
                                                            <button
                                                                  onClick={handleLogout}
                                                                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                  <LogOut className="h-4 w-4 mr-2" />
                                                                  Logout
                                                            </button>
                                                      </div>
                                                )}
                                          </div>
                                    ) : (
                                          <div className="flex items-center space-x-3 sm:space-x-4">
                                                <Link
                                                      to="/login"
                                                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm lg:text-base"
                                                >
                                                      Login
                                                </Link>
                                                <Link
                                                      to="/signup"
                                                      className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                                                >
                                                      Sign Up
                                                </Link>
                                          </div>
                                    )}
                              </div>

                              {/* Mobile menu button */}
                              <div className="md:hidden">
                                    <button
                                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                                          className="text-gray-700 hover:text-blue-600 p-1"
                                    >
                                          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                    </button>
                              </div>
                        </div>

                        {/* Mobile Navigation */}
                        {isMenuOpen && (
                              <div className="md:hidden">
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                                          <Link
                                                to="/"
                                                className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base"
                                                onClick={() => setIsMenuOpen(false)}
                                          >
                                                Home
                                          </Link>
                                          <Link
                                                to="/medicines"
                                                className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base"
                                                onClick={() => setIsMenuOpen(false)}
                                          >
                                                Medicines
                                          </Link>
                                          <Link
                                                to="/about"
                                                className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base"
                                                onClick={() => setIsMenuOpen(false)}
                                          >
                                                About
                                          </Link>
                                          <Link
                                                to="/features"
                                                className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base"
                                                onClick={() => setIsMenuOpen(false)}
                                          >
                                                Features
                                          </Link>

                                          {user ? (
                                                <>
                                                      <Link
                                                            to="/dashboard"
                                                            className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-base"
                                                            onClick={() => setIsMenuOpen(false)}
                                                      >
                                                            Dashboard
                                                      </Link>
                                                      <button
                                                            onClick={() => {
                                                                  handleLogout();
                                                                  setIsMenuOpen(false);
                                                            }}
                                                            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-base"
                                                      >
                                                            Logout
                                                      </button>
                                                </>
                                          ) : (
                                                <>
                                                      <Link
                                                            to="/login"
                                                            className="block px-3 py-2 text-blue-600 hover:text-blue-700 font-medium text-base"
                                                            onClick={() => setIsMenuOpen(false)}
                                                      >
                                                            Login
                                                      </Link>
                                                      <Link
                                                            to="/signup"
                                                            className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mx-3 text-center text-base"
                                                            onClick={() => setIsMenuOpen(false)}
                                                      >
                                                            Sign Up
                                                      </Link>
                                                </>
                                          )}
                                    </div>
                              </div>
                        )}
                  </div>
            </nav>
      );
};

export default Navbar;