import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyCart = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) =>
        setCart(data.filter((cart) => cart.email === user.email))
      );
  }, [user.email]);

  return (
    <div>
      {cart.map((cart, index) => (
        <Box key={index}>
          <h3>ProductId: {cart._id}</h3>
          <h3>Name: {cart.name}</h3>
          <h3>Price: ${cart.price}</h3>
        </Box>
      ))}
    </div>
  );
};

export default MyCart;
