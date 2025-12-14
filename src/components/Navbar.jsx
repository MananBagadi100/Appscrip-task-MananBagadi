import './../styles/NavbarStyles.css';
import profileIcon from '../assets/icons/profile.svg'
import brandIcon from './../assets/icons/Logo.svg'
import chevronDown from '../assets/icons/chevronDown.svg'
import menuIcon from '../assets/icons/hamburgerBtn.svg';
import searchIcon from '../assets/icons/search-icon.svg';
import heartIcon from '../assets/icons/heart.svg';
import bagIcon from '../assets/icons/shopping-bag.svg';

function Navbar() {
    return (
        <>
            <header className="navbar">
                <div className="navbar__left">
                    <img src={menuIcon} alt="Menu" className="navbar__mobile-only" />
                    <img src={brandIcon} alt="Brand" className="navbar__desktop-only" style={{width:36,height:36}}/>
                </div>

                <div className="navbar__center">
                    <span className="navbar__logo">LOGO</span>
                </div>

                <div className="navbar__right">
                    <img src={searchIcon} alt="Search" />
                    <img src={heartIcon} alt="Wishlist" />
                    <img src={bagIcon} alt="Cart" />

                    {/* Icons for Desktop-only */}
                    <img src={profileIcon} alt="Profile" className="navbar__desktop-only" />
                    <div className="navbar__desktop-only navbar__language" style={{fontSize:16,fontWeight:700}}>
                        ENG <img src={chevronDown} alt="Language" />
                    </div>
                </div>
            </header>

            {/* Navbar for Desktop only */}
            <nav className="navbar__desktop-links">
                <span>SHOP</span>
                <span>SKILLS</span>
                <span>STORIES</span>
                <span>ABOUT</span>
                <span>CONTACT US</span>
            </nav>
        </>
    );
}

export default Navbar;