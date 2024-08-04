import React from "react";

function CountryCard({ isDarkMode, country, onCountryClick }) {
    const { name, cca2, cca3, idd, flags, altSpellings } = country;
    const nativeName = name?.nativeName ? Object.values(name.nativeName)[0]?.common : name?.common;
    const callingCodes = idd?.root && idd?.suffixes ? `${idd.root}${idd.suffixes.join(", ")}` : "";

    return (
        <div className={`p-4 rounded-lg shadow-lg font-mono flex flex-col ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
            <div>
                <img src={flags?.png} alt={`Flag of ${name?.official}`}
                     className="w-full h-32 object-cover mb-4 rounded cursor-pointer"
                     onClick={() => onCountryClick(country)}/>
                <h1 className="text-lg font-bold mb-4 cursor-pointer"
                    onClick={() => onCountryClick(country)}>{name?.official || "N/A"}</h1>
                <hr className="my-2 border-t border-gray-200"/>
                <p className="text-sm mb-2"><span className="font-semibold">2 Character Code:</span> {cca2 || "N/A"}</p>
                <hr className="my-2 border-t border-gray-100"/>

                <p className="text-sm mb-2"><span className="font-semibold">3 Character Code:</span> {cca3 || "N/A"}</p>
                <hr className="my-2 border-t border-gray-100"/>

                <p className="text-sm mb-2"><span className="font-semibold">Native Name:</span> {nativeName || "N/A"}
                </p>
                <hr className="my-2 border-t border-gray-100"/>

                <p className="text-sm mb-2 truncate"><span
                    className="font-semibold">Alternative Names:</span> {altSpellings?.join(", ") || "N/A"}</p>
                <hr className="my-2 border-t border-gray-100"/>

                <p className="text-sm mb-2 truncate"><span
                    className="font-semibold">Calling Codes:</span> {callingCodes || "N/A"}</p>
            </div>
            <button className={`mt-auto px-4 py-2 rounded-lg ${isDarkMode ? 'bg-orange-400 text-white' : 'bg-gray-600 text-white'} hover:bg-opacity-75 transition ease-in-out duration-150`} onClick={() => onCountryClick(country)}>
                View Detail
            </button>
        </div>
    );
}

export default CountryCard;
