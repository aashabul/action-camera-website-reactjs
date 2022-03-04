import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

const Reviews = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={{ md: 2, xs: 3, lg: 3 }}>
        <Grid
          item
          // lg={2.5}
          // md={4}
          // sm={5}
          // xs={10}
          // columns={{ lg: 10, md: 12, sm: 10, xs: 10 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {info.map((review, index) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="body1">{review.name}</Typography>
                <Typography variant="caption">{review.email}</Typography>
                <Typography variant="h6">{review.comment}</Typography>
                <Rating name="simple-controlled" value={review.star} readOnly />
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reviews;
