import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import Loading from "../components/IsLoading";
// import Fab from "@mui/material/Fab";
import useAuth from "../hooks/useAuth";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Link } from "react-router-dom";
// import { Box } from "@mui/system";

const Explore = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
    fetch("https://glacial-earth-66001.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Header />
      <Container sx={{ my: 7 }}>
        <Typography
          variant="h5"
          sx={{ mb: 7, color: "#4E4351", textAlign: "center", fontWeight: 600 }}
        >
          Choose The Best Cameras
        </Typography>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Grid container spacing={{ md: 2, xs: 3, lg: 6 }}>
              {products.map((product, index) => (
                <Product key={index} product={product}></Product>
              ))}
            </Grid>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Explore;
