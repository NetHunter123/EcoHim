import React, {useState} from "react";
import MainLayout from "../layout/MainLayout";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import Available from "../components/Available";

const Cart = () => {
  const router = useState()
  const cartItems = []
  console.log("cartItemsinCart",cartItems)
  return (
    <MainLayout>
      <Box
        style={{
          minHeight: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            minHeight: "80%",
            backgroundColor: "#fff",
            width: "80%",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "65px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box style={{marginBottom:"20px"}}>
            <Typography
              fontSize={24}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              Корзина
            </Typography>
          </Box>
          <Stack spacing={2}>

            {cartItems?.map((attributes) => {
              return (
                <>
                  <Grid item xs={4}>
                    <Card
                      sx={{
                        maxWidth: "100%",
                        width: "100%",
                        borderRadius: "10px",
                        height: "200px",
                        padding: "10px",
                        display: "flex",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <CardActionArea
                        onClick={() =>
                          router.push("/products/" + attributes.slug)
                        }
                        style={{
                          height: "100%",
                          display: "flex",

                          borderRadius: "10px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="200px"
                          width="200px"
                          image={
                            "http://localhost:1337" +
                            attributes?.image.data.attributes?.url
                          }
                          alt={
                            attributes?.image.data.attributes?.alternativeText
                          }
                          style={{ borderRadius: "10px" }}
                        />
                        <CardContent
                          style={{
                            padding: "10px 10px 6px",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{
                              marginBottom: "auto",
                              fontSize: "18px",

                              fontWeight: 600,
                            }}
                          >
                            {attributes?.title}
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                              fontSize: "16px",
                            }}
                          >
                            <Available available={attributes?.availability} />
                            <Typography
                              variant={"caption"}
                              style={{ display: "block", wordWrap: "wrap" }}
                              component="div"
                              style={{ fontSize: "14px" }}
                            >
                              {attributes?.saleType}
                            </Typography>
                          </Box>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{ fontSize: "14px" }}
                          >
                            {attributes?.price + " " + attributes?.valueType}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions style={{ padding: "0px 3px 8px 3px" }}>

                      </CardActions>
                    </Card>
                  </Grid>
                </>
              );
            }) && "ваша корзина пуста" }
          </Stack>
          <Box style={{ marginTop: "auto", backgroundColor: "green" }}>
            Оформити замовлення
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Cart;
