// src/App.js or src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import CountryListDisplayLayout from "./pages/country-list-page-layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CountryListDisplayLayout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
