import React from "react";
import Login from "./auth/login";
import MainLayout from "../layout/MainLayout";
import AboutUs from "./aboutUs";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import glueInPackaging from "../public/images/glueInPackaging.jpg";
import glueInEurocube from "../public/images/eurocube.jpg";
import beautiMaterials from "../public/images/beautificationMaterials.jpg";
import buildingPalette from "../public/images/palette.jpeg";
import pipeline from "../public/images/pipeline.jpeg";
import handshake from "../public/images/handshake.jpg";

const useStyles = makeStyles((theme) => ({
  categoryBox: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    minHeight: "28vh",
    padding: "20px",
    overflow: "hidden",
  },
  imageCategory: {
    borderRadius: "20px",
  },
  textBoxWrapper: {
    position: "relative",
  },
  textBox: {
    position: "absolute",
    borderRadius: "20px",
    padding: "10px",
    overflow: "hidden",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#00000075",
    color: "white",
  },
}));

const Index = () => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const classes = useStyles();

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
        <Grid container rowSpacing={1}>
          <Grid item container xs={12} columnSpacing={1}>
            <Grid item xs={8}>
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
                  <Typography paragraph fontSize={14}>
                    <b>Транспортування:</b> Наша компанія пластифіковану
                    дисперсію транспортує за температури не нижче плюс 5°С.
                    <br /> <b>Зберігання: </b>
                    Зберігати дисперсію необхідно за температури не нижче плюс
                    5°С у щільно закритій тарі. Гарантійний термін зберігання -
                    6 місяців з дати виробництва.
                  </Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.textBoxWrapper}>
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
            </Grid>
          </Grid>

          <Grid item xs={12}>
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
                <Typography paragraph fontSize={14}>
                  <b>Виробнича компанія «ЕКОХІМ-ІФ»</b> пропонує вашій увазі
                  вододисперсійні матеріали торгової марки <b>Tim-color</b>.
                  <br /> Компанія пропонує мастики гідроізоляційні; готові
                  шпаклівки; грунтовки; акрилові лаки; фарби акрилові та
                  вінілові; структурні фарби та рельєфні.
                  <br /> З питань підбору матеріалу звертайтеся до менеджерів
                  нашої компанії.
                </Typography>
              </Box>
            </div>
          </Grid>
          <Grid item container xs={12} columnSpacing={1}>
            <Grid item xs={4}>
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
            </Grid>
            <Grid item xs={8}>
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
                  <Typography paragraph fontSize={14}>
                    Трубопровідна арматура призначений для управління потоками
                    рідин, газів і сипких матеріалів по трубопроводах. Дана
                    продукція застосовується в сфері видобутку нафти і газу, їх
                    переробці, тепло - і електроенергетиці, хімічній
                    промисловості.
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid container spacing={1} component={motion.div} variants={stagger}>*/}
        {/*  <Grid item container columnSpacing={1}>*/}
        {/*    <Grid*/}
        {/*      item*/}
        {/*      xs={6}*/}
        {/*      component={motion.div}*/}
        {/*      justifyContent={"center"}*/}
        {/*      variants={fadeInRight}*/}
        {/*      style={{ border: "1px solid #3E5622" }}*/}
        {/*    >*/}
        {/*      <Box*/}
        {/*        style={{*/}
        {/*          position: "relative",*/}
        {/*          top: "0px",*/}
        {/*          bottom: "0px",*/}
        {/*          width: "70%",*/}
        {/*          height: "20vh",*/}
        {/*          overflow: "hidden",*/}
        {/*          margin: "0 auto",*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <Image*/}
        {/*          layout="fill"*/}
        {/*          objectFit="cover"*/}
        {/*          quality={100}*/}
        {/*          src={"/../public/images/glueInPackaging2.jpg"}*/}
        {/*          // style={{ marginTop: "30px" }}*/}
        {/*        />*/}
        {/*      </Box>*/}
        {/*    </Grid>*/}
        {/*    <Grid*/}
        {/*      item*/}
        {/*      container*/}
        {/*      justifyContent={"center"}*/}
        {/*      xs={6}*/}
        {/*      component={motion.div}*/}
        {/*      variants={fadeInLeft}*/}
        {/*      style={{ border: "1px solid #3E5622" }}*/}
        {/*    >*/}
        {/*      <Box*/}
        {/*        style={{*/}
        {/*          display: "flex",*/}
        {/*          flexDirection: "column",*/}
        {/*          justifyContent: "center",*/}
        {/*          // height: "17vh",*/}
        {/*          // backgroundColor: "Yellow",*/}
        {/*          padding: "15px",*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <Typography fontSize={16} fontWeight={600}>*/}
        {/*          Клей ПВА дисперсія в промисловій тарі*/}
        {/*        </Typography>*/}
        {/*        <Typography paragraph fontSize={14}>*/}
        {/*          Транспортування Наша компанія пластифіковану дисперсію*/}
        {/*          транспортує за температури не нижче плюс 5°С. Зберігання*/}
        {/*          Зберігати дисперсію необхідно за температури не нижче плюс 5°С*/}
        {/*          у щільно закритій тарі. Гарантійний термін зберігання - 6*/}
        {/*          місяців з дати виробництва.*/}
        {/*        </Typography>*/}
        {/*      </Box>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}

        {/*  <Grid item container columnSpacing={1}>*/}
        {/*    <Grid*/}
        {/*      item*/}
        {/*      xs={8}*/}
        {/*      style={{ height: "100px", border: "1px solid #3E5622" }}*/}
        {/*    >*/}
        {/*      {" "}*/}
        {/*    </Grid>*/}
        {/*    <Grid*/}
        {/*      item*/}

        {/*      xs={4}*/}
        {/*      style={{*/}
        {/*        border: "1px solid #3E5622",*/}
        {/*        backgroundColor: "#3E5622",*/}
        {/*        padding: "10px",*/}
        {/*        borderRadius: "15px",*/}
        {/*        height: "20vh",*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <Grid item >*/}
        {/*        <Box*/}
        {/*          style={{*/}
        {/*            position: "relative",*/}
        {/*            height: "12vh",*/}
        {/*            overflow: "hidden",*/}
        {/*            margin: "0 auto",*/}
        {/*            borderRadius: "20px",*/}
        {/*            marginBottom: "15px",*/}
        {/*            width:"70%"*/}
        {/*          }}*/}
        {/*        >*/}
        {/*          <Image*/}
        {/*            layout="fill"*/}
        {/*            objectFit="cover"*/}
        {/*            quality={100}*/}
        {/*            src={"/../public/images/glueInPackaging2.jpg"}*/}
        {/*          />*/}
        {/*        </Box>*/}
        {/*      </Grid>*/}
        {/*      <Grid item>*/}
        {/*        <Typography*/}
        {/*          fontSize={16}*/}
        {/*          fontWeight={600}*/}
        {/*          textAlign={"center"}*/}
        {/*          color={"white"}*/}
        {/*          marginTop={"auto"}*/}
        {/*        >*/}
        {/*          Клей ПВА дисперсія в промисловій тарі*/}
        {/*        </Typography>*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}

        {/*<Grid xs={12} style={{*/}
        {/*  border: "1px solid #3E5622",*/}
        {/*  backgroundColor: "#3E5622",*/}
        {/*  padding: "10px",*/}
        {/*  borderRadius: "15px",*/}
        {/*  height: "20vh",*/}
        {/*}}>*/}

        {/*  </Grid>*/}
        {/*</Grid>*/}

        {/*<motion.div*/}
        {/*  initial={{ scale: 0 }}*/}
        {/*  animate={{ rotate: 360, scale: 1 }}*/}
        {/*  transition={{*/}
        {/*    type: "spring",*/}
        {/*    stiffness: 260,*/}
        {/*    damping: 20*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Button variant={"outlined"}>Sign</Button>*/}
        {/*</motion.div>*/}
        {/*</motion.div>*/}
      </MainLayout>
    </>
  );
};

export default Index;
