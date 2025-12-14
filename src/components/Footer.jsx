import { useState } from "react";
import "./../styles/FooterStyles.css";
import ChevronDown from "./../assets/icons/chevronDown.svg";
import ChevronWhiteDown from './../assets/icons/chevronWhiteDown.svg'
import StarBulletPoint from './../assets/icons/StarBulletPoint.svg'
import usaFlag from './../assets/icons/USA_Flag.svg'
import InstaLogo from './../assets/icons/InstaLogo.svg'
import LinkdinLogo from './../assets/icons/LinkdinLogo.svg'
import GooglePay from './../assets/icons/GooglePay.svg'
import MasterCard from './../assets/icons/Mastercard.svg'
import Paypal from './../assets/icons/Paypal.svg'
import Amex from './../assets/icons/AmexPay.svg'
import ApplePay from './../assets/icons/ApplePay.svg'
import OPay from './../assets/icons/OPay.svg'


const footerSections = [
  {
    title: "mettä muse",
    items: [
      "About Us",
      "Stories",
      "Artisans",
      "Boutiques",
      "Contact Us",
      "EU Compliances Docs"
    ]
  },
  {
    title: "QUICK LINKS",
    items: [
      "Orders & Shipping",
      "Join/Login as a Seller",
      "Payment & Pricing",
      "Return & Refunds",
      "FAQs",
      "Privacy Policy",
      "Terms & Conditions"
    ]
  },
  {
    title: "FOLLOW US",
        items: [
          {
            label: "Instagram",
            icon: InstaLogo,
            url: "https://www.instagram.com"
          },
          {
            label: "LinkedIn",
            icon: LinkdinLogo,
            url: "https://www.linkedin.com"
          }
        ]
  }
];

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection(prev => (prev === title ? null : title));
  };

  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer-section">
        <h3 >BE THE FIRST TO KNOW</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <div className="newsletter">
          <input type="email" placeholder="Enter your e-mail..." />
          <button className="newsletter-subscribe-btn">SUBSCRIBE</button>
        </div>
      </div>

      <hr className="footer-line-seperator" />

      {/* Call us */}
      <div className="footer-section-call-us">
        <h3>CALL US</h3>
        <div className="footer-section-contact-details">
            <p>+44 221 133 5360</p>
            <img src={StarBulletPoint} alt="*" className="star-bullet-point"/>
            <p>customercare@mettamuse.com</p>
        </div>
      </div>

      <hr className="footer-line-seperator" />

      {/* Currency */}
      <div className="footer-section-currency">
        <h3>CURRENCY</h3>
        <div className="footer-section-currency-details">
          <img src={usaFlag} alt="USA" />
          <img src={StarBulletPoint} alt="*" className="star-bullet-point"/>
          <p>USD</p>
        </div>
      </div>

      <hr className="footer-line-seperator-enhanced" />

      {/* Accordion Sections */}
      {footerSections.map(section => (
        <div key={section.title} className="accordion">
          <button
            className="accordion-header"
            onClick={() => toggleSection(section.title)}
          >
            {section.title}
            <img
              src={ChevronWhiteDown}
              alt="Chevron Down"
              className={`chevron ${openSection === section.title ? "open" : ""}`}
            />
          </button>

          {openSection === section.title && (
            section.title === "FOLLOW US" ? (
              <div className="social-icons">
                {section.items.map(item => (
                  <a
                    key={item.label}
                    href={item.url}
                    aria-label={item.label}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.icon} alt={item.label} />
                  </a>
                ))}
              </div>
            ) : (
              <ul className="accordion-content">
                {section.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          )}
          <hr className="footer-line-seperator" />
        </div>
      ))}

      {/* Payments */}
      <div className="footer-section-payments">
        <h3>mettä muse ACCEPTS</h3>
        <div className="payments">
          <img src={GooglePay} alt="Google Pay" />
          <img src={MasterCard} alt="MasterCard" />
          <img src={Paypal} alt="Paypal" />
          <img src={Amex} alt="Amex" />
          <img src={ApplePay} alt="Apple Pay" />
          <img src={OPay} alt="OPay" />
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;