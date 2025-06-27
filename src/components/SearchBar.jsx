import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
      const [query, setQuery] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault();
            onSearch(query);
      };

      const handleChange = (e) => {
            const value = e.target.value;
            setQuery(value);
            onSearch(value);
      };

      return (
            <form onSubmit={handleSubmit} className="relative">
                  <div className="relative">
                        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
                        <input
                              type="text"
                              value={query}
                              onChange={handleChange}
                              placeholder="Search for medicines, symptoms, or conditions..."
                              className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-full border-2 border-transparent bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100 text-base sm:text-lg shadow-lg"
                        />
                  </div>
            </form>
      );
};

export default SearchBar;