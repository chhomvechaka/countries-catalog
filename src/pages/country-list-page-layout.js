import React, { useState, useEffect } from "react";
import Search from "../component/search";
import CountryListDisplay from "../component/country-list-display";
import CountryModal from "../modal/country-modal";

function CountryListDisplayLayout() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [selectedCountry, setSelectedCountry] = useState(null);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const fetchCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleSort = (order) => {
        setSortOrder(order);
    };

    const handleCountryClick = (country) => {
        if (country && country.name && country.name.official) {
            setSelectedCountry(country);
        } else {
            console.error("Country name or official name is undefined", country);
        }
    };

    const handleCloseModal = () => {
        setSelectedCountry(null);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'} flex flex-col`}>
            <header className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-orange-500 text-white'} p-4 flex justify-between items-center`}>
                <h1 className="text-3xl font-bold">Countries Catalog</h1>
                <button
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onClick={toggleTheme}
                >
                    {isDarkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    )}
                </button>
            </header>
            <main className="flex flex-1 flex-col items-center">
                <section className="w-full p-4">
                    <div className="mb-4 flex justify-center">
                        <Search onSearch={handleSearch} onSort={handleSort} isDarkMode={isDarkMode} />
                    </div>
                    <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <CountryListDisplay
                            countries={countries}
                            searchTerm={searchTerm}
                            sortOrder={sortOrder}
                            isDarkMode={isDarkMode}
                            onCountryClick={handleCountryClick}
                        />
                    </div>
                </section>
            </main>
            {selectedCountry && (
                <CountryModal
                    country={selectedCountry}
                    onClose={handleCloseModal}
                    isDarkMode={isDarkMode}
                />
            )}
        </div>
    );
}

export default CountryListDisplayLayout;
