import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import {Box, Button, CardMedia, Divider, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import axios from "axios";
import Available from "../../components/Available";
import { GetProductFetch } from "../../actions";
import { useDispatch } from "react-redux";
import NextLink from "next/link";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {useTheme} from "@mui/material/styles";
const Product = ({ product }) => {
  const { attributes } = product[0];
  const dispatch = useDispatch();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  let cartItems;

  useEffect(() => {
    try {
      cartItems = JSON.parse(localStorage.getItem("cartItems"));
      console.log("Try", cartItems);
    } catch (e) {
      console.log(e);
      cartItems = [];
      console.log("ErrorCatch", cartItems, "Error", e);
    }
    console.log("product", product);
  }, []);

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

  return (
    <MainLayout>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "calc(100% - 100px)",
          margin: "20px 0",
          width: "100%",

        }}
      >
        <Grid
          container
          style={{
            minHeight: "inherit",
            width: smDown?"95%":"80%",
          }}
        >
          <Grid
            item
            container
            style={{
              padding:  smDown? "15px" : "30px 20px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              marginBottom: mdDown? "10px":"25px",
            }}
            columnSpacing={mdDown?0:2}
          >
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height={
                !mdDown? "350px":
                !smDown? "270px":"200px"
              }
                width="100%"
                image={
                  "http://localhost:1337" +
                  attributes?.image.data?.attributes?.url
                }
                alt={attributes?.image.data?.attributes?.alternativeText}
                style={{ borderRadius: "10px",marginBottom: mdDown?"15px":"0" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    marginBottom: "15px",
                    fontSize:  smDown?"20px":"24px",
                    fontWeight: 600,
                  }}
                >
                  {attributes?.title}
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    flexWrap:"wrap",
                    alignItems: "center",
                    marginBottom: mdDown? "0px":"20px",
                  }}
                >
                  <Box style={{ marginRight: "15px" }}>
                    <Available available={attributes?.availability} />
                  </Box>
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

                <Button
                  href="tel:+380951909922"
                  variant="text"
                  style={{
                    padding: "6px 0px",
                    textTransform: "none",
                    fontSize:  smDown?"18px":"20px",
                    display: "flex",
                    width: "fit-content",
                    marginBottom: mdDown? "0px":"15px",
                  }}
                >
                  <LocalPhoneIcon style={{ marginRight: "10px" }} />
                  Позвоніть нам!
                </Button>
                <NextLink href="/contacts" passHref>
                  <Button
                    variant="text"
                    style={{
                      width: "fit-content",
                      padding: "6px 0px",
                      textTransform: "none",
                      fontSize:  smDown?"18px":"20px",
                      marginBottom: mdDown? "0px":"15px",
                    }}
                  >
                    <MyLocationIcon style={{ marginRight: "10px" }} /> Адреса та
                    контакти
                  </Button>
                </NextLink>

                <Typography
                  variant="body2"
                  style={{  fontSize:  smDown?"18px":"20px", marginBottom: mdDown? "10px":"20px" }}
                >
                  Ціна: {attributes?.price + " " + attributes?.valueType}
                </Typography>
                <Button
                  size="small"
                  variant={"contained"}
                  fullWidth
                  style={{  fontSize:  smDown?"16px":"20px",borderRadius: "10px" }}
                  color="primary"
                  onClick={() => {
                    AddToCart(attributes);
                  }}
                  disabled={!attributes?.availability}
                >
                  Додати до Корзини
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            columnSpacing={mdDown?0:2}
            style={{
              padding:  smDown? "8px":"30px 20px",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          >
            <Box>
              <Box>
                <Typography
                  variant="body2"
                  style={{
                    fontSize:  smDown?"18px":"24px",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Опис Товару:
                </Typography>
                <p
                  style={{
                    fontSize:  smDown?"16px":"18px",
                    fontWeight: 500,
                    marginBottom: "25px",
                  }}
                >
                  {attributes?.description}
                </p>
              </Box>
              {attributes?.application != null && (
                <Box>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize:  smDown?"18px":"24px",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Застосування товару
                  </Typography>
                  <pre
                    style={{
                      fontSize:  smDown?"16px":"18px",
                      fontWeight: 500,
                      marginBottom: "25px",
                      whiteSpace: "pre-wrap",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {attributes.application}
                  </pre>
                </Box>
              )}
              {attributes?.productNature != null && (
                <Box>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize:  smDown?"18px":"24px",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Характер товару
                  </Typography>
                  <pre
                    style={{
                      fontSize:  smDown?"16px":"18px",
                      fontWeight: 500,
                      marginBottom: "25px",
                      whiteSpace: "pre-wrap",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {attributes.productNature}
                  </pre>
                </Box>
              )}
              {attributes?.specification?.length != 0 && (
                <Box>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize:  smDown?"18px":"24px",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Характеристики:
                  </Typography>
                  {attributes?.specification.map((item) => {
                    return (
                      <>
                      <Grid container columnSpacing={1}>
                        <Grid item xs={6}>
                          <p style={{ fontSize:  smDown?"14px":"16px",borderRight:"1px solid grey",wordWrap:"break-word"}}>{item.title}:</p>
                        </Grid>
                        <Grid item xs={6}>
                          <p style={{ fontSize:  smDown?"14px":"16px",}}>{item.value}</p>
                        </Grid>
                      </Grid>
                      <Divider/>
                      </>
                    );
                  })}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await axios
    .get(
      `http://localhost:1337/api/products?populate=*&filters[slug][$eq]=${id}`
    )
    .then((data) => {
      return data.data.data;
    });
  console.log("res", res);

  return { props: { product: res } };
}

export default Product;
