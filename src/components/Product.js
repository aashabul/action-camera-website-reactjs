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
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="h6">price: $ {price}</Typography>
            <Divider />
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
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Link to="/purchase" style={{ textDecoration: "none" }}>
            <Button size="small" color="primary">
              Purchase
            </Button>
          </Link>

          <Link to="/compare" style={{ textDecoration: "none" }}>
            <Button size="small" color="primary">
              Compare
            </Button>
          </Link>
          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <Button size="small" color="primary">
              +Wishlist
            </Button>
          </Link>
        </CardActions>
        <Divider />
      </Card>
    </Grid>
  );
};

export default Product;
