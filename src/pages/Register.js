import React from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  const {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleFacebookSignin,
    handleEmail,
    handlePass,
    handleEmailPassSignIn,
    success,
    error,
  } = useAuth();
  return (
    <>
      <Header></Header>
      <Container
        sx={{
          textAlign: "center",
          height: "90vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={7}>
            <form onSubmit={handleEmailPassSignIn}>
              <Typography variant="h5" sx={{ fontWeight: "600", mb: 3 }}>
                Please Register
              </Typography>
              <TextField
                sx={{ width: "60%", m: 1 }}
                required
                id="outlined-required2"
                label="Email"
                name="email"
                onBlur={handleEmail}
              />
              <TextField
                sx={{ width: "60%", m: 1 }}
                required
                id="outlined-required3"
                label="Password"
                name="password"
                onBlur={handlePass}
              />

              {error && (
                <Typography variant="subtitle1" sx={{ color: "red" }}>
                  {error}
                </Typography>
              )}
              {success && (
                <Typography variant="subtitle1" sx={{ color: "green" }}>
                  {success}
                </Typography>
              )}
              <Box>
                <Button
                  sx={{ backgroundColor: "#8C6897", px: 5, py: 1, mt: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </Box>
            </form>
            <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
              <Typography sx={{ my: 2, color: "#551A8B" }}>
                Already registered? Login -&gt;
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "600", mb: 3 }}>
                Or sign in with
              </Typography>
              <Button
                sx={{
                  my: 1,
                  backgroundColor: "#EA4335",
                  width: "50%",
                  py: 1.5,
                  alignSelf: "center",
                }}
                variant="contained"
                onClick={handleGoogleSignIn}
              >
                Google SignIn
              </Button>

              <Button
                sx={{
                  my: 1,
                  py: 1.5,
                  backgroundColor: "#000000",
                  width: "50%",
                  alignSelf: "center",
                }}
                variant="contained"
                onClick={handleGithubSignIn}
              >
                GitHub SignIn
              </Button>

              <Button
                sx={{
                  my: 1,
                  backgroundColor: "#4064AC",
                  py: 1.5,
                  width: "50%",
                  alignSelf: "center",
                }}
                variant="contained"
                onClick={handleFacebookSignin}
              >
                Facebook SignIn
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
