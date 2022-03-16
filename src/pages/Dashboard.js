import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReviewsIcon from "@mui/icons-material/Reviews";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../hooks/useAuth";
import MyCart from "../components/MyCart";
import MyReviews from "../components/MyReviews";
import AddReview from "../components/AddReview";

const drawerWidth = 240;

function Dashboard(props) {
  const { handleSignOut } = useAuth();
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleHome = () => {
    navigate("/");
  };
  const handleExplore = () => {
    navigate("/explore");
  };
  const handleCart = () => {
    navigate("/dashboard/cart");
  };
  const handleReview = () => {
    navigate("/dashboard/myReviews");
  };
  const handleAddReview = () => {
    navigate("/dashboard/addReview");
  };
  const handleWishlist = () => {
    navigate("/dashboard/myWishlist");
  };
  const handleLogout = () => {
    handleSignOut();
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button onClick={handleCart}>
          <ListItemIcon>
            <ShoppingCartIcon sx={{ ml: 2 }} />
          </ListItemIcon>
          <ListItemText>Cart</ListItemText>
        </ListItem>

        <ListItem button onClick={handleReview}>
          <ListItemIcon>
            <ReviewsIcon sx={{ ml: 2 }} />
          </ListItemIcon>
          <ListItemText>My Reviews</ListItemText>
        </ListItem>

        <ListItem button onClick={handleAddReview}>
          <ListItemIcon>
            <RateReviewIcon sx={{ ml: 2 }} />
          </ListItemIcon>
          <ListItemText>Add Review</ListItemText>
        </ListItem>
        <ListItem button onClick={handleWishlist}>
          <ListItemIcon>
            <FavoriteIcon sx={{ ml: 2 }} />
          </ListItemIcon>
          <ListItemText>My Wishlist</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleHome}>
          <ListItemIcon>
            <HomeIcon sx={{ ml: 2 }} />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button onClick={handleExplore}>
          <ListItemIcon>
            <ExploreIcon sx={{ ml: 2 }} />
          </ListItemIcon>
          <ListItemText>Explore</ListItemText>
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon sx={{ ml: 2 }} />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ background: "#8C6897" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
