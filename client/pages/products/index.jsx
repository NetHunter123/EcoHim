import React, { useCallback, useEffect, useMemo, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProductCategory,
  GetProductFetch,
  setCartItems,
} from "../../actions";
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
import NextLink from "next/link";
import { useRouter } from "next/router";
import Available from "../../components/Available";
import NavigationBtn from "../../components/NavigationBtn";
import CategoryBtn from "../../components/CategoryBtn";
import Counter from "../../components/Counter";

const Index = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const router = useRouter();
  let cartItems = [];

  useEffect(() => {
    try {
      cartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (cartItems==null){
        cartItems=[]
      }
      console.log("Try", cartItems);
    } catch (e) {
      console.log(e);
      cartItems = [];
      console.log("ErrorCatch", cartItems, "Error", e);
    }
    products.length === 0 &&
      dispatch(
        GetProductFetch("http://localhost:1337/api/products?populate=*")
      );
  }, []);

  useEffect(()=>{
    dispatch(setCartItems(cartItems));
  },[cartItems])

  const AddToCart = (e) => {
    console.log("click", e);
    // products.map(({ attributes }) => {
    let inCart;
    cartItems.map((item) => {
      if (item.slug === e.slug) {
        inCart = true;
      }
    });
    !inCart && cartItems.push(e);
    // });

    console.log("cartItemsindex", cartItems);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // dispatch(setCartItems(cartItems));
  };

  const fiterProduct = (filterText) => {
    dispatch(
      GetProductFetch(
        `http://localhost:1337/api/products?populate=*&filters[category][$eq]=${filterText}`
      )
    );
  };

  console.log("products", products);
  return (
    <>
      <MainLayout>
        <Grid container spacing={2} sx={{ p: 2 }} flexWrap={"wrap-reverse"}>
          <Grid item container xs={12} md={7} lg={9} spacing={2}>
            {products?.map(({ attributes }) => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card
                      sx={{
                        maxWidth: "100%",
                        width: "100%",
                        borderRadius: "10px",
                        height: "440px",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
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
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          borderRadius: "10px",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            minHeight: "200px",
                            width: "100%",
                            borderRadius: "10px",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="200px"
                            width="100%"
                            image={
                              "http://localhost:1337" +
                              attributes?.image.data?.attributes?.url
                            }
                            alt={
                              attributes?.image.data?.attributes?.alternativeText
                            }
                            style={{ borderRadius: "10px" }}
                          />
                        </Box>
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
                            {attributes?.title.length <= 60
                              ? attributes?.title
                              : attributes?.title.slice(0, 60) + "..."}
                          </Typography>
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                              fontSize: "16px",
                            }}
                          >
                            <Available available={attributes.availability} />
                            <Typography
                              variant={"caption"}
                              style={{
                                display: "block",
                                wordWrap: "wrap",
                                fontSize: "14px",
                              }}
                              component="div"
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
                        <Button
                          size="small"
                          variant={"contained"}
                          fullWidth
                          style={{ borderRadius: "10px" }}
                          color="primary"
                          onClick={() => {
                            AddToCart(attributes);
                          }}
                          disabled={!attributes?.availability}
                        >
                          Додати до Корзини
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Grid item xs={12} md={5} lg={3} style={{ position: "relative" }}>
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                height: "fit-content",

                width: "100%",
                position: "sticky",
                top: "75px",
                padding: "20px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  flexWrap:"wrap"
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                  }}
                >
                  Категорії
                </Typography>
                <CategoryBtn
                  onClick={() => {
                    dispatch(
                      GetProductFetch(
                        "http://localhost:1337/api/products?populate=*"
                      )
                    );
                  }}
                  sx={{
                    width: "fit-content",
                  }}
                  text={"Всі товари"}
                ></CategoryBtn>
              </Box>
              <CategoryBtn
                onClick={() => {
                  fiterProduct("Клей ПВА в розфасовці");
                }}
                sx={{
                  width: "100%",
                }}
                text={"Клей ПВА в розфасовці"}
              ></CategoryBtn>
              <CategoryBtn
                onClick={() => {
                  fiterProduct("Клей ПВА дисперсія в промисловій тарі");
                }}
                sx={{
                  width: "100%",
                }}
                text={"Клей ПВА дисперсія в промисловій тарі"}
              ></CategoryBtn>
              <CategoryBtn
                onClick={() => {
                  fiterProduct("Будівельні оздоблювальні матеріали");
                }}
                sx={{
                  width: "100%",
                }}
                text={"Будівельні оздоблювальні матеріали"}
              ></CategoryBtn>
              <CategoryBtn
                onClick={() => {
                  fiterProduct("Трубопровідна та запірна арматура");
                }}
                sx={{
                  width: "100%",
                }}
                text={"Трубопровідна та запірна арматура"}
              ></CategoryBtn>
            </Box>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Index;
