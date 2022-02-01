import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import Roboto from "@fontsource/roboto/500.css";
import { Box } from "@mui/system";

const Banner = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#C29CCD",
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            // sx={{
            //   display: "flex",
            //   alignItems: "center",
            // }}
          >
            <Grid item sx={{ lineHeight: "2rem", my: 3 }} md={6} xs={12}>
              <Typography variant="h2">HERO 10</Typography>
              {/* <Typography variant="subtitle1">
              Faster. Smoother. Easier.
            </Typography> */}
              <Typography variant="h5" sx={{ color: "#525252" }}>
                Sweet Savings. Limited time only.
              </Typography>
              <Box sx={{ fontFamily: "Roboto", fontSize: "18px" }}>
                <TypewriterComponent
                  options={{ loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Capture every valuable moments of your life."
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString(
                        "Get the experience of the upcoming features."
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Be a HERO.")
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </Box>
            </Grid>
            <Grid item md={6} xs={12} sx={{ my: 3 }}>
              <img
                width="100%"
                height="100%"
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
