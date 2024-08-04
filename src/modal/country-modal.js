import React from "react";

function CountryModal({ country, onClose, isDarkMode }) {
    if (!country) return null;

    const nativeName = country.name?.nativeName ? Object.values(country.name.nativeName)[0]?.common : country.name?.common;
    const callingCodes = country.idd?.root && country.idd?.suffixes ? `${country.idd.root}${country.idd.suffixes.join(", ")}` : "";

    return (
        <div className={`fixed inset-0 flex p-6 justify-center items-center ${isDarkMode ? 'bg-gray-900 bg-opacity-75' : 'bg-gray-700 bg-opacity-50'} overflow-y-auto`}>
            <div className={`relative p-6 rounded-lg shadow-lg w-full max-w-3xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} max-h-full overflow-y-auto font-sans`}>
                <button className="absolute top-0 right-0 m-4 text-gray-700 hover:text-red-500" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4">{country.name?.official || "N/A"}</h2>
                <div className="flex justify-center mb-4">
                    <img src={country.flags?.png} alt={`Flag of ${country.name?.official}`} className="w-65 h-auto rounded" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Names</h3>
                        <table className="w-full border border-gray-300">
                            <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">Common</td>
                                <td className="border border-gray-300 p-2">{country.name?.common || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Official</td>
                                <td className="border border-gray-300 p-2">{country.name?.official || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Common (Native)</td>
                                <td className="border border-gray-300 p-2">{nativeName || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Official (Native)</td>
                                <td className="border border-gray-300 p-2">{country.name?.nativeName && Object.values(country.name.nativeName)[0]?.official || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Alternative spellings</td>
                                <td className="border border-gray-300 p-2">{country.altSpellings?.join(", ") || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Translations</td>
                                <td className="border border-gray-300 p-2">{country.translations && Object.values(country.translations).map(t => t.common).join(", ") || "N/A"}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Codes</h3>
                        <table className="w-full border border-gray-300">
                            <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">ISO 3166-1 alpha-2</td>
                                <td className="border border-gray-300 p-2">{country.cca2 || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">ISO 3166-1 alpha-3</td>
                                <td className="border border-gray-300 p-2">{country.cca3 || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">ISO 3166-1 numeric</td>
                                <td className="border border-gray-300 p-2">{country.ccn3 || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">International calling code</td>
                                <td className="border border-gray-300 p-2">{callingCodes || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">ISO 4217 currency code</td>
                                <td className="border border-gray-300 p-2">{country.currencies && Object.keys(country.currencies).join(", ") || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Top level domain</td>
                                <td className="border border-gray-300 p-2">{country.tld?.join(", ") || "N/A"}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Languages</h3>
                        <table className="w-full border border-gray-300">
                            <tbody>
                            {country.languages ? Object.entries(country.languages).map(([key, value]) => (
                                <tr key={key}>
                                    <td className="border border-gray-300 p-2">{key}</td>
                                    <td className="border border-gray-300 p-2">{value}</td>
                                </tr>
                            )) : <tr><td className="border border-gray-300 p-2">N/A</td></tr>}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Geography</h3>
                        <table className="w-full border border-gray-300">
                            <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">Region</td>
                                <td className="border border-gray-300 p-2">{country.region || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Subregion</td>
                                <td className="border border-gray-300 p-2">{country.subregion || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Capital</td>
                                <td className="border border-gray-300 p-2">{country.capital?.join(", ") || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Demonym</td>
                                <td className="border border-gray-300 p-2">{country.demonyms && Object.values(country.demonyms).map(d => d.m).join(", ") || "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Lat/Lng</td>
                                <td className="border border-gray-300 p-2">{country.latlng ? `${country.latlng[0]}, ${country.latlng[1]}` : "N/A"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Area</td>
                                <td className="border border-gray-300 p-2">{country.area?.toLocaleString() || "N/A"} km²</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryModal;
