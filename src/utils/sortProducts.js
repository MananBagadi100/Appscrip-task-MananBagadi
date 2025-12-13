export function sortProducts(products, sortBy) {
    const sorted = [...products]; // never mutate original

    switch (sortBy) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);

        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);

        case 'popular':
            return sorted.sort(
                (a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0)
            );

        case 'newest':
            // Proxy for "newest" since API has no dates
            return sorted.sort(
                (a, b) => (b.rating?.count || 0) - (a.rating?.count || 0)
            );

        case 'recommended':
        default:
            return sorted; // API order
    }
}