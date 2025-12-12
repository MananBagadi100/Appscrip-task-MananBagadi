import { useState } from 'react';
import ProductListingPage from './pages/ProductListingPage';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <main>
                <ProductListingPage />
            </main>
        </>
    );
}

export default App;