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
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import teamHandshake from "../public/images/teamHandshake.jpg";
import professional from "../public/images/professional.jpg";
import factoryQuality from "../public/images/factoryQuality.jpg";
import documentQuality from "../public/images/documentsQuality.jpg";
import Image from "next/image";
import TableInfo from "../components/TableInfo";

const useStyles = makeStyles((theme) => ({
  aboutUsImg: {
    position: "relative",
    minHeight: "28vh",
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
    padding: "20px",
  },
  textList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "28vh",
    padding: "20px",
    overflow: "hidden",
  },
}));
const AboutUs = () => {
  const classes = useStyles();
  return (
    <>
      <MainLayout>
        <Grid container rowSpacing={4}>
          <Grid item xs={6}>
            <Box className={classes.textBox}>
              <Typography fontSize={18} fontWeight={600}>
                Виробнича компанія «ЕКОХІМ-ІФ»
              </Typography>
              <Typography paragraph fontSize={16}>
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
          <Grid item container alignItems={"center"} xs={6}>
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
          <Grid item container alignItems={"center"} xs={6}>
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
          <Grid item xs={6}>
            <Box className={classes.textBox}>
              <Typography fontSize={18} fontWeight={600}>
                Головний принцип діяльності компанії
              </Typography>
              <Typography paragraph fontSize={16}>
                Професіоналізм і функціональність нашого виробництва. Високий
                рівень кваліфікації наших співробітників — це гарантія
                виробництва всіх видів матеріалів за сучасними технологіями із
                суворим дотриманням норм і правил, відповідно до особливих
                побажань клієнта.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.textBox}>
              <Typography fontSize={18} fontWeight={600}>
                Пріоритетний напрямок розвитку компанії
              </Typography>
              <Typography paragraph fontSize={16}>
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
          <Grid item container alignItems={"center"} xs={6}>
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
          <Grid item container alignItems={"center"} xs={6}>
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
          <Grid item xs={6}>
            <Box className={classes.textBox}>
              <Typography fontSize={18} fontWeight={600} textAlign={"center"}>
                Вся продукція «ЕКОХІМ-ІФ» має сертифікати відповідності,
                свідоцтва про державну реєстрацію, санітарно-епідеміологічні
                висновки, декларації відповідності, протоколи випробувань
                продукції, висновки про дослідницькі роботи.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.textList}>
              <Typography fontSize={18} fontWeight={600} textTransform={"uppercase"}>
                Для Вас Співпраця З Нами Це:
              </Typography>
              <Typography paragraph fontSize={16} margin={"3px 0px"}>
                — зручність подачі заявок
              </Typography>
              <Typography paragraph fontSize={16} margin={"3px 0px"}>
                — оперативність обробки замовлення
              </Typography>
              <Typography paragraph fontSize={16} margin={"3px 0px"}>
                — стабільність постачань
              </Typography>
              <Typography paragraph fontSize={16} margin={"3px 0px"}>
                — впевненість в якості продукції, що постачається
              </Typography>
              <Typography paragraph fontSize={16} margin={"3px 0px"}>
                — економія коштів
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.textList}>
              <Typography fontSize={18} fontWeight={600} textTransform={"uppercase"}>
                Наші Переваги:
              </Typography>
              <Typography paragraph fontSize={16} margin={"3px 0px"}>
                — команда професіоналів
              </Typography>
              <Typography paragraph fontSize={16} margin={"3px 0px"}>
                — тісний контакт з клієнтами
              </Typography>
              <Typography paragraph fontSize={16} margin={"3px 0px"}>
                — адаптація рецептур під задані властивості
              </Typography>
              <Typography paragraph fontSize={16} margin={"3px 0px"}>
                — комплексний підхід
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box minHeight={"10vh"}>
              <Typography fontSize={24} fontWeight={600} textAlign={"center"}>
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
