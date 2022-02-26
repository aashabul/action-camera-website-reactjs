import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  };

  return (
    <>
      <Header></Header>
      <Container
        sx={{
          textAlign: "center",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          width="100vw"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleLogin}>
            <Box
              sx={{
                mb: 5,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "30vw",
              }}
            >
              <Typography>Please Login</Typography>
              <TextField
                required
                id="outlined-required"
                label="Email"
                name="email"
                onBlur={handleEmail}
              />
              <TextField
                required
                id="outlined-required"
                label="Password"
                name="password"
                onBlur={handlePass}
              />
            </Box>
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
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Box>
          </form>

          <Box sx={{ mt: 5 }}>
            <Button onClick={googleSignIn}>Google SignIn</Button>

            <Button onClick={handleGithubSignIn}>GitHub SignIn</Button>

            <Button onClick={handleFacebookSignin}>Facebook SignIn</Button>
          </Box>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "blue" }}
          >
            New User? Register first.
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Login;
