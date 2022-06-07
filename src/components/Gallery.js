import React from "react";
import useAuth from "../hooks/useAuth";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
const Gallery = () => {
  const { products } = useAuth();
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Gopro Versions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flex: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products.slice(0, 5).map((product, index) => (
          <img key={index} src={product.img} />
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
