import React, { useState, useEffect } from "react";
import CountryCard from "../component/country-card";

const ITEMS_PER_PAGE = 25;

function CountryListDisplay({ countries, searchTerm, sortOrder, isDarkMode }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        let filtered = countries.filter(country =>
            country.name?.official.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (sortOrder === "asc") {
            filtered.sort((a, b) => a.name?.official.localeCompare(b.name?.official));
        } else if (sortOrder === "desc") {
            filtered.sort((b, a) => a.name?.official.localeCompare(b.name?.official));
        }

        setFilteredCountries(filtered);
    }, [countries, searchTerm, sortOrder]);

    const paginatedCountries = filteredCountries.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            {paginatedCountries.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {paginatedCountries.map((country, index) => (
                            <CountryCard key={index} {...country} isDarkMode={isDarkMode} />
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center space-x-2">
                        {Array.from({ length: Math.ceil(filteredCountries.length / ITEMS_PER_PAGE) }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 rounded-lg focus:outline-none ${
                                    currentPage === index + 1
                                        ? 'bg-orange-500 text-white'
                                        : isDarkMode
                                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center p-4">
                    <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        No countries match your search criteria.
                    </p>
                </div>
            )}
        </div>
    );
}

export default CountryListDisplay;
