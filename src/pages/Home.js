import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reviews from "../components/Reviews";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Slider />
      {/* <Reviews /> */}
      <Footer />
    </>
  );
};

export default Home;
