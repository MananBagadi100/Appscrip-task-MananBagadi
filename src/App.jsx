import { useState } from 'react';
import HeroOffer from './components/HeroOffer';
import ProductListingPage from './pages/ProductListingPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {


    return (
        <>
            <main>
                <HeroOffer />
                <Navbar />
                <ProductListingPage />
            </main>
        </>
    );
}

export default App;