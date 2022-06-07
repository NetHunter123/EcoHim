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
import AuthBtn from "../../components/AuthBtn";
import CategoryBtn from "../../components/CategoryBtn";
import Counter from "../../components/Counter";

const Index = () => {
  const products = useSelector((state) => state.products.products);
  const cartItemsRedux = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems=[]

  useEffect(() => {
    dispatch(GetProductFetch("http://localhost:1337/api/products?populate=*"));
  }, []);

  const AddToCart = (e) => {
    console.log("click", e);
    cartItems.push(e);
    console.log("cartItemsindex", cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // dispatch(setCartItems(cartItems));
  };

  useEffect(() => {
    console.log("Change");
  }, []);
  const fiterProduct = (filterText) => {
    dispatch(
      GetProductFetch(
        `http://localhost:1337/api/products?populate=*&filters[category][$eq]=${filterText}`
      )
    );
  };

  const inCart = (slug) => {
    let prodState;
    cartItems.map((item) => {
      console.log("item.slug", item.slug);
      console.log("slug", slug);
      if (item.slug === slug) {
        prodState = true;
      } else {
        prodState = false;
      }
    });
    return prodState;
  };

  console.log("products", products);
  return (
    <>
      <MainLayout>
        <Grid container spacing={2} sx={{p:3}}>
          <Grid item container xs={9} spacing={2}>
            {products.map(({ attributes }) => {
              return (
                <>
                  <Grid item xs={4}>
                    <Card
                      sx={{
                        maxWidth: "100%",
                        width: "100%",
                        borderRadius: "10px",
                        height: "400px",
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
                        <CardMedia
                          component="img"
                          height="200px"
                          width="100%"
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
                        <Button
                          size="small"
                          variant={"contained"}
                          fullWidth
                          style={{ borderRadius: "10px" }}
                          color="primary"
                          onClick={() => {
                            AddToCart(attributes);
                          }}
                          disabled={inCart(attributes.slug)}
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
          <Grid item xs={3} style={{position:"relative"}}>
            <Box
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                height: "86%",

                width: "340px",
                padding: "20px",
                position: "fixed",
                right: "10px",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  marginBottom: "20px",
                  fontSize: "24px",

                  fontWeight: 600,
                  fontFamily: "Montserrat",
                }}
              >
                Категорії
              </Typography>
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
                  fiterProduct("Контрактне виробництво");
                }}
                sx={{
                  width: "100%",
                }}
                text={"Контрактне виробництво"}
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
