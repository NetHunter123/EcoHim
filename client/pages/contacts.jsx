import React from "react";
import MainLayout from "../layout/MainLayout";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    backgroundColor: theme.palette.primary.main,
    padding: "6px 15px",
    borderRadius: "20px",
    color: "white",
    marginBottom: "10px",
  },
  contactItem: {
    marginBottom: "3px",
    padding: "0px 0px 3px 0px",
  },
  contactLink: {
    textDecoration: "none",
  },
}));

const Contacts = () => {
  const classes = useStyles();

  return (
    <>
      <MainLayout>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography component={"h3"} className={classes.sectionTitle}>
              Контакти:
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              Назва фірми: ТОВ "ЕкоХім-ІФ"
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              Контактна особа: Наталія
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              Адреса: вул. Шевченка, 3., Івано-Франківськ, Україна
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              Телефон:
              <a className={classes.contactLink} href="tel:+380991061622">
                +380 (99) 106-16-22
              </a>
              - Відділ збуту,
              <a className={classes.contactLink} href="tel:+380951909922">
                +380 (95) 190-99-22
              </a>
              - Директор.
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              Email:
              <a
                className={classes.contactLink}
                href="mailto:ecohim.sintez@gmail.com"
              >
                ecohim.sintez@gmail.com
              </a>
            </Typography>
            <Typography
              component={"h3"}
              marginTop={"10px"}
              className={classes.sectionTitle}
            >
              Філії та представництва:
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              <b>Філія м. Харків:</b>
              <br />
              <Typography paragraph className={classes.contactItem}>
                Адреса: пр-т Тракторобудівників, 83-Г, Харків, Харківська
                область, Україна
              </Typography>
              <Typography paragraph className={classes.contactItem}>
                Телефон:
                <a className={classes.contactLink} href="tel:+380506054217">
                  +380 (50) 605-42-17
                </a>
                - Шило Віталій Олександрович
              </Typography>
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              <b>Філія м.Чернівці, ТОВ "УКРПРОГРЕС":</b>
              <br />
              <Typography paragraph className={classes.contactItem}>
                Адреса: пер. Складської, 4., Чернівці, Чернівецька область,
                Україна
              </Typography>
              <Typography paragraph className={classes.contactItem}>
                Телефон:
                <a className={classes.contactLink} href="tel:+380503741201">
                  +380 (50) 374-12-01
                </a>
                - Бойко Руслан Михайлович
              </Typography>
              <Typography paragraph className={classes.contactItem}>
                Email:
                <a
                  className={classes.contactLink}
                  href="mailto:ruslan-fly@ukr.net"
                >
                  ruslan-fly@ukr.net
                </a>
              </Typography>
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              <b>Філія м.Іршава:</b>
              <br />
              <Typography paragraph className={classes.contactItem}>
                Адреса: вул. Федорова, 20., Іршава, Закарпатська область,
                Україна
              </Typography>
              <Typography paragraph className={classes.contactItem}>
                Телефон:
                <a className={classes.contactLink} href="tel:+380673122662">
                  +380 (67) 312-26-62
                </a>
                - М'який Андрій Ігорович
              </Typography>
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography component={"h3"} className={classes.sectionTitle}>
              Місцезнаходження компанії:
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              Адреса виробництва: ЗТОС Барва, вул. Галицька, с. Ямниця,
              Івано-Франківська область, 77422
            </Typography>
            <Typography paragraph className={classes.contactItem}>
              Адреса для навігації: 2P63 + 4W Тязів, Івано-Франківська область
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.7967994089613!2d24.70466040165982!3d48.919263581196724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c140f9071b8d%3A0xa0cf6f1bc47f9ff!2z0JXQmtCe0KXQhtCcLdCG0KQg0KLQntCS!5e0!3m2!1suk!2sua!4v1653779541899!5m2!1suk!2sua"
              width="100%"
              height="570"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Contacts;
