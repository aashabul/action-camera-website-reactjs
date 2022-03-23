import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://glacial-earth-66001.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products.map((product) => {
        if (product._id === id) {
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
                <img src={product.img} alt="" />
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableBody>
                    <TableRow key={id}>
                      <TableCell component="th" scope="row">
                        Name:
                      </TableCell>
                      <TableCell align="left">{product.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Price:
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ color: "green", fontWeight: 600 }}
                      >
                        $ {product.price}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Camera:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.camera}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Video:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.video}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Live Stream:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.liveStreaming}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Media type:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.mediaType}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Input/Output:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.inputOutput}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        External card:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.externalCard}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        View angle:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.viewAngle}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Working time:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.workingTime}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Battery:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.battery}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Weight:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.weight}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Color:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.color}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        WiFi:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.wiFi}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Remote:
                      </TableCell>
                      <TableCell align="left">
                        {product.description.remote}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          );
        }
      })}
    </div>
  );
};

export default Details;
