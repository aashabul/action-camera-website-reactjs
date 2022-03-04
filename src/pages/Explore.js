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

  const handleAddReview = (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;
    // const star = value;

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const info = { comment: comment, star: value, name: name, email: email };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        const addedReview = data;
        console.log(addedReview);
        const newReview = [...review, addedReview];
        setReview(newReview);
      });
    commentRef.current.value = "";
  };

  return (
    <div>
      <Header />
      <Container sx={{ my: 7 }}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <form onSubmit={handleAddReview}>
              <textarea
                ref={commentRef}
                cols="30"
                rows="10"
                placeholder="write review"
              ></textarea>
              <input
                ref={nameRef}
                type="text"
                defaultValue={user.displayName}
                disabled
              />
              <input
                ref={emailRef}
                type="email"
                defaultValue={user.email}
                disabled
              />
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              {/* <input ref={starRef} type="number" /> */}
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>

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
