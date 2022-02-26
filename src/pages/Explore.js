import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import HashLoader from "react-spinners/HashLoader";
import { Box } from "@mui/system";

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header />
      <Container sx={{ my: 7 }}>
        {loading ? (
          <Box
            sx={{
              height: "30vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              pt: "20%",
            }}
          >
            <HashLoader color="#8C6897" loading={loading} size={100} />
          </Box>
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
