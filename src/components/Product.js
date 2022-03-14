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
import { Link } from "react-router-dom";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/system";

const Product = (props) => {
  const { name, description, img, price } = props.product;
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
        <CardActionArea>
          <CardMedia component="img" height="140" image={img} alt={name} />
          <Divider />
          <CardContent
            sx={{
              minHeight: "22vh",
            }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="h6">price: $ {price}</Typography>
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
          <Link to="/purchase" style={{ textDecoration: "none" }}>
            <Tooltip title="add to cart">
              <Button
                variant="contained"
                size="small"
                color="primary"
                sx={{ background: "#8C6897" }}
              >
                <AddShoppingCartIcon />
              </Button>
            </Tooltip>
          </Link>

          <Link to="/compare" style={{ textDecoration: "none" }}>
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
          </Link>
          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <Tooltip title="add to wishlist">
              <Button
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
          </Link>
        </CardActions>
        <Divider />
      </Card>
    </Grid>
  );
};

export default Product;
