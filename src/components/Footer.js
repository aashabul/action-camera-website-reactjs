import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#8C6897",
        // color: "#1F1F1F",
        color: "#1F1F1F",
      }}
    >
      <Container sx={{ pt: 5, pb: 3 }}>
        <Grid container>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            sx={{ my: 2, display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                ABOUT
              </Typography>
              <Typography variant="subtitle1">Investors</Typography>
              <Typography variant="subtitle1">
                Supplier Responsibility
              </Typography>
              <Typography variant="subtitle1">Distributors</Typography>
              <Typography variant="subtitle1">Connect With GoPro</Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            sx={{ my: 2, display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                PROGRAMS
              </Typography>
              <Typography variant="subtitle1">GoPro Awards</Typography>
              <Typography variant="subtitle1">GoPro Labs</Typography>
              <Typography variant="subtitle1">Student Discount</Typography>
              <Typography variant="subtitle1">Affiliate Program</Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            sx={{ my: 2, display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                HELP
              </Typography>
              <Typography variant="subtitle1">Order Status</Typography>
              <Typography variant="subtitle1">Contact Us</Typography>
              <Typography variant="subtitle1">
                Shipping &amp; Delivery
              </Typography>
              <Typography variant="subtitle1">Privacy Policy</Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            sx={{ my: 2, display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                SOCIAL
              </Typography>
              <Typography variant="subtitle1">Instagram</Typography>
              <Typography variant="subtitle1">Twitter</Typography>
              <Typography variant="subtitle1">Facebook</Typography>
              <Typography variant="subtitle1">Pinterest</Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="subtitle2" sx={{ mt: 4, textAlign: "center" }}>
          &copy; 2022 Aashabul Imam All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
