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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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

  //counts total price from cart array
  const showTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price;
    }
    return total;
  };
  showTotalPrice();

  const handleAddWishlist = (e) => {
    console.log("added to wishlist");
  };

  //delete order
  const handleDeleteOrder = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const newData = cart.filter((item) => item._id !== id);
          setCart(newData);
        }
      });
  };

  return (
    <div>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Confirm Order{" "}
        <span style={{ color: "green" }}>({cart.length} Items)</span>
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        total Price{" "}
        <span style={{ color: "green" }}>($ {showTotalPrice()} )</span>
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
                  <>
                    <IconButton>
                      <AddIcon />
                    </IconButton>
                    <input type="number" style={{ width: "50px" }} />
                    <IconButton>
                      <RemoveIcon />
                    </IconButton>
                  </>
                  <Typography
                    sx={{ display: "block" }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    color: {cart.color}
                  </Typography>
                  <>
                    <Tooltip title="add to wishlist">
                      <IconButton sx={{ mr: 5 }} onClick={handleAddWishlist}>
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="delete from cart">
                      <IconButton onClick={() => handleDeleteOrder(cart._id)}>
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
