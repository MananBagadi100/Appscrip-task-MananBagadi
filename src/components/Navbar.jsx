import './../styles/NavbarStyles.css';

import menuIcon from '../assets/icons/hamburgerBtn.svg';
import searchIcon from '../assets/icons/search-icon.svg';
import heartIcon from '../assets/icons/heart.svg';
import bagIcon from '../assets/icons/shopping-bag.svg';

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__left">
                <img src={menuIcon} alt="Menu" />
            </div>

            <div className="navbar__center">
                <span className="navbar__logo">LOGO</span>
            </div>

            <div className="navbar__right">
                <img src={searchIcon} alt="Search" />
                <img src={heartIcon} alt="Wishlist" />
                <img src={bagIcon} alt="Cart" />
            </div>
        </header>
    );
}

export default Navbar;