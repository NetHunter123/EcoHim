import React, { useCallback, useEffect, useMemo } from "react";
import MainLayout from "../../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { GetProductFetch } from "../../actions";
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

const Index = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const router = useRouter();
  // useCallback(() => {
  useEffect(() => {
    dispatch(GetProductFetch("http://localhost:1337/api/products?populate=*"));
  }, []);
  // }, [products]);

  console.log("products", products);
  return (
    <>
      <MainLayout>
        <Grid container>
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
                      }}
                    >
                      <CardActionArea
                        onClick={() =>
                          router.push("/products/" + attributes.slug)
                        }
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={
                            "http://localhost:1337" +
                            attributes?.image.data.attributes?.url
                          }
                          alt={attributes?.image.data.attributes?.alternativeText}
                        />
                        <CardContent style={{ padding: "10px 10px 6px" }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {attributes?.title}
                          </Typography>
                          {/*<Stack direction={"row"} justifyContent={"space-between"}>*/}
                          {/*  <Typography variant={"caption"} component="div">*/}
                          {/*    {attributes?.availability*/}
                          {/*      ? "є в наявності"*/}
                          {/*      : "немає в наявності"}*/}
                          {/*  </Typography>*/}
                          {/*  <Typography variant={"caption"} style={{display:"block", wordWrap:"wrap"}} component="div">*/}
                          {/*    {attributes?.saleType}*/}
                          {/*  </Typography>*/}
                          {/*</Stack>*/}
                          <Box style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                              <Typography variant={"caption"} component="div">
                                {attributes?.availability
                                  ? "є в наявності"
                                  : "немає в наявності"}
                              </Typography>
                              <Typography variant={"caption"} style={{display:"block", wordWrap:"wrap"}} component="div">
                                {attributes?.saleType}
                              </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
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
          <Grid item xs={3}>
            <Box></Box>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Index;
