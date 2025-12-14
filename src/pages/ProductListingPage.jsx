import { useState } from 'react';
import ChevronDown from './../assets/icons/chevronDown.svg'
import { useEffect} from 'react';
import { fetchAllProducts } from '../data/productsApi';
import { sortProducts } from './../utils/sortProducts';
import './../styles/ProductListingStyles.css'
import FilterContent from '../components/FilterContent';
import ProductGrid from '../components/ProductGrid';
import SortDropdown from '../components/SortDropdown';
import ChevronLeft from './../assets/icons/chevronLeft.svg'

function ProductListingPage() {
    const [sortBy, setSortBy] = useState('recommended');    //state for selected dropdown option
    const [isFilterOpen, setIsFilterOpen] = useState(false);    //state for filter panel opening and closing on mobile
    const [isDesktopFilterVisible , setIsDesktopFilterVisible] = useState(true)
    const [selectedCategories, setSelectedCategories] = useState([]);    //state for the selected filter options
    const [products, setProducts] = useState([]);   //state for storing all the products we get from the api
    const [loading, setLoading] = useState(true);   //loading state for the products
    const sortOptions = [       //dropdown options
        { label: 'Recommended', value: 'recommended' },
        { label: 'Newest First', value: 'newest' },
        { label: 'Popular', value: 'popular' },
        { label: 'Price: High to Low', value: 'price-desc' },
        { label: 'Price: Low to High', value: 'price-asc' }
    ];

    //Filtering logic for applying filters
    const categoryMap = {
        men: "men's clothing",
        women: "women's clothing",
        kids: "__NO_MATCH__"
    };
    //Filtering logic 
    const filteredProducts = products.filter(product => {
    // No filters selected to show all
        if (selectedCategories.length === 0) return true;

        // Map selected filters to API categories
        const mappedCategories = selectedCategories
            .map(cat => categoryMap[cat])
            .filter(Boolean);

        return mappedCategories.includes(product.category);
    });

    //Sorting Function
    const sortedProducts = sortProducts(filteredProducts, sortBy);


    //Calling the products api once on every mount
    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await fetchAllProducts();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products', error);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);
    return (
        <main className="product-listing-full-container">
            <div className="product-breadcrums">
                <div className="product-breadcrums-home">Home</div>
                <div>|</div>
                <div className="product-breadcrums-shop">Shop</div>
            </div>
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="product-listing-page-title">
                    Discover Our Products
                </h1>

                <p className="product-listing-page-subtitle">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
                    scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </section>

            {/* Controls Section */}
            <section className="product-controls-wrapper">
                <div className="product-controls">
                    { /* Dummy Product Text for Desktop only  */}
                    <div className="product-filter-dummy-numbers">3425 ITEMS</div>
                    { /* Filter Toggle for Desktop only  */}
                    <div className="desktop-filter-toggle">
                        <img src={ChevronLeft} alt="Chevron Left" className="desktop-filter-chevron-toggle-btn" />
                        <span
                            className="desktop-filter-open-toggle-btn"
                            onClick={() => setIsDesktopFilterVisible(prev => !prev)}
                        >
                            {isDesktopFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
                        </span>
                    </div>
                    { /* Button shown on Mobile only */}
                    <div
                        className="product-filter-button"
                        onClick={() => setIsFilterOpen(true)}
                    >
                        Filter
                    </div>

                    <div className="product-controls-seperator">|</div>
                                                        
                    <SortDropdown
                        sortBy={sortBy}
                        onChange={setSortBy}
                    />
                </div>
            </section>
            {isFilterOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="filter-overlay"
                        onClick={() => setIsFilterOpen(false)}
                    />

                    {/* Drawer for the filters on Mobile only */}
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

                        <FilterContent
                            selectedCategories={selectedCategories}
                            onCategoryChange={setSelectedCategories}
                        />
                    </aside>
                </>
            )}

            {/* Product Grid with loading states for Mobile only */}
            <section className="mobile-plp-layout">
                {loading ? (
                    <div className="no-products">Loading products...</div>
                ) : filteredProducts.length === 0 ? (
                    <div className="no-products">No products found</div>
                ) : (
                    <ProductGrid products={sortedProducts} />
                )}
            </section>

            <section className="desktop-plp-layout">
                {isDesktopFilterVisible && (
                    <aside className="desktop-filter-sidebar">
                        <FilterContent
                            selectedCategories={selectedCategories}
                            onCategoryChange={setSelectedCategories}
                        />
                    </aside>
                )}

                {/* Product Grid with loading states for Desktop only */}
                <div className="desktop-product-grid">
                    {loading ? (
                        <div className="no-products">Loading products...</div>
                    ) : filteredProducts.length === 0 ? (
                        <div className="no-products">No products found</div>
                    ) : (
                        <ProductGrid products={sortedProducts} />
                    )}
                </div>
            </section>
        </main>
    );
}

export default ProductListingPage;