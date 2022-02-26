import React from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

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
          <form onSubmit={handleEmailPassSignIn}>
            <Box
              sx={{
                mb: 5,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "30vw",
              }}
            >
              <Typography>Please Register</Typography>
              {/* <TextField
                required
                id="outlined-required1"
                label="Name"
                name="name"
                onBlur={handleName}
              /> */}
              <TextField
                required
                id="outlined-required2"
                label="Email"
                name="email"
                onBlur={handleEmail}
              />
              <TextField
                required
                id="outlined-required3"
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
                Register
              </Button>
            </Box>
          </form>

          <Box sx={{ mt: 5 }}>
            <Button onClick={handleGoogleSignIn}>Google SignIn</Button>

            <Button onClick={handleGithubSignIn}>GitHub SignIn</Button>

            <Button onClick={handleFacebookSignin}>Facebook SignIn</Button>
          </Box>
          <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
            Already registered? Login
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Register;
