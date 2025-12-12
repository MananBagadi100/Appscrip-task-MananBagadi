function ProductListingPage() {
    return (
        <main className="plp">
            {/* Hero Section */}
            <section className="plp__hero">
                <h1 className="plp__title">
                    Discover Our Products
                </h1>

                <p className="plp__subtitle">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere
                    rhoncus scelerisque. Dolor integer scelerisque nibh amet
                    mi ut elementum dolor.
                </p>
            </section>

            {/* Controls */}
            <section className="plp__controls">
                <button className="plp__filter-button">
                    Filter
                </button>

                <div className="plp__sort">
                    Recommended
                </div>
            </section>

            {/* Product Grid (placeholder) */}
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