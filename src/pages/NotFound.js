import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import notFound from "../images/notFound.svg";

const NotFound = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ mb: 5, display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">Page Not Found - Error 404 </Typography>
      </Box>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "center",
          width: "45%",
        }}
      >
        <img width="100%" src={notFound} alt="page-not-found" />
      </Box>
      <Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained">Back to Home</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
