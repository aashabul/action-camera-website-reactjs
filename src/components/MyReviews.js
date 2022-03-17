import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) =>
        setReviews(data.filter((review) => review.email === user.email))
      );
  }, [user.email]);

  return (
    <div>
      {reviews.map((review, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "50vw",
                // height: 128,
              },
            }}
          >
            <Paper elevation={3}>
              <Typography>Comment: {review.comment}</Typography>
              <Rating
                name="simple-controlled"
                value={review.star}
                readOnly
                sx={{ display: "flex", justifyContent: "center" }}
              />
            </Paper>
          </Box>
        );
      })}
    </div>
  );
};

export default MyReviews;
