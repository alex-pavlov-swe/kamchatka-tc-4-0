const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('', express.static(path.join(__dirname, 'client')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/send', (req, res) => {
  res.render('contact', { layout: false });
});

app.post('/send', async (req, res) => {
  const output = `
  <h3>New request</h3>
  <p>${req.body.name}</p>
  <p>${req.body.email}</p>
  <p>${req.body.text}</p>
  `;

  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.jino.ru',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'test@kamchatka-tc.ru',
      pass: '12345678'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Kamchatka Travel 👻" <test@kamchatka-tc.ru>', // sender address
    to: 'pavlov.cmc@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  console.log(output);
  res.send(output);
});

app.listen(5000, () => {
  console.log('Server started... ');
});
