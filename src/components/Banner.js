import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import Roboto from "@fontsource/roboto/500.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#C29CCD",
          minHeight: "75vh",
          display: "flex",
          // justifyContent: "center",
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
                variant="h2"
                sx={{
                  textShadow: "4px 5px 8px #666666",
                  WebkitTextFillColor: "#292929",
                  mb: 2,
                }}
              >
                HERO 10
              </Typography>

              <Typography variant="h5" sx={{ color: "#525252" }}>
                Sweet Savings. Limited time only.
              </Typography>
              <Box
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "1.4rem",
                  color: "#474747",
                }}
              >
                <TypewriterComponent
                  options={{ loop: true, delay: 45 }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Capture every valuable moments of your life."
                      )
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString(
                        "Get the experience of the upcoming features."
                      )
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString("Be the HERO of your own world.")
                      .pauseFor(3000)
                      .start();
                  }}
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Link to="/explore" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#8C6897",
                      boxShadow: "5px 10px 8px #525252",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      letterSpacing: 2,
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
