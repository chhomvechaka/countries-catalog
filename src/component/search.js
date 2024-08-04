import React, { useState } from "react";

function Search({ onSearch, onSort, isDarkMode }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSort = (order) => {
        onSort(order);
        setIsDropdownOpen(false);
    };

    const clearSearch = () => {
        setSearchTerm("");
        onSearch("");
    };

    return (
        <div className="flex justify-center items-center p-4">
            <input
                className={`w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-1 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-orange-500' : 'bg-white border-gray-300 text-black focus:ring-blue-500'}`}
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    onSearch(e.target.value);
                }}
            />
            <button
                className="bg-orange-500 text-white px-4 py-2 ml-6 rounded-lg shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onClick={clearSearch}
            >
                Clear
            </button>
            <div className="relative ml-6">
                <button
                    className={`px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 ${isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-500 focus:ring-gray-500' : 'bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-500'}`}
                    onClick={toggleDropdown}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                        />
                    </svg>
                </button>
                {isDropdownOpen && (
                    <div className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 border rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`}>
                        <button
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => handleSort('asc')}
                        >
                            Asc
                        </button>
                        <button
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => handleSort('desc')}
                        >
                            Desc
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
