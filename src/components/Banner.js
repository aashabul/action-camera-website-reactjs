import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import Roboto from "@fontsource/roboto/500.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import "../Banner.css";

const Banner = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#C29CCD",
          minHeight: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container>
            <Grid
              item
              sx={{ lineHeight: "2rem", my: 3 }}
              md={6}
              sm={12}
              xs={12}
            >
              <Typography
                id="banner-header"
                variant="h1"
                sx={{
                  textShadow: "4px 5px 8px #666666",
                  mb: 2,
                  fontSize: "5rem",
                }}
              >
                <span style={{ color: "#292929" }}>HERO</span>{" "}
                <span style={{ color: "#012e65" }}>10</span>
              </Typography>

              <Typography
                id="banner-text"
                variant="h5"
                sx={{
                  color: "#333533",
                  fontSize: "1.8rem",
                }}
              >
                Sweet Savings. Limited time only.
              </Typography>
              <Box
                id="typewriter"
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "1.8rem",
                  color: "#1b4332",
                  marginTop: "0.7rem",
                }}
              >
                <TypewriterComponent
                  options={{ loop: true, delay: 45 }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Capture every valuable moments.")
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString("Experience the upcoming features.")
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString("Be the HERO of your own world.")
                      .pauseFor(3000)
                      .start();
                  }}
                />
              </Box>

              <Box sx={{ mt: 2 }} id="banner-container">
                <Link to="/explore" style={{ textDecoration: "none" }}>
                  <Button
                    id="banner-button"
                    variant="contained"
                    sx={{
                      background: "#8C6897",
                      boxShadow: "5px 10px 8px #525252",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      letterSpacing: 2.5,
                      marginTop: "1.5rem",
                      paddingTop: "0.8rem",
                      paddingBottom: "0.8rem",
                    }}
                  >
                    Explore shop
                  </Button>
                </Link>
              </Box>
            </Grid>

            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              // sx={{ my: 3 }}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                id="banner-img"
                width="100%"
                // height="100%"
                src="https://i.ibb.co/TBVyGNg/hp-hero6-product-desktop.png"
                alt="gopro"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Banner;
