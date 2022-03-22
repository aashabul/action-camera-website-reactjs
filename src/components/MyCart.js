import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/system";

const MyCart = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let isMount = true;
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        if (isMount) {
          setCart(data.filter((cart) => cart.email === user.email));
        }
      });
    return () => {
      isMount = false;
    };
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
    <Container>
      <Grid container gap={5}>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          {cart.map((cart, index) => (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <img
                    style={{ width: "70%" }}
                    src={cart.img}
                    alt={cart.name}
                  />
                </Box>
                <Box>
                  <Typography variant="h6">{cart.name}</Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "green", fontWeight: 600 }}
                  >
                    $ {cart.price}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 4, mt: 1 }}>
                    <Box
                      onClick={() => handleDeleteOrder(cart._id)}
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        color: "gray",
                        "&:hover": { color: "#484554" },
                      }}
                    >
                      <DeleteForeverIcon />
                      <Typography>Delete</Typography>
                    </Box>

                    <Box
                      onClick={handleAddWishlist}
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        color: "gray",
                        "&:hover": { color: "#484554" },
                      }}
                    >
                      <FavoriteBorderIcon />
                      <Typography>Wishlist</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider variant="middle" />
            </Box>

            // <List
            //   key={index}
            //   sx={{
            //     width: "100%",
            //     maxWidth: 360,
            //     bgcolor: "background.paper",
            //     my: 3,
            //   }}
            // >
            //   <ListItem alignItems="flex-start">
            //     <ListItemAvatar>
            //       <Avatar alt={cart.name} src={cart.img} />
            //     </ListItemAvatar>
            //     <ListItemText
            //       primary={cart.name}
            //       secondary={
            //         <React.Fragment>
            //           <Typography
            //             sx={{ display: "inline" }}
            //             component="span"
            //             variant="body2"
            //             color="text.primary"
            //           >
            //             price: $ {cart.price}
            //           </Typography>
            //           <>
            //             <IconButton>
            //               <AddIcon />
            //             </IconButton>
            //             <input type="number" style={{ width: "50px" }} />
            //             <IconButton>
            //               <RemoveIcon />
            //             </IconButton>
            //           </>
            //           <Typography
            //             sx={{ display: "block" }}
            //             component="span"
            //             variant="body2"
            //             color="text.secondary"
            //           >
            //             color: {cart.color}
            //           </Typography>
            //           <>
            //             <Tooltip title="add to wishlist">
            //               <IconButton
            //                 sx={{ mr: 5 }}
            //                 onClick={handleAddWishlist}
            //               >
            //                 <FavoriteBorderIcon />
            //               </IconButton>
            //             </Tooltip>
            //             <Tooltip title="delete from cart">
            //               <IconButton
            //                 onClick={() => handleDeleteOrder(cart._id)}
            //               >
            //                 <DeleteForeverIcon />
            //               </IconButton>
            //             </Tooltip>
            //           </>
            //         </React.Fragment>
            //       }
            //     />
            //   </ListItem>
            //   <Divider variant="middle" component="li" />
            // </List>
          ))}
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} sx={{ mt: 5 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Checkout Summary{" "}
                <span style={{ color: "green" }}>({cart.length} Items)</span>
              </Typography>
              <Divider variant="full" />
              <Typography variant="h6" sx={{ py: 1 }}>
                Total Price{" = "}
                <span style={{ color: "green" }}>$ {showTotalPrice()} </span>
              </Typography>
              <Divider variant="full" />
              <Typography variant="h6" sx={{ py: 1 }}>
                Shipping{" = "}
                <span style={{ color: "green" }}>$ {showTotalPrice()} </span>
              </Typography>
              <Divider variant="full" />
              <Button variant="contained" sx={{ background: "#8C6897", py: 1 }}>
                Go to Shipping Page
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyCart;
