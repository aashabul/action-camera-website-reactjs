import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardContent, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

const MyCart = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let isMount = true;
    fetch("https://glacial-earth-66001.herokuapp.com/cart")
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

  //show product details
  const handleDetails = (id) => {
    navigate(`details/${id}`);
  };

  //counts total price from cart array
  const showTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price;
    }
    return total;
  };
  // shipping price
  const showShippingPrice = () => {
    let shipping = 50;
    if (cart.length < 1) {
      return (shipping = 0);
    }
    return shipping;
  };

  const showPayablePrice = () => {
    return showTotalPrice() + showShippingPrice();
  };

  // const handleAddWishlist = (e) => {
  //   console.log("added to wishlist");
  // };

  //delete order
  const handleDeleteOrder = (id) => {
    fetch(`https://glacial-earth-66001.herokuapp.com/cart/${id}`, {
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
    <>
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
                <CardActionArea
                  onClick={() => handleDetails(cart._id)}
                  sx={{ width: "250px" }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <img
                      style={{ width: "70%" }}
                      src={cart.img}
                      alt={cart.name}
                    />
                  </Box>
                </CardActionArea>
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

                    {/* <Box
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
                    </Box> */}
                  </Box>
                </Box>
              </Box>
              <Divider variant="middle" />
            </Box>
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
                <span style={{ color: "green" }}>$ {showShippingPrice()} </span>
              </Typography>
              <Divider variant="full" />
              <Typography variant="h6" sx={{ py: 1 }}>
                Payable Price{" = "}
                <span style={{ color: "green", textAlign: "right" }}>
                  $ {showPayablePrice()}{" "}
                </span>
              </Typography>
              <Divider variant="full" />

              {!cart.length == 0 && (
                <Box sx={{ mt: 4 }}>
                  <Link to="shipping" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      sx={{ background: "#8C6897", py: 1 }}
                    >
                      Go to Shipping Page
                    </Button>
                  </Link>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default MyCart;
