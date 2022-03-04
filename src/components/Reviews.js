import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";

const Reviews = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
        Customer Reviews
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {info.map((review, index) => (
            <Card key={index}>
              <CardContent>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ alignSelf: "center" }}>
                    <img
                      style={{ borderRadius: "50%", width: "45px" }}
                      src={review.image}
                      alt="user"
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body1">{review.name}</Typography>
                    <Typography variant="body2">{review.email}</Typography>
                  </Box>
                </Box>
                <Box sx={{ mt: 1 }}>
                  <Rating
                    name="simple-controlled"
                    value={review.star}
                    readOnly
                    sx={{ display: "flex", justifyContent: "center" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <cite>{review.comment}</cite>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Reviews;
