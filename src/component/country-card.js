import React from "react";

function CountryCard({ isDarkMode, name, cca2, cca3, idd, flags, altSpellings }) {
    const nativeName = name?.nativeName ? Object.values(name.nativeName)[0]?.common : name?.common;
    const callingCodes = idd?.root && idd?.suffixes ? `${idd.root}${idd.suffixes.join(", ")}` : "";

    return (
        <div className={`p-4 rounded-lg shadow-lg font-mono flex flex-col ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                <img src={flags?.png} alt={`Flag of ${name?.official}`} className="w-full h-32 object-cover mb-4 rounded" />
                <h1 className="text-lg font-bold mb-4">{name?.official}</h1>
                <p className="text-sm mb-2">2 Character Code: {cca2}</p>
                <p className="text-sm mb-2">3 Character Code: {cca3}</p>
                <p className="text-sm mb-2">Native Name: {nativeName}</p>
                <p className="text-sm mb-2 line-clamp-3">Alternative Names: {altSpellings?.join(", ")}</p>
                <p className="text-sm mb-2 line-clamp-3">Calling Codes: {callingCodes}</p>
            </div>
            <button className={`mt-auto px-4 py-2 rounded-lg ${isDarkMode ? 'bg-orange-500 text-white' : 'bg-gray-700 text-white'} hover:bg-opacity-75 transition ease-in-out duration-150`}>
                View Detail
            </button>
        </div>
    );
}

export default CountryCard;
