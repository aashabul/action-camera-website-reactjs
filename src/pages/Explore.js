import { Container, Grid, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import Loading from "../components/IsLoading";
import { Box } from "@mui/system";
import useAuth from "../hooks/useAuth";
import Rating from "@mui/material/Rating";

const Explore = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState([]);
  const commentRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const imageRef = useRef();
  let [value, setValue] = useState(0);

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  // const handleAddReview = (e) => {
  //   e.preventDefault();
  //   const comment = commentRef.current.value;
  //   // const star = value;

  //   const name = nameRef.current.value;
  //   const email = emailRef.current.value;
  //   const image = imageRef.current.value;
  //   const info = {
  //     comment: comment,
  //     star: value,
  //     name: name,
  //     email: email,
  //     image: image,
  //   };
  //   fetch("http://localhost:5000/reviews", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(info),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const addedReview = data;
  //       console.log(addedReview);
  //       const newReview = [...review, addedReview];
  //       setReview(newReview);
  //     });
  //   commentRef.current.value = "";
  // };

  return (
    <div>
      <Header />
      <Container sx={{ my: 7 }}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Grid container spacing={{ md: 2, xs: 3, lg: 3 }}>
              {products.map((product, index) => (
                <Product key={index} product={product}></Product>
              ))}
            </Grid>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Explore;
