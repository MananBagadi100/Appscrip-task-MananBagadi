import { useState } from "react";
import "./../styles/FooterStyles.css";
import ChevronDown from "./../assets/icons/chevronDown.svg";

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
    title: "Quick Links",
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
    title: "Follow Us",
    items: ["Instagram", "LinkedIn"]
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
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <div className="newsletter">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="divider" />

      {/* Call us */}
      <div className="footer-section">
        <h3>CALL US</h3>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
      </div>

      <div className="divider" />

      {/* Currency */}
      <div className="footer-section">
        <h3>CURRENCY</h3>
        <p>🇺🇸 USD</p>
      </div>

      <div className="divider" />

      {/* Accordion Sections */}
      {footerSections.map(section => (
        <div key={section.title} className="accordion">
          <button
            className="accordion-header"
            onClick={() => toggleSection(section.title)}
          >
            {section.title}
            <img
              src={ChevronDown}
              alt=""
              className={`chevron ${openSection === section.title ? "open" : ""}`}
            />
          </button>

          {openSection === section.title && (
            <ul className="accordion-content">
              {section.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="divider" />

      {/* Payments */}
      <div className="footer-section">
        <h3>mettä muse ACCEPTS</h3>
        <div className="payments">
          <span>GPay</span>
          <span>Mastercard</span>
          <span>Paypal</span>
          <span>Amex</span>
          <span>Apple Pay</span>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;