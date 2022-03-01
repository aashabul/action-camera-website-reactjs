import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import HashLoader from "react-spinners/HashLoader";
import { Box } from "@mui/system";
import Loading from "../components/IsLoading";

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <Header />
      <Container sx={{ my: 7 }}>
        {loading ? (
          <Loading />
        ) : (
          <Grid container spacing={{ md: 2, xs: 3, lg: 3 }}>
            {products.map((product, index) => (
              <Product key={index} product={product}></Product>
            ))}
          </Grid>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Explore;
