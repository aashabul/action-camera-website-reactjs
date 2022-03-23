import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";

const CartItemDetails = () => {
  const { id } = useParams();
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch("https://glacial-earth-66001.herokuapp.com/cart")
      .then((res) => res.json())
      .then((data) => setCartItem(data.filter((cart) => cart._id === id)));
  }, []);

  return (
    <div>
      {cartItem.map((item) => {
        return (
          <Container
            key={id}
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 5,
            }}
          >
            <TableContainer component={Paper}>
              <img src={item.img} alt="" />
              <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableBody>
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      Name:
                    </TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Price:
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ color: "green", fontWeight: 600 }}
                    >
                      $ {item.price}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Camera:
                    </TableCell>
                    <TableCell align="left">{item.camera}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Video:
                    </TableCell>
                    <TableCell align="left">{item.video}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Live Stream:
                    </TableCell>
                    <TableCell align="left">{item.liveStreaming}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Media type:
                    </TableCell>
                    <TableCell align="left">{item.mediaType}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Input/Output:
                    </TableCell>
                    <TableCell align="left">{item.inputOutput}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      External card:
                    </TableCell>
                    <TableCell align="left">{item.exterlCard}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      View angle:
                    </TableCell>
                    <TableCell align="left">{item.viewAngle}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Working time:
                    </TableCell>
                    <TableCell align="left">{item.workingTime}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Battery:
                    </TableCell>
                    <TableCell align="left">{item.battery}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Weight:
                    </TableCell>
                    <TableCell align="left">{item.weight}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Color:
                    </TableCell>
                    <TableCell align="left">{item.color}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      WiFi:
                    </TableCell>
                    <TableCell align="left">{item.wifi}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Remote:
                    </TableCell>
                    <TableCell align="left">{item.remote}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        );
      })}
    </div>
  );
};

export default CartItemDetails;
