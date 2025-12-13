import { useState } from 'react';
import HeroOffer from './components/HeroOffer';
import ProductListingPage from './pages/ProductListingPage';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

function App() {


    return (
        <>
            <main>
                <HeroOffer />
                <Navbar />
                <ProductListingPage />
                <Footer />
            </main>
        </>
    );
}

export default App;