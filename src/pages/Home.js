import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Gallery />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
