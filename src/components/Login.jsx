import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

const Login = ({ onLogin }) => {
      const [formData, setFormData] = useState({
            email: '',
            password: ''
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

            // Simple validation
            if (!formData.email || !formData.password) {
                  setError('Please fill in all fields');
                  return;
            }

            // Check if user exists in localStorage
            const users = JSON.parse(localStorage.getItem('checkMedsUsers') || '[]');
            const user = users.find(u => u.email === formData.email && u.password === formData.password);

            if (user) {
                  onLogin(user);
            } else {
                  setError('Invalid email or password');
            }
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
                                    Welcome back
                              </h2>
                              <p className="mt-2 text-sm text-gray-600">
                                    Sign in to your CheckMeds account
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
                                                      placeholder="Enter your password"
                                                />
                                          </div>
                                    </div>
                              </div>

                              <div>
                                    <button
                                          type="submit"
                                          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                                    >
                                          Sign In
                                    </button>
                              </div>

                              <div className="text-center">
                                    <p className="text-sm text-gray-600">
                                          Don't have an account?{' '}
                                          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                                                Sign up now
                                          </Link>
                                    </p>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Login;