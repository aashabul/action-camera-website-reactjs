import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Container, Grid } from "@mui/material";

const IsLoading = () => {
  return (
    <>
      <Container
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          gap={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 5,
          }}
        >
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" height={60} />
            </Stack>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" height={60} />
            </Stack>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" height={60} />
            </Stack>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" height={60} />
            </Stack>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" height={60} />
            </Stack>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" height={60} />
            </Stack>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" height={60} />
            </Stack>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" height={60} />
            </Stack>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" height={200} />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" height={60} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default IsLoading;
