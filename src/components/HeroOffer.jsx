import PhoneNavigation from './../assets/icons/TopbarMobile.svg'
import HeroOfferContentLogo from './../assets/icons/HeroOfferContentLogo.svg'
import './../styles/HeroOfferStyles.css'

function HeroOffer() {
  return (
    <>
      {/* MOBILE HERO (already working) */}
      <section className="Phone-system-navigation-bar-section">
        <img src={PhoneNavigation} alt="Phone Navigation" />
        <div>Lorem ipsum dolor</div>
      </section>

      {/* DESKTOP HERO */}
      <section className="Desktop-system-navigation-bar">
        <div className="desktop-hero-item">
          <img src={HeroOfferContentLogo} alt='OfferLogo' className="desktop-hero-icon"/>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="desktop-hero-item">
          <img src={HeroOfferContentLogo} alt='OfferLogo' className="desktop-hero-icon"/>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="desktop-hero-item">
          <img src={HeroOfferContentLogo} alt='OfferLogo' className="desktop-hero-icon"/>
          <span>Lorem ipsum dolor</span>
        </div>
      </section>
    </>
  )
}

export default HeroOffer