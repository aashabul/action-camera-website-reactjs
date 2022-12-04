import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardActionArea, Grid } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const MyWishlist = () => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    let isMount = true;
    fetch(
      "https://click-flick-camera-server-production.up.railway.app/wishlist"
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMount) {
          setWishlist(data.filter((item) => item.email === user.email));
        }
      });
    return () => {
      isMount = false;
    };
  }, [user.email]);

  //delete item from wishlist
  const handleDeleteWishlist = (id) => {
    fetch(
      `https://click-flick-camera-server-production.up.railway.app/wishlist/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const newData = wishlist.filter((item) => item._id !== id);
          setWishlist(newData);
        }
      });
  };

  return (
    <Grid item lg={7} md={7} sm={12} xs={12}>
      {wishlist.map((item, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardActionArea sx={{ width: "250px" }}>
              <Box sx={{ textAlign: "center" }}>
                <img style={{ width: "70%" }} src={item.img} alt={item.name} />
              </Box>
            </CardActionArea>
            <Box>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="h6" sx={{ color: "green", fontWeight: 600 }}>
                $ {item.price}
              </Typography>

              <Box sx={{ display: "flex", gap: 4, mt: 1 }}>
                <Box
                  onClick={() => handleDeleteWishlist(item._id)}
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
                  // onClick={handleAddWishlist}
                  sx={{
                    display: "flex",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": { color: "#484554" },
                  }}
                >
                  <AddShoppingCartIcon />
                  <Typography>Send to cart</Typography>
                </Box> */}
              </Box>
            </Box>
          </Box>
          <Divider variant="middle" />
        </Box>
      ))}
    </Grid>
  );
};

export default MyWishlist;
