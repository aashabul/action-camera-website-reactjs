import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header />
      <Container sx={{ my: 7 }}>
        <Grid container spacing={{ md: 2, xs: 3, lg: 3 }}>
          {products.map((product, index) => (
            <Product key={index} product={product}></Product>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Explore;
