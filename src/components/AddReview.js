import { Container, Grid, Button } from "@mui/material";
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
    <div>
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
        <input ref={emailRef} type="email" defaultValue={user.email} disabled />
        <input type="text" ref={imageRef} defaultValue={user.photoURL} />
        <input type="text" defaultValue={currentDate} disabled />
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddReview;
