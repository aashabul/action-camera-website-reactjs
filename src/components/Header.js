import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black" }}>Home</Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black" }}>Explore</Button>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black" }}>Dashboard</Button>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black" }}>Login</Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <img
            style={{ borderRadius: "50%", width: "30px" }}
            src="https://cdn-icons.flaticon.com/png/512/3899/premium/3899618.png?token=exp=1643983176~hmac=973b8828102b645bb32e9cdce6d36db1"
            alt="user"
          />
        </IconButton>
        <p>userName</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        style={{
          background: "#8C6897",
          alignItems: "center",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: { md: "90%", xl: "60%", xs: "80%" },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            Click Flick
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white" }}>Home</Button>
              </NavLink>
              <NavLink to="/explore" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white" }}>Explore</Button>
              </NavLink>

              <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white" }}>Dashboard</Button>
              </NavLink>

              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white" }}>Login</Button>
              </NavLink>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleMobileMenuOpen}
              sx={{ mr: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navigation;
