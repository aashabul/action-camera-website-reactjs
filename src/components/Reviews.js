import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Reviews = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://glacial-earth-66001.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
        Customer Reviews
      </Typography>
      <Grid container gap={2}>
        {info.map((review, index) => (
          <Grid key={index} item md={3.8} sm={12} xs={12}>
            <Card key={index} sx={{ alignSelf: "center", minHeight: "230px" }}>
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

export default Reviews;
