const email = require('./email');



const message = {
  from: 'contact@cleberson.dev',
  to: 'email_divertido@email.com',
  subject: 'Envio de email com Node.js'
};

message.text = `Olá, ${message.to}!`;

email.sendMail(message, (err, info) => {
  if (err) return console.error(err);

  console.log(info);
});