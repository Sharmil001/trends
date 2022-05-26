import React from "react";
import AboutUsHome from "../../components/AboutUsHome/AboutUsHome";
import Categories from "../../components/Categories/Categories";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./home.css";

const Home = () => {
  return (
    <div className="home-main">
      <ImageSlider />
      <AboutUsHome />
      <Categories />
    </div>
  );
};

export default Home;
