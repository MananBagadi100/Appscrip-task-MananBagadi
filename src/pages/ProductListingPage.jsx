import { useState } from 'react';
import ChevronDown from './../assets/icons/chevronDown.svg'
import { useEffect} from 'react';
import { fetchAllProducts } from '../data/productsApi';
import './../styles/ProductListingStyles.css'
import FilterContent from '../components/FilterContent';
import ProductGrid from '../components/ProductGrid';

function ProductListingPage() {
    const [sortOpen, setSortOpen] = useState(false);    //state for the 
    const [sortBy, setSortBy] = useState('recommended');    //state for selected dropdown option
    const [isFilterOpen, setIsFilterOpen] = useState(false);    //state for filter panel opening and closing
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

    //Calling the products api on every mount
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

                    {/* Drawer for the filters*/}
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

            {/* Product Grid or Empty State for printing filtered products or all products*/}
            {loading ? (
                <div className="no-products">Loading products...</div>
            ) : filteredProducts.length === 0 ? (
                <div className="no-products">No products found</div>
            ) : (
                <ProductGrid products={filteredProducts} />
            )}
        </main>
    );
}

export default ProductListingPage;