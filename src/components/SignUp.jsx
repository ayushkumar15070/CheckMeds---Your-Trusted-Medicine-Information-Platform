import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';

const SignUp = ({ onLogin }) => {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
      });
      const [error, setError] = useState('');

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            });
            setError('');
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            // Validation
            if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
                  setError('Please fill in all fields');
                  return;
            }

            if (formData.password !== formData.confirmPassword) {
                  setError('Passwords do not match');
                  return;
            }

            if (formData.password.length < 6) {
                  setError('Password must be at least 6 characters long');
                  return;
            }

            // Check if user already exists
            const users = JSON.parse(localStorage.getItem('checkMedsUsers') || '[]');
            if (users.find(u => u.email === formData.email)) {
                  setError('An account with this email already exists');
                  return;
            }

            // Create new user
            const newUser = {
                  id: Date.now(),
                  name: formData.name,
                  email: formData.email,
                  password: formData.password,
                  createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem('checkMedsUsers', JSON.stringify(users));

            onLogin(newUser);
      };

      return (
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                              <div className="flex justify-center">
                                    <img
                                          src="/CheckMeds-Logo.png"
                                          alt="CheckMeds Logo"
                                          className="h-16 w-16 rounded-full"
                                    />
                              </div>
                              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                    Create your account
                              </h2>
                              <p className="mt-2 text-sm text-gray-600">
                                    Join CheckMeds and start your wellness journey
                              </p>
                        </div>

                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                              {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                                          {error}
                                    </div>
                              )}

                              <div className="space-y-4">
                                    <div>
                                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name
                                          </label>
                                          <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                      id="name"
                                                      name="name"
                                                      type="text"
                                                      value={formData.name}
                                                      onChange={handleChange}
                                                      className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                      placeholder="Enter your full name"
                                                />
                                          </div>
                                    </div>

                                    <div>
                                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                          </label>
                                          <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                      id="email"
                                                      name="email"
                                                      type="email"
                                                      value={formData.email}
                                                      onChange={handleChange}
                                                      className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                      placeholder="Enter your email"
                                                />
                                          </div>
                                    </div>

                                    <div>
                                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                                Password
                                          </label>
                                          <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                      id="password"
                                                      name="password"
                                                      type="password"
                                                      value={formData.password}
                                                      onChange={handleChange}
                                                      className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                      placeholder="Create a password"
                                                />
                                          </div>
                                    </div>

                                    <div>
                                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                                Confirm Password
                                          </label>
                                          <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                      id="confirmPassword"
                                                      name="confirmPassword"
                                                      type="password"
                                                      value={formData.confirmPassword}
                                                      onChange={handleChange}
                                                      className="pl-10 block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                      placeholder="Confirm your password"
                                                />
                                          </div>
                                    </div>
                              </div>

                              <div>
                                    <button
                                          type="submit"
                                          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                                    >
                                          Create Account
                                    </button>
                              </div>

                              <div className="text-center">
                                    <p className="text-sm text-gray-600">
                                          Already have an account?{' '}
                                          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                                                Sign in here
                                          </Link>
                                    </p>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default SignUp;