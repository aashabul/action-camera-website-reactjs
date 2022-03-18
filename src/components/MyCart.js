import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconButton, Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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

  const handleAddWishlist = (e) => {
    console.log("added to wishlist");
  };

  const handleConfirmOrder = (e) => {
    console.log("order confirmed");
  };

  const handleDeleteOrder = (e) => {
    console.log("order deleted from cart");
  };

  return (
    <div>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Confirm Order{" "}
        <span style={{ color: "green" }}>({cart.length} Items)</span>
      </Typography>
      {cart.map((cart, index) => (
        <List
          key={index}
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            my: 3,
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={cart.name} src={cart.img} />
            </ListItemAvatar>
            <ListItemText
              primary={cart.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    price: $ {cart.price}
                  </Typography>
                  <Typography
                    sx={{ display: "block" }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    color: {cart.color}
                  </Typography>
                  <>
                    <Tooltip title="continue to shipping">
                      <IconButton sx={{ mr: 5 }} onClick={handleAddWishlist}>
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="delete from cart">
                      <IconButton onClick={handleDeleteOrder}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="middle" component="li" />
        </List>
      ))}
    </div>
  );
};

export default MyCart;
