import React from "react";
import useAuth from "../hooks/useAuth";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import "../Gallery.css";

const Gallery = () => {
  const { products } = useAuth();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "5rem 0",
        backgroundColor: "#f8f9fa",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
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
        id="carousel"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "60%",
          minWidth: "300px",
          // margin: "auto",
        }}
      >
        <Carousel
          itemsToShow={1}
          // style={{ width: "65%", minWidth: "800px", backgroundColor: "red" }}
          style={{ width: "100%" }}
        >
          {products.map((product, index) => (
            <Box
              id="carousel-inside"
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                border: "2px solid #e9ecef",
                minHeight: "50vh",
                backgroundColor: "white",
              }}
            >
              <Box
                id="img"
                sx={{
                  width: "40%",
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                <img
                  // style={{ width: "100%", height: "100%" }}
                  key={index}
                  src={product.img}
                  alt="camera-image"
                />
              </Box>
              <Box
                id="carousel-text"
                sx={{
                  backgroundColor: "#e9ecef",
                  width: "60%",
                  padding: "20px 0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // backgroundColor: "red",
                }}
              >
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
                <Box
                  id="carousel-info"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // gap: "10px",
                    justifyContent: "center",

                    padding: "10px 10px 10px 20px",
                    // flexWrap: "wrap",
                    minWidth: "200px",
                    margin: "20px auto",
                    // backgroundColor: "yellow",
                    fontSize: "18px",
                  }}
                >
                  <Box>
                    <span style={{ fontWeight: "bold" }}>Price: </span>
                    <span>{product.price} $</span>
                  </Box>
                  <hr style={{ border: "1px solid white", width: "100%" }} />
                  <Box>
                    <span style={{ fontWeight: "bold" }}>Battery: </span>
                    <span>{product.description.battery}</span>
                  </Box>
                  <hr style={{ border: "1px solid white", width: "100%" }} />
                  <Box>
                    <span style={{ fontWeight: "bold" }}>Camera: </span>
                    <span>{product.description.camera}</span>
                  </Box>
                  <hr style={{ border: "1px solid white", width: "100%" }} />
                  <Box>
                    <span style={{ fontWeight: "bold" }}>Video: </span>
                    <span>{product.description.video}</span>
                  </Box>
                  <hr style={{ border: "1px solid white", width: "100%" }} />
                  <Box>
                    <span style={{ fontWeight: "bold" }}>Weight: </span>
                    <span>{product.description.weight}</span>
                  </Box>
                </Box>
              </Box>
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
