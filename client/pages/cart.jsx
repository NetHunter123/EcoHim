import React, { useEffect, useState } from "react";
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
  Typography,
} from "@mui/material";
import Available from "../components/Available";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../actions";
import Counter from "../components/Counter";
import Checkout from "../components/Checkout";

const Cart = () => {
  const router = useState();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const getItems = () => {
    let getCartItems
    try {
      getCartItems = JSON.parse(localStorage.getItem("cartItems"));
    }catch (e) {
      console.log(e)
      getCartItems = []
    }

    console.log("getcartItemsinCart", getCartItems);

    const updateCartItems = getCartItems?.map((item) => {
      return { ...item, count: 1 };
    });
    console.log("updateCartItems", updateCartItems);
    dispatch(setCartItems(updateCartItems));
    // return getCartItems;
  };
  useEffect(() => {
    getItems();
  }, []);
  console.log("itemsinCart", cartItems);

  const orderList = () => {
    let totalPrice = 0;
    const orderListText = cartItems?.map((item, i) => {
      totalPrice += +(item.price * item.count);
      return `
     Товар №${i + 1}\n
     Назва: ${item.title} - знаходиться в категорії ${item.category},\n
     Ціна за одну штуку:${item.price}, Замовлена кількість:${item.count},\n
     До сплати за товар №${i + 1}: ${item.price * item.count}. 
     `;
    });
    console.log("orderListText", orderListText);
    let sendText = "";
    if (cartItems != undefined && cartItems.length != 0) {
      orderListText?.forEach((item) => {
        sendText += `${item}\n`;
      });
        sendText += `Загальна сума:${totalPrice}`;
    }else {
      sendText = " "
    }

    console.log("sendText", sendText);
    return {sendText,orderListText};
  };

  const dell=(slug)=>{
    const filteredItems = cartItems.filter((item)=> item.slug != slug)
    console.log("filteredItems",filteredItems)
    dispatch(setCartItems(filteredItems));
  }
  return (
    <MainLayout>
      <Box
        style={{
          minHeight: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        sx={{ p: 3 }}
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
          <Box style={{ marginBottom: "36px" }}>
            <Typography
              fontSize={24}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              Корзина
            </Typography>
          </Box>
          <Grid
            container
            rowSpacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              minHeight: "85%",
            }}
          >
            {cartItems?.length != 0 && cartItems != undefined ? (
              cartItems?.map((attributes) => {
                return (
                  <Grid
                    container
                    xs={12}
                    style={{ minHeight: "200px", marginBottom: "15px" }}
                  >
                    <Card
                      sx={{
                        maxWidth: "100%",
                        width: "100%",
                        borderRadius: "10px",
                        minHeight: "200px",
                        maxHeight: "250px",

                        display: "flex",
                        alignItems: "center",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      <Grid item xs={5}>
                        <CardMedia
                          component="img"
                          height="200px"
                          image={
                            "http://localhost:1337" +
                            attributes?.image.data.attributes?.url
                          }
                          alt={
                            attributes?.image.data.attributes?.alternativeText
                          }
                          style={{ borderRadius: "10px" }}
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <Box
                          style={{
                            display: "flex",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: "10px",
                          }}
                        >
                          <Typography
                            paragraph
                            variant="h5"
                            component="div"
                            style={{
                              fontSize: "18px",
                              fontWeight: 600,
                              display: "block",
                              wordWrap: "wrap",
                              marginBottom: "10px",
                            }}
                          >
                            {attributes?.title}
                          </Typography>

                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "100%",
                              flexWrap:"wrap",
                              marginBottom:"10px"
                            }}
                          >
                            <Typography
                              variant={"caption"}
                              style={{
                                display: "block",
                                wordWrap: "wrap",
                                fontSize: "16px",
                                marginRight: "15px",
                              }}
                              component="div"
                            >
                              {attributes?.saleType}
                            </Typography>

                            <Typography
                              variant="body2"
                              style={{ fontSize: "16px" }}
                            >
                              Базова ціна:
                              {attributes?.price + " " + attributes?.valueType}
                            </Typography>
                          </Box>
                          <Box style={{ display: "flex", justifyContent: "space-between",width:"100%" }}>
                            <Counter price={attributes.price} item={attributes} />
                            <Button onClick={()=>{
                              dell(attributes.slug)
                            }
                            }>Видалити</Button>
                          </Box>
                        </Box>
                      </Grid>
                    </Card>
                  </Grid>
                );
              })
            ) : (
              <Typography style={{ margin: "auto 0" }}>
                ваша корзина пуста
              </Typography>
            )}
          </Grid>
          {/*<Button onClick={()=>{*/}
          {/*  console.log(console.log("attributes.count", cartItems))*/}
          {/*}} style={{ marginTop: "auto", backgroundColor: "green",color:"white" }}>*/}
          {/*  Оформити замовлення*/}
          {/*</Button>*/}
          <Checkout text={orderList} />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Cart;
