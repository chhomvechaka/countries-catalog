import React, { useState } from "react";
import CountryCard from "./country-card";

const ITEMS_PER_PAGE = 25;

function CountryListDisplay({ countries, searchTerm, sortOrder, isDarkMode, onCountryClick }) {
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCountries = countries
        .filter(country =>
            country.name?.official.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === "asc") {
                return a.name.official.localeCompare(b.name.official);
            } else {
                return b.name.official.localeCompare(a.name.official);
            }
        });

    const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
    const paginatedCountries = filteredCountries.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    if (paginatedCountries.length === 0) {
        return <p className="text-center">No countries found.</p>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {paginatedCountries.map((country) => (
                    <CountryCard
                        key={country.cca3}
                        country={country}
                        isDarkMode={isDarkMode}
                        onCountryClick={onCountryClick}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-1 rounded-lg ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CountryListDisplay;
