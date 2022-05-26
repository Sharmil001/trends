import React from "react";
import "./footer.css";
import companyLogo from "../../assets/images/companyLogo.jpeg";
import { Image } from "primereact/image";

const Footer = () => {
  const subscribChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div
      className="page-full page-width"
      style={{ borderTop: "1px solid #e6eaea" }}
    >
      <div className="footer-main">
        <div className="footer-data" style={{ width: "300px" }}>
          <div className="item-data">Search</div>
          <div className="item-data">Privacy Policy</div>
          <div className="item-data">Return &amp; Exchange</div>
          <div className="item-data">Shipping Policy</div>
          <div className="item-data">Terms &amp; Conditions</div>
        </div>
        <div className="footer-data">
          <div className="footer__newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              name="contact[email]"
              id="Email-1494292487693"
              className="footer__newsletter-input"
              autoCorrect="off"
              autoCapitalize="off"
              onChange={(e) => {
                subscribChange(e);
              }}
            />
            <button
              type="submit"
              className="footer__newsletter-btn"
              name="commit"
              aria-label="Subscribe"
            >
              <span className="footer__newsletter-btn-label">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
      <div className="created-by">
        <p>
          Copyright &copy; 2022 Powered by{" "}
          <span style={{ color: "#609BEC", cursor: "pointer" }}>
            SI Solutions
          </span>
          .
        </p>
        <Image
          src={companyLogo}
          alt="companyLogo"
          width={50}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Footer;
