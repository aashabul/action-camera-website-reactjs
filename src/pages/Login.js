import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // console.log("came from", location.state?.from);
  const {
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    loading,
    loginUser,
    success,
    error,
  } = useAuth();

  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = (e) => {
    signInWithGoogle(location, navigate);
  };

  const handleGithubSignIn = (e) => {
    signInWithGithub(location, navigate);
  };

  const handleFacebookSignin = (e) => {
    signInWithFacebook(location, navigate);
  };
  return (
    <>
      <Header></Header>
      <Container
        sx={{
          textAlign: "center",
          minHeight: "90vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} md={7}>
            <form onSubmit={handleLoginSubmit}>
              <Typography variant="h5" sx={{ fontWeight: "600", mb: 3 }}>
                Please Login
              </Typography>
              {loading && (
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
              <TextField
                className="login-input"
                sx={{ width: "60%", m: 1, minWidth: "250px" }}
                required
                id="outlined-required"
                label="Email"
                name="email"
                onBlur={handleOnBlur}
              />
              <TextField
                // className="login-input"
                sx={{ width: "60%", margin: "20px 0", minWidth: "250px" }}
                required
                id="outlined-required"
                label="Password"
                name="password"
                onBlur={handleOnBlur}
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
              <Typography sx={{ my: 2, color: "#551A8B" }}>
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
                className="login-button"
                sx={{
                  my: 1,
                  backgroundColor: "#EA4335",
                  width: "50%",
                  py: 1.5,
                  alignSelf: "center",
                  minWidth: "250px",
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
                  minWidth: "250px",
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
                  minWidth: "250px",
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
