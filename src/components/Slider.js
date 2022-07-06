import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";
import "../Slider.css";

const Slider = () => {
  const { info } = useAuth();
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  });
  return (
    <Box>
      <Box
        id="review-container"
        sx={{
          paddingTop: "20px",
          paddingRight: "50px",
          paddingBottom: "80px",
          paddingLeft: "20px",
          alignSelf: "center",
          // padding: "3% 0",
          backgroundColor: "#2d3142",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          id="slider-header"
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 7,
            fontSize: "1.7rem",
            fontWeight: "600",
            letterSpacing: "0.17rem",
          }}
        >
          <span style={{ color: "#0096c7" }}>Consumer</span>{" "}
          <span style={{ color: "orange" }}>Review</span>
        </Typography>
        <motion.div
          ref={slider}
          whileTap={{ cursor: "grabbing" }}
          style={{
            cursor: "grab",
            overflow: "hidden",
            // backgroundColor: "lightblue",
          }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ display: "flex" }}
          >
            {info.map((review, index) => (
              <motion.div style={{ padding: "20px" }} key={index}>
                <Card
                  key={index}
                  sx={{
                    backgroundImage:
                      "linear-gradient(140deg, #FFFFFF 50%, #dee2e6 100%)",
                  }}
                >
                  <CardContent
                    id="card-content"
                    sx={{
                      minWidth: "22rem",
                      minHeight: "12rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: 1, justifyContent: "center" }}
                    >
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
                            // style={{ color: "yellow" }}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Slider;
