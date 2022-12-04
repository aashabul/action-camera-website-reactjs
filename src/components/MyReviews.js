import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Box from "@mui/material/Box";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import AccountCircle from "@mui/icons-material/AccountCircle";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let isMount = true;
    fetch(`https://click-flick-camera-server-production.up.railway.app/reviews`)
      .then((res) => res.json())
      .then((data) => {
        if (isMount) {
          setReviews(data.filter((review) => review.email === user.email));
        }
      });
    return () => {
      isMount = false;
    };
  }, [user.email]);

  return (
    <Container>
      <Grid container gap={2}>
        {reviews.map((review, index) => (
          <Grid key={index} item md={3.8} sm={12} xs={12}>
            <Card key={index} sx={{ alignSelf: "center" }}>
              <CardContent
                sx={{
                  minHeight: "28vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                  <Box sx={{ alignSelf: "center" }}>
                    {review.image ? (
                      <img
                        style={{ borderRadius: "50%", width: "45px" }}
                        src={review.image}
                        alt="user"
                      />
                    ) : (
                      <AccountCircle fontSize="large" />
                    )}
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body1">{review.name}</Typography>
                    <Typography variant="body2">{review.email}</Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    // variant="h6"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    <cite>"{review.comment}"</cite>
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      my: 1,
                    }}
                  >
                    <Box>
                      <Rating
                        name="simple-controlled"
                        value={review.star}
                        readOnly
                      />
                    </Box>
                    <Box>
                      <Typography>(Rated {review.star} star)</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ textAlign: "center" }}>
                    Date: {review.date}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyReviews;
