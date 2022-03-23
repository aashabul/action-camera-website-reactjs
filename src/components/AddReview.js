import { Container, Grid, Button, Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import useAuth from "../hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const commentRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const imageRef = useRef();

  let [value, setValue] = useState(0);
  const date = new Date();

  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const currentDate = dd + "/" + mm + "/" + yyyy;

  const handleAddReview = (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const image = imageRef.current.value;

    const info = {
      comment: comment,
      star: value,
      name: name,
      email: email,
      image: image,
      date: currentDate,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added a review");
          e.target.reset();
        }
      });
    commentRef.current.value = "";
  };

  return (
    <Container>
      <form onSubmit={handleAddReview}>
        <Grid container>
          <Grid item sx={{ gap: 1.5 }} lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography variant="h6">Name</Typography>
              <input
                ref={nameRef}
                type="text"
                defaultValue={user.displayName}
                disabled
                style={{ width: "50%", fontSize: "17px" }}
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6">Email</Typography>
              <input
                ref={emailRef}
                type="email"
                defaultValue={user.email}
                disabled
                style={{ width: "50%", fontSize: "17px" }}
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6">Photo URL</Typography>
              {user.photoURL ? (
                <input
                  type="text"
                  ref={imageRef}
                  defaultValue={user.photoURL}
                  disabled
                  style={{ width: "50%", fontSize: "17px" }}
                />
              ) : (
                <>
                  <Typography variant="h6">Photo URL (optional)</Typography>
                  <input
                    type="text"
                    ref={imageRef}
                    defaultValue={user.photoURL}
                    style={{ width: "50%", fontSize: "17px" }}
                  />
                </>
              )}
            </Box>
            <Box>
              <Typography variant="h6">Date</Typography>
              <input
                type="text"
                defaultValue={currentDate}
                disabled
                style={{ width: "50%", fontSize: "17px" }}
              />
            </Box>
          </Grid>
          <Grid item sx={{ gap: 2 }} lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography variant="h6">Give your rating</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                size="large"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6">Write your review</Typography>
              <textarea
                ref={commentRef}
                cols="40"
                rows="10"
                placeholder="write review"
                style={{ fontSize: "17px" }}
              ></textarea>
            </Box>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddReview;
