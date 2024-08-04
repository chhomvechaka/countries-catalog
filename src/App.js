import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import CountryListDisplayLayout from "./pages/country-list-page-layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/page" element={<CountryListDisplayLayout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
