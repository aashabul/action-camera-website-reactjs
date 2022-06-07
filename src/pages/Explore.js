import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import Loading from "../components/IsLoading";
import useAuth from "../hooks/useAuth";

const Explore = () => {
  const { user, products, loading } = useAuth();

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
