import React from "react";

function Footer({ isDarkMode }) {
    return (
        <footer className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} mt-8`}>
            <div className="container mx-auto text-center">
                <p className="text-sm mt-2">Made with ❤️ and a lot of coffee. ☕</p>
            </div>
        </footer>
    );
}

export default Footer;
