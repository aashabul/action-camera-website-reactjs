import React, { useState } from "react";
import { Button, Container, TextField, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  // const [url, setUrl] = useState();
  const redirect_url = location.state?.from || "/";
  console.log("came from", location.state?.from);
  const {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleFacebookSignin,
    handleEmail,
    handlePass,
    handleLogin,
    success,
    error,
  } = useAuth();

  const googleSignIn = () => {
    // setIsLoading(true);
    handleGoogleSignIn()
      .then((result) => {
        // const user = result.user;
        // setRegistered(true);
        navigate(redirect_url);
        // setUrl(redirect_url);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // setError(errorMessage);
      });
    // .finally(() => setIsLoading(false));
  };

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
            <form onSubmit={handleLogin}>
              <Typography variant="h5" sx={{ fontWeight: "600", mb: 3 }}>
                Please Login
              </Typography>
              <TextField
                sx={{ width: "60%", m: 1 }}
                required
                id="outlined-required"
                label="Email"
                name="email"
                onBlur={handleEmail}
              />
              <TextField
                sx={{ width: "60%", m: 1 }}
                required
                id="outlined-required"
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
                  Login
                </Button>
              </Box>
            </form>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography sx={{ my: 2 }}>
                New User? Register first -&gt;
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
                onClick={googleSignIn}
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

export default Login;
