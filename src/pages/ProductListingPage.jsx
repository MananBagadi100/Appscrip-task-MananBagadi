import { useState } from 'react';
import ChevronDown from './../assets/icons/chevronDown.svg'

import './../styles/ProductListingStyles.css'
import FilterContent from '../components/FilterContent';
function ProductListingPage() {
    const [sortOpen, setSortOpen] = useState(false);    //state for the 
    const [sortBy, setSortBy] = useState('recommended');    //state for selected dropdown option
    const [isFilterOpen, setIsFilterOpen] = useState(false);    //state for filter panel opening and closing
    const sortOptions = [
        { label: 'Recommended', value: 'recommended' },
        { label: 'Newest First', value: 'newest' },
        { label: 'Popular', value: 'popular' },
        { label: 'Price: High to Low', value: 'price-desc' },
        { label: 'Price: Low to High', value: 'price-asc' }
    ];
    return (
        <main className="plp">
            <div className="product-breadcrums">
                <div className="product-breadcrums-home">Home</div>
                <div>|</div>
                <div className="product-breadcrums-shop">Shop</div>
            </div>
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="plp__title">
                    Discover Our Products
                </h1>

                <p className="plp__subtitle">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
                    scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </section>

            {/* Controls */}
            <section className="product-controls">
            <div
                className="product-filter-button"
                onClick={() => setIsFilterOpen(true)}
            >
                Filter
            </div>

                <div className="product-controls-seperator">|</div>
                                                    
                <div className="sort-wrapper">
                    <button
                        className="product-sort-dropdown"
                        onClick={() => setSortOpen(prev => !prev)}
                    >
                        {sortOptions.find(option => option.value === sortBy)?.label}
                        <img
                            src={ChevronDown}
                            alt="Toggle sort options"
                            className={`arrow ${sortOpen ? 'open' : ''}`}
                        />
                    </button>

                    {sortOpen && (
                        <div className="sort-dropdown">
                            {sortOptions.map(option => (
                                <div
                                    key={option.value}
                                    className={`sort-option ${sortBy === option.value ? 'active' : ''}`}
                                    onClick={() => {
                                        setSortBy(option.value);
                                        setSortOpen(false);
                                    }}
                                >
                                    {sortBy === option.value && '✓ '}
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            {isFilterOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="filter-overlay"
                        onClick={() => setIsFilterOpen(false)}
                    />

                    {/* Drawer */}
                    <aside className="filter-drawer">
                        <div className="filter-drawer-header">
                            <span>Filters</span>
                            <button
                                className="filter-close-btn"
                                onClick={() => setIsFilterOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <FilterContent />
                    </aside>
                </>
            )}

            {/* Product Grid */}
            <section className="plp__grid">
                {Array.from({ length: 4 }).map((_, index) => (
                    <article className="product-card" key={index}>
                        <div className="product-card__image" />
                        <h3 className="product-card__title">
                            Product Name
                        </h3>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default ProductListingPage;