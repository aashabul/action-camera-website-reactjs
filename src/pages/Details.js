import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products.map((product) => {
        if (product._id === id) {
          return (
            <Container key={id}>
              <h4>{id}</h4>
              <img src={product.img} alt="" />
              <h4>{product.name}</h4>
              <h4>Camera: {product.description.camera}</h4>
              <h4>Video: {product.description.video}</h4>
              <h4>Photo: {product.description.photo}</h4>
              <h4>Media type: {product.description.mediaType}</h4>
              <h4>Input/Output: {product.description.inputOutput}</h4>
              <h4>External card: {product.description.externalCard}</h4>
              <h4>View angle: {product.description.viewAngle}</h4>
              <h4>Working time: {product.description.workingTime}</h4>
              <h4>Battery: {product.description.battery}</h4>
              <h4>Weight: {product.description.weight}</h4>
              <h4>Color: {product.description.color}</h4>
              <h4>WiFi: {product.description.wiFi}</h4>
              <h4>Remote: {product.description.remote}</h4>
            </Container>
          );
        }
      })}
    </div>
  );
};

export default Details;
