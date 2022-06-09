import sendEmail from './../../lib/mail';


export default async function handler(req, res) {
  const message = {
    to: 'viktordmitryk3@gmail.com',
    subject: `Лист з оформленням замовлення для ${req.body.surname} ${req.body.name} ${req.body.middleName} `,
    text: `
      Ім'я: ${req.body.name},
      Телефон: ${req.body.phone},
      E-mail: ${req.body.email},
      Адреса відправлення:
      Місто: ${req.body.city.title},
      Відділення: ${req.body.warehouse.title},
      Список товарів:
      ${req.body.sendText}
      `,
  };
  sendEmail(message);
  console.log(message);
  res.send(`Дякуєм, замовлення відправлене , чекайте дзвінка оператора , ${req.body.name}!`);
  // res.send(`Hello!`);
  // console.log("REQ",req.body.name)
}