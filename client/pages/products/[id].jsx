import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import Available from "../../components/Available";
import { GetProductFetch } from "../../actions";
import { useDispatch } from "react-redux";

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
          marginTop: "20px",
        }}
      >
        <Stack
          style={{
            minHeight: "inherit",
            width: "80%",
          }}
        >
          <Grid
            container
            style={{
              padding: "30px 20px",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
            columnSpacing={2}
          >
            <Grid item xs={6}>
              <CardMedia
                component="img"
                height="400px"
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
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    marginBottom: "auto",
                    fontSize: "30px",
                    fontWeight: 600,
                  }}
                >
                  {attributes?.title}
                </Typography>
                <Box style={{ display: "flex", alignItems: "center" }}>
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "18px" }}
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
          <Grid> <Box>
            <Typography
              variant="body2"
              style={{ fontSize: "18px" }}
            >
              Опис Товару:
            </Typography>
          </Box></Grid>
          <Grid></Grid>
        </Stack>
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
