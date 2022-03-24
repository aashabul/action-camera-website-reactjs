import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/system";
import useAuth from "../hooks/useAuth";

const Product = (props) => {
  const { user } = useAuth();
  const { name, description, img, price, _id } = props.product;
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  //post to cart database
  const handleAddtoCart = (e) => {
    const cart = {
      email: user.email,
      img: img,
      name: name,
      price: price,
      camera: description.camera,
      video: description.video,
      liveStreaming: description.liveStreaming,
      mediaType: description.mediaType,
      inputOutput: description.inputOutput,
      exterlCard: description.externalCard,
      viewAngle: description.viewAngle,
      workingTime: description.workingTime,
      battery: description.battery,
      weight: description.weight,
      color: description.color,
      wifi: description.wiFi,
      remote: description.remote,
    };

    //fetch items from cart
    fetch("https://glacial-earth-66001.herokuapp.com/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added to cart");
        }
      });
  };

  //post to wishlist
  const handleWishlist = (e) => {
    const wishlistItem = {
      email: user.email,
      img: img,
      name: name,
      price: price,
      camera: description.camera,
      video: description.video,
      liveStreaming: description.liveStreaming,
      mediaType: description.mediaType,
      inputOutput: description.inputOutput,
      exterlCard: description.externalCard,
      viewAngle: description.viewAngle,
      workingTime: description.workingTime,
      battery: description.battery,
      weight: description.weight,
      color: description.color,
      wifi: description.wiFi,
      remote: description.remote,
    };
    fetch("https://glacial-earth-66001.herokuapp.com/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added to wishlist");
        }
      });
  };

  return (
    <Grid
      item
      lg={2.5}
      md={4}
      sm={5}
      xs={10}
      columns={{ lg: 10, md: 12, sm: 10, xs: 10 }}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card sx={{ maxWidth: 300, maxHeight: 470 }}>
        <CardActionArea onClick={() => handleDetails(_id)}>
          <CardMedia component="img" height="140" image={img} alt={name} />
          <Divider />
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <Typography variant="h6">
                Price:{" "}
                <span style={{ color: "green", fontWeight: 600 }}>
                  $ {price}
                </span>
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Battery: {description.battery}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Screen: {description.screen}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Camera: {description.camera}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Color: {description.color}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Tooltip title="add to cart">
            <Button
              onClick={handleAddtoCart}
              variant="contained"
              size="small"
              color="primary"
              sx={{ background: "#8C6897" }}
            >
              <AddShoppingCartIcon />
            </Button>
          </Tooltip>

          <Tooltip title="compare">
            <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{ background: "#B4A7B7" }}
            >
              <CompareArrowsIcon />
            </Button>
          </Tooltip>

          <Tooltip title="add to wishlist">
            <Button
              onClick={handleWishlist}
              variant="contained"
              size="small"
              color="primary"
              sx={{
                "&:hover": { backgroundColor: "#8C6897" },
                background: "#4E4351",
              }}
            >
              <FavoriteBorderIcon />
            </Button>
          </Tooltip>
        </CardActions>
        <Divider />
      </Card>
    </Grid>
  );
};

export default Product;
