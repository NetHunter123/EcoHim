import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import {Box, Button, CardMedia, Divider, Grid, Stack, Typography} from "@mui/material";
import axios from "axios";
import Available from "../../components/Available";
import { GetProductFetch } from "../../actions";
import { useDispatch } from "react-redux";
import NextLink from "next/link";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Product = ({ product }) => {
  const { attributes } = product[0];
  const dispatch = useDispatch();

  let cartItems;
  console.log(
    "attributes?.image.data.attributes?.alternativeText",
    attributes?.image.data.attributes?.alternativeText
  );

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
            width: "80%",
          }}
        >
          <Grid
            item
            container
            style={{
              padding: "30px 20px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              marginBottom: "25px",
            }}
            columnSpacing={2}
          >
            <Grid item xs={6}>
              <CardMedia
                component="img"
                height="350px"
                width="100%"
                image={
                  "http://localhost:1337" +
                  attributes?.image.data.attributes?.url
                }
                alt={attributes?.image.data.attributes?.alternativeText}
                style={{ borderRadius: "10px" }}
              />
            </Grid>
            <Grid item xs={6}>
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
                    fontSize: "24px",
                    fontWeight: 600,
                  }}
                >
                  {attributes?.title}
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
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
                    fontSize: "20px",
                    display: "flex",
                    width: "fit-content",
                    marginBottom: "15px",
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
                      fontSize: "20px",
                      marginBottom: "15px",
                    }}
                  >
                    <MyLocationIcon style={{ marginRight: "10px" }} /> Адреса та
                    контакти
                  </Button>
                </NextLink>

                <Typography
                  variant="body2"
                  style={{ fontSize: "20px", marginBottom: "20px" }}
                >
                  Ціна: {attributes?.price + " " + attributes?.valueType}
                </Typography>
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
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            columnSpacing={2}
            style={{
              padding: "30px 20px",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          >
            <Box>
              <Box>
                <Typography
                  variant="body2"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Опис Товару:
                </Typography>
                <p
                  style={{
                    fontSize: "18px",
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
                      fontSize: "24px",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Застосування товару
                  </Typography>
                  <pre
                    style={{
                      fontSize: "18px",
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
                      fontSize: "24px",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Характер товару
                  </Typography>
                  <pre
                    style={{
                      fontSize: "18px",
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
                      fontSize: "24px",
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
                          <p>{item.title}:</p>
                        </Grid>
                        <Grid item xs={6}>
                          <p>{item.value}</p>
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
