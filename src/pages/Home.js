import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Slider from "../components/Slider";
import "../Home.css";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Banner />
      <Gallery />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
