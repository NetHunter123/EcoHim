import React from "react";
import MainLayout from "../layout/MainLayout";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  textBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "20px",
    height: "100%",
    padding: "20px",
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "10px",
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
    // minHeight: "28vh",
    padding: "20px",
    // overflow: "hidden",
    textAlign: "center",
    width: "100%",
    margin: "0 auto",
    borderRadius: "20px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 20px",
    },
  },
  textListItem: {
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "left",
      wordWrap: "wrap",
    },
  },
}));

const Manufacture = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <MainLayout>
      <Grid
        container
        rowSpacing={smDown ? 1 : 2}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 10px",
        }}
      >
        <Grid item>
          <Box className={classes.textBox}>
            <Typography className={classes.boxTitle}>
              Контрактне виробництво
            </Typography>
            <Typography paragraph className={classes.description}>
              Випуск спеціалізованої хімічної продукції на замовлення з
              використанням профільного обладнання. <b>ТОВ «ЕКОХІМ-ІФ»</b>
              володіє всіма необхідними ресурсами і технологічними можливостями
              для організації контрактного виробництва хімії за технічним
              завданням замовника у великих промислових обсягах і
              дрібносерійного партіями. Система контролю якості здійснює повне
              дотримання технологічного циклу і компетентний контроль готової
              продукції відповідно до вимог замовника. Ми гарантуємо оперативне
              та ефективне вирішення всіх питань і взаємовигідне
              співробітництво!
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.textBox}>
            <Typography className={classes.boxTitle}>
              Меморандум щодо нерозголошення конфіденційної інформації
            </Typography>
            <Typography paragraph className={classes.description}>
              <b>ТОВ «ЕКОХІМ-ІФ»</b> в своїй діяльності дотримується основних
              принципів нерозголошення комерційної інформації, переданої
              партнерами (замовниками) в рамках укладених договорів підряду на
              контрактне виробництво хімічної продукції і що стосується секретів
              виробництва, рецептури, інтелектуальної та іншої конфіденційної
              інформації. Беручи до уваги намір <b>ТОВ «ЕКОХІМ-ІФ»</b>{" "}
              встановити відносини партнерства з потенційними замовниками для
              виробництва хімічної продукції на власних потужностях нашої
              організації на основі взаємної вигоди, з метою забезпечення
              збереження переданої замовниками інформації про секрети
              виробництва продукції, усвідомлюючи значення нерозголошення такої
              інформації третім особам, <b>ТОВ «ЕКОХІМ-ІФ»</b> зобов'язується
              нести всю повноту відповідальності за витік цієї інформації шляхом
              укладення з кожним клієнтом відповідної Угоди про нерозголошення
              конфіденційної інформації.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.textBox}>
            <Typography className={classes.boxTitle}>
              ПОВНИЙ ЦИКЛ КОНТРАКТНОГО ВИРОБНИЦТВА ТОВ «ЕКОХІМ-ІФ»
            </Typography>
            <Typography paragraph className={classes.description}>
              Надаємо послуги контрактного виробництва для наступних галузей:
              нафтохімія, агрохімія, автохімія, спеціальна хімія (теплоносії,
              антикорозійні засоби), побутова хімія, лакофарбова хімія,
              будівельна хімія, для обробки деревини (антисептики, протипожежні
              склади з антіперенами) та інші.
            </Typography>
          </Box>
        </Grid>
        <Grid item style={{ width: mdDown ? "100%" : "80%" }}>
          <Box className={classes.textList}>
            <Typography
              fontSize={mdDown ? 16 : 18}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              Хімічні процеси і технологічні операції, які ми здійснюємо:
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Нагрівання-охолодження
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Змішання
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Емульгування
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Нейтралізація
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Синтез
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Транспортування-переміщення
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Розфасовка - автоцистерни, куби, бочки, каністри
            </Typography>
          </Box>
        </Grid>
        <Grid item style={{ width: mdDown ? "100%" : "80%" }}>
          <Box className={classes.textList}>
            <Typography
              fontSize={mdDown ? 16 : 18}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              Лабораторні дослідження і випробування:
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Вхідний контроль сировини та матеріалів
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Розробка технології отримання продукції
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Операційний контроль виробництва
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Паспортизація
            </Typography>
          </Box>
        </Grid>
        <Grid item style={{ width: mdDown ? "100%" : "80%" }}>
          <Box className={classes.textList}>
            <Typography
              fontSize={mdDown ? 16 : 18}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              Фасовка і перефасовка давальницької сировини в тару меншого /
              більшого обсягу:
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Органічні розчинники, сольвенти
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Гліколі
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Масла (касторове, пальмове, вазелінове, соняшникове)
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Гліцерин
            </Typography>{" "}
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Сорбітол
            </Typography>{" "}
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Гальмівні рідини
            </Typography>
            <Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — Кислоти (стеаринова, азотна, соляна)
            </Typography><Typography
              className={classes.textListItem}
              paragraph
              margin={"3px 0px"}
            >
              — ПАР та ін.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Manufacture;
