import React from "react";
import "./aboutUsHome.css";

const AboutUsHome = () => {
  return (
    <div className="main-about-us">
      <h1 className="about-us-header">ABOUT US</h1>
      <div className="about-us-content" style={{ lineHeight: "2" }}>
        When we see a beautiful piece of clothing, on a subconscious level, we{" "}
        <br />
        realise that its beauty comes from being made with love. Colours
        thoughtfully put together, embroidery and mirror-work delicately sewn by
        artisans, buttons gleaming in contrast. These are details that transform
        a piece of fabric into a work of art. <br />
        <br />
      </div>
      <div className="icons">
        <button type="submit" className="btn-read-more">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default AboutUsHome;
