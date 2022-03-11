import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      {reviews.map((review, index) => {
        if (review.email === user.email) {
          return <li key={index}>{review.comment}</li>;
        }
      })}
    </div>
  );
};

export default MyReviews;
