import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

const Navigation = () => {
  const [cart, setCart] = useState(0);
  const { user, handleSignOut } = useAuth();

  useEffect(() => {
    let isMount = true;
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        if (isMount) {
          let result = data.filter((cart) => cart.email === user.email);
          setCart(result.length);
        }
      });
    return () => {
      isMount = false;
    };
  });

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

      {user.email && (
        <MenuItem>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "black" }}>Dashboard</Button>
          </Link>
        </MenuItem>
      )}

      <MenuItem>
        {user.email ? (
          <Button onClick={handleSignOut} sx={{ color: "black" }}>
            LogOut
          </Button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button sx={{ color: "black" }}>Login</Button>
          </Link>
        )}
      </MenuItem>

      <MenuItem>
        {/* onClick={handleProfileMenuOpen} */}
        {user.photoURL ? (
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <img
              style={{ borderRadius: "50%", width: "30px" }}
              src={user.photoURL}
              alt="user"
            />
          </IconButton>
        ) : (
          <></>
        )}

        {user?.email ? <p>{user.displayName}</p> : <></>}
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
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              Click Flick
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white" }}>Home</Button>
              </NavLink>
              <NavLink to="/explore" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white" }}>Explore</Button>
              </NavLink>

              {user.email && (
                <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
                  <Button sx={{ color: "white" }}>Dashboard</Button>
                </NavLink>
              )}

              {user.email && (
                <NavLink
                  to="/dashboard/cart"
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={{ color: "white" }}>
                    <ShoppingCartIcon fontSize="small" />
                    <Typography
                      sx={{
                        background: "white",
                        color: "black",
                        borderRadius: "50px",
                        width: "1.3rem",
                        height: "1.3rem",
                        ml: 0.5,
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      {cart}
                    </Typography>
                  </Button>
                </NavLink>
              )}

              {user?.email ? (
                <Button
                  onClick={handleSignOut}
                  sx={{ color: "white", gap: 0.5 }}
                >
                  <LogoutIcon fontSize="small" />
                  LogOut
                </Button>
              ) : (
                <>
                  <NavLink to="/login" style={{ textDecoration: "none" }}>
                    <Button sx={{ color: "white" }}>Login</Button>
                  </NavLink>
                </>
              )}

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {user.photoURL ? (
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "30px",
                    }}
                    src={user.photoURL}
                    alt="user"
                  />
                ) : (
                  <AccountCircle />
                )}
                {user.email && (
                  <Typography sx={{ marginLeft: 1 }}>
                    {user.displayName}
                  </Typography>
                )}
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
