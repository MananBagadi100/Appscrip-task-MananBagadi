import { Link } from 'react-router-dom';
import HeartOutline from './../assets/icons/heart.svg'
import HeartFilled from './../assets/icons/heartFilled.svg'
import './../styles/ProductGridStyles.css'
import { useState } from 'react';
function ProductGrid({ products }) {
    const [wishlist, setWishlist] = useState({});   //state for tracking wishlist 

    const toggleWishlist = (id) => {
    setWishlist(prev => ({
        ...prev,
        [id]: !prev[id]
    }));
    };
    return (
        <section className="product-grid-wrapper">
            <div className="product-grid">
                {products.map(product => (
                    <article className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} className='product-card-image'/>
                        
                        <div className="product-info-area">
                            <div className="product-card-meta">
                                <span className="product-card-name">
                                    {product.title}
                                </span>

                                <span className="product-card-signin-options">
                                    <Link className='product-card-signin'>Sign in</Link> or Create an account to see pricing
                                </span>
                            </div>

                            <button
                                className="wishlist-btn"
                                onClick={() => toggleWishlist(product.id)}
                                >
                                <img
                                    src={wishlist[product.id] ? HeartFilled : HeartOutline}
                                    alt="Wishlist"
                                />
                                </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ProductGrid;