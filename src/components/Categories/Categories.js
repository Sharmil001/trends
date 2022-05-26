import React from "react";
import "./categories.css";
import { Image } from "primereact/image";

import demoWishlist from "../../assets/images/demo-wishlist.webp";
import demo2 from "../../assets/images/wishlist-demo-1.webp";
import category from "../../assets/images/category.webp";

const Categories = () => {
  return (
    <div className="main-categories">
      <h1 className="categories-header">SHOP BY CATEGORY</h1>
      <div className="categories-data">
        <div class="container">
          <img src={demo2} alt="Snow" style={{ width: "100%" }} />
          <button class="btn-suit-sets">SUIT SETS</button>
        </div>
        <div class="container">
          <img src={category} alt="Snow" style={{ width: "100%" }} />
          <button class="btn-suit-sets">KURTAS</button>
        </div>
        <div class="container">
          <img src={demoWishlist} alt="Snow" style={{ width: "100%" }} />
          <button class="btn-suit-sets">TOPS</button>
        </div>
        <div class="container">
          <img src={demo2} alt="Snow" style={{ width: "100%" }} />
          <button class="btn-suit-sets">DRESSES</button>
        </div>
        <div class="container">
          <img src={demo2} alt="Snow" style={{ width: "100%" }} />
          <button class="btn-suit-sets">PENTS</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
