import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  service:'yahoo',
  secure: false,
  auth: {
    user: 'ecohimsintezif@yahoo.com',
    pass: 'myoggmenstcrtlbu'
  },
  // tls: {rejectUnauthorized: false},
  debug:false,
}, {
  from: 'EcoHimSintez-IF <ecohimsintezif@yahoo.com>'
});

const sendEmail = (message) => {
  smtpTransport.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully", info);
    }
    smtpTransport.close();
  });
}

export default sendEmail;