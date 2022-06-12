import React from "react";
import MainLayout from "../layout/MainLayout";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import teamHandshake from "../public/images/teamHandshake.jpg";
import professional from "../public/images/professional.jpg";
import factoryQuality from "../public/images/factoryQuality.jpg";
import documentQuality from "../public/images/documentsQuality.jpg";
import Image from "next/image";
import TableInfo from "../components/TableInfo";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  aboutUsImg: {
    position: "relative",
    minHeight: "35vh",
    padding: "20px",
    overflow: "hidden",
    width: "100%",
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "28vh",
    height: "100%",
    padding: "0 20px",
    [theme.breakpoints.down("lg")]: {
      padding: "0 10px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
    },
  },
  boxTitle: {
    fontSize: "18px",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  description: {
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  textList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "28vh",
    padding: "20px",
    overflow: "hidden",
    textAlign:"center",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 20px",
},
  },
  textListItem:{
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign:"left",
      wordWrap:"wrap"
    },
  }
}));

const AboutUs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <MainLayout>
        <Grid
          container
          rowSpacing={smDown?2:4}
          style={{
            backgroundColor: "#fff",
          }}
        >
            <Grid item xs={12} sm={7} md={6} order={smDown?2:1}>
              <Box className={classes.textBox}>
                <Typography className={classes.boxTitle}>
                  Виробнича компанія «ЕКОХІМ-ІФ»
                </Typography>
                <Typography className={classes.description} paragraph>
                  Ми команда професіоналів цілеспрямованих і динамічних, що
                  працюють на ринку України за німецькими технологіями. Основні
                  напрямки діяльності компанії: виробництво полівінілацетатної
                  дисперсії та клеїв ПВА, загально будівельного і спеціального
                  призначення; виробництво сільськогосподарських добрив; а також
                  випуск спеціалізованої хімічної продукції під замовлення з
                  використанням профільного обладнання.
                </Typography>
              </Box>
            </Grid>
            <Grid item container alignItems={"center"} xs={12} sm={5} md={6} order={smDown?1:2}>
              <Box className={classes.aboutUsImg}>
                <Image
                  // className={classes.imageCategory}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  src={teamHandshake}
                  alt={"Image"}
                  // style={{ marginTop: "30px" }}
                  placeholder={"blur"}
                />
              </Box>
            </Grid>
          <Grid item container alignItems={"center"} xs={12} sm={5} md={6} order={3}>
            <Box className={classes.aboutUsImg}>
              <Image
                // className={classes.imageCategory}
                layout="fill"
                objectFit="cover"
                quality={100}
                src={professional}
                alt={"Image"}
                // style={{ marginTop: "30px" }}
                placeholder={"blur"}
              />
            </Box>
          </Grid>
          <Grid item item xs={12} sm={7} md={6} order={4}>
            <Box className={classes.textBox}>
              <Typography className={classes.boxTitle}>
                Головний принцип діяльності компанії
              </Typography>
              <Typography paragraph className={classes.description}>
                Професіоналізм і функціональність нашого виробництва. Високий
                рівень кваліфікації наших співробітників — це гарантія
                виробництва всіх видів матеріалів за сучасними технологіями із
                суворим дотриманням норм і правил, відповідно до особливих
                побажань клієнта.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={6} order={smDown?6:5}>
            <Box className={classes.textBox}>
              <Typography className={classes.boxTitle}>
                Пріоритетний напрямок розвитку компанії
              </Typography>
              <Typography paragraph className={classes.description}>
                Наразі нашим приорітетом є виробництво дисперсій і клеїв ПВА
                спеціального призначення. У зв'язку з високим рівнем вимог до
                даного сегменту продукції, на підприємстві особлива увага
                приділяється якості.
                <br />
                Вся продукція виробляється на високоякісній сировині західних
                виробників. Всі сировинні номенклатури проходять{" "}
                <b>вхідний контроль</b> якості. Вся готова продукція проходити{" "}
                <b>вихідний контроль</b> якості.
              </Typography>
            </Box>
          </Grid>
          <Grid item container alignItems={"center"} xs={12} sm={5} md={6} order={smDown?5:6}>
            <Box className={classes.aboutUsImg}>
              <Image
                // className={classes.imageCategory}
                layout="fill"
                objectFit="cover"
                quality={100}
                src={factoryQuality}
                alt={"Image"}
                // style={{ marginTop: "30px" }}
                placeholder={"blur"}
              />
            </Box>
          </Grid>
          <Grid item container alignItems={"center"} xs={12} sm={5} md={6} order={smDown?7:8}>
            <Box className={classes.aboutUsImg}>
              <Image
                // className={classes.imageCategory}
                layout="fill"
                objectFit="cover"
                quality={100}
                src={documentQuality}
                alt={"Image"}
                // style={{ marginTop: "30px" }}
                placeholder={"blur"}
              />
            </Box>
          </Grid>
          <Grid item  xs={12} sm={7} md={6} order={smDown?7:8}>
            <Box className={classes.textBox}>
              <Typography className={classes.boxTitle} textAlign={"center"}>
                Вся продукція «ЕКОХІМ-ІФ» має сертифікати відповідності,
                свідоцтва про державну реєстрацію, санітарно-епідеміологічні
                висновки, декларації відповідності, протоколи випробувань
                продукції, висновки про дослідницькі роботи.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} order={9}>
            <Box className={classes.textList}>
              <Typography
                fontSize={18}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                Для Вас Співпраця З Нами Це:
              </Typography>
              <Typography className={classes.textListItem} paragraph fontSize={16} margin={"3px 0px"}>
                — зручність подачі заявок
              </Typography>
              <Typography className={classes.textListItem} paragraph fontSize={16} margin={"3px 0px"}>
                — оперативність обробки замовлення
              </Typography>
              <Typography className={classes.textListItem} paragraph fontSize={16} margin={"3px 0px"}>
                — стабільність постачань
              </Typography>
              <Typography className={classes.textListItem} paragraph fontSize={16} margin={"3px 0px"}>
                — впевненість в якості продукції, що постачається
              </Typography>
              <Typography className={classes.textListItem} paragraph fontSize={16} margin={"3px 0px"}>
                — економія коштів
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} order={10}>
            <Box className={classes.textList}>
              <Typography
                fontSize={18}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                Наші Переваги:
              </Typography>
              <Typography className={classes.textListItem} paragraph fontSize={16} margin={"3px 0px"}>
                — команда професіоналів
              </Typography>
              <Typography className={classes.textListItem} paragraph fontSize={16} margin={"3px 0px"}>
                — тісний контакт з клієнтами
              </Typography>
              <Typography className={classes.textListItem} paragraph fontSize={16} margin={"3px 0px"}>
                — адаптація рецептур під задані властивості
              </Typography>
              <Typography className={classes.textListItem} paragraph fontSize={16} margin={"3px 0px"}>
                — комплексний підхід
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} order={11}>
            <Box minHeight={"10vh"}>
              <Typography fontSize={smDown?20:24} style={{padding:smDown?"0 10px 30px":"0"}} fontWeight={600} textAlign={"center"}>
                Відчуй різницю від роботи з виробником!
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/*<TableInfo/>*/}
      </MainLayout>
    </>
  );
};

export default AboutUs;
