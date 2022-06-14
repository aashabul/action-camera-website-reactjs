import React from "react";
import useAuth from "../hooks/useAuth";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const { products } = useAuth();
  const navigate = useNavigate();
  return (
    <Box sx={{ margin: "5rem 0" }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 3,
          fontSize: "1.7rem",
          fontWeight: "600",
          letterSpacing: "0.17rem",
        }}
      >
        <span style={{ color: "#480ca8" }}> Gopro</span> Versions
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Carousel itemsToShow={1} style={{ width: "50%" }}>
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                key={index}
                src={product.img}
              />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "#480ca8",
                  fontWeight: "600",
                  letterSpacing: "0.2rem",
                }}
              >
                {product.name}
              </Typography>
            </Box>
          ))}
        </Carousel>
        <Button
          onClick={() => navigate("/explore")}
          variant="contained"
          sx={{
            backgroundColor: "#480ca8",
            color: "white",
            margin: "4rem 0",
            padding: "0.5rem 1rem",
          }}
        >
          Go To SHOP
        </Button>
      </Box>
    </Box>
  );
};

export default Gallery;
