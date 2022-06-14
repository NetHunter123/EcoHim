import React from "react";
import Login from "./auth/login";
import MainLayout from "../layout/MainLayout";
import AboutUs from "./aboutUs";
import {Box, Button, Grid, Paper, Typography, useMediaQuery} from "@mui/material";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import glueInPackaging from "../public/images/glueInPackaging.jpg";
import glueInEurocube from "../public/images/eurocube.jpg";
import beautiMaterials from "../public/images/beautificationMaterials.jpg";
import buildingPalette from "../public/images/palette.jpeg";
import pipeline from "../public/images/pipeline.jpeg";
import handshake from "../public/images/handshake.jpg";
import useStyles from "../styles/homeStyle";
import NextLink from "next/link";
import {GetProductFetch} from "../actions";
import {useDispatch} from "react-redux";
import {useTheme} from "@mui/material/styles";

const Index = () => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const classes = useStyles();
  const dispatch = useDispatch()
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));


  const fadeInRight = {
    initial: {
      x: -160,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInLeft = {
    initial: {
      x: 160,
      opacity: 0,
      transition: { duration: 0.3, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <>
      <MainLayout>
        <Grid className={classes.mainWrapper} container rowSpacing={1} sx={{ p: 3 }}>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12} md={8} onClick={async ()=>{
             await dispatch(
                GetProductFetch(
                  `http://localhost:1337/api/products?populate=*&filters[category][$eq]=Клей ПВА дисперсія в промисловій тарі`
                )
              );
            }}>
              <NextLink href="/products" passHref >
                <div className={classes.textBoxWrapper}>
                  <Box className={classes.categoryBox}>
                    <Image
                      className={classes.imageCategory}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={glueInEurocube}
                      placeholder={"blur"}
                    />
                  </Box>

                  <Box className={classes.textBox}>
                    <Typography fontSize={16} fontWeight={600}>
                      Клей ПВА дисперсія в промисловій тарі
                    </Typography>
                    { !smDown &&
                    <Typography paragraph fontSize={14}>
                      <b>Транспортування:</b> Наша компанія пластифіковану
                      дисперсію транспортує за температури не нижче плюс 5°С.
                      <br /> <b>Зберігання: </b>
                      Зберігати дисперсію необхідно за температури не нижче плюс
                      5°С у щільно закритій тарі. Гарантійний термін зберігання
                      - 6 місяців з дати виробництва.
                    </Typography>}
                  </Box>
                </div>
              </NextLink>
            </Grid>
            <Grid item xs={12} md={4}  onClick={async ()=>{
             await dispatch(
                GetProductFetch(
                  `http://localhost:1337/api/products?populate=*&filters[category][$eq]=Клей ПВА в розфасовці`
                )
              );
            }}>
              <NextLink  href="/products" passHref  >
                <div className={classes.textBoxWrapper}
                    >
                  <Box className={classes.categoryBox}>
                    <Image
                      className={classes.imageCategory}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={glueInPackaging}
                      placeholder={"blur"}
                    />
                  </Box>

                  <Box className={classes.textBox}>
                    <Typography fontSize={16} fontWeight={600}>
                      Клей ПВА в розфасовці
                    </Typography>
                  </Box>
                </div>
              </NextLink>
            </Grid>
          </Grid>

          <Grid item xs={12} onClick={async ()=>{
           await dispatch(
              GetProductFetch(
                `http://localhost:1337/api/products?populate=*&filters[category][$eq]=Будівельні оздоблювальні матеріали`
              )
            );
          }}>
            <NextLink href="/products" passHref>
              <div className={classes.textBoxWrapper}>
                <Box className={classes.categoryBox}>
                  <Image
                    className={classes.imageCategory}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    src={buildingPalette}
                    // style={{ marginTop: "30px" }}
                    placeholder={"blur"}
                  />
                </Box>

                <Box className={classes.textBox}>
                  <Typography fontSize={16} fontWeight={600}>
                    Будівельні оздоблювальні матеріали
                  </Typography>
                  { !smDown &&
                  <Typography paragraph fontSize={14}>
                    <b>Виробнича компанія «ЕКОХІМ-ІФ»</b> пропонує вашій увазі
                    вододисперсійні матеріали торгової марки <b>Tim-color</b>.
                    <br /> Компанія пропонує мастики гідроізоляційні; готові
                    шпаклівки; грунтовки; акрилові лаки; фарби акрилові та
                    вінілові; структурні фарби та рельєфні.
                    <br /> З питань підбору матеріалу звертайтеся до менеджерів
                    нашої компанії.
                  </Typography>}
                </Box>
              </div>
            </NextLink>
          </Grid>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12} md={4}>
              <NextLink href="/manufacture" passHref>
                <div className={classes.textBoxWrapper}>
                  <Box className={classes.categoryBox}>
                    <Image
                      className={classes.imageCategory}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={handshake}
                      placeholder={"blur"}
                    />
                  </Box>

                  <Box className={classes.textBox}>
                    <Typography fontSize={16} fontWeight={600}>
                      Контрактне виробництво
                    </Typography>
                  </Box>
                </div>
              </NextLink>
            </Grid>
            <Grid item xs={12} md={8} onClick={async ()=>{
             await dispatch(
                GetProductFetch(
                  `http://localhost:1337/api/products?populate=*&filters[category][$eq]=Трубопровідна та запірна арматура`
                )
              );
            }}>
              <NextLink href="/products" passHref>
                <div className={classes.textBoxWrapper}>
                  <Box className={classes.categoryBox}>
                    <Image
                      className={classes.imageCategory}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={pipeline}
                      placeholder={"blur"}
                    />
                  </Box>

                  <Box className={classes.textBox}>
                    <Typography fontSize={16} fontWeight={600}>
                      Трубопровідна та запірна арматура
                    </Typography>
                    { !smDown &&
                    <Typography paragraph fontSize={14}>
                      Трубопровідна арматура призначений для управління потоками
                      рідин, газів і сипких матеріалів по трубопроводах. Дана
                      продукція застосовується в сфері видобутку нафти і газу,
                      їх переробці, тепло - і електроенергетиці, хімічній
                      промисловості.
                    </Typography>}
                  </Box>
                </div>
              </NextLink>
            </Grid>
          </Grid>
        </Grid>

      </MainLayout>
    </>
  );
};

export default Index;
