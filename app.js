const email = require('./email');
const pug = require('pug');


const message = {
  from: 'contact@cleberson.dev',
  to: 'email_divertido@email.com',
  subject: 'Envio de email com Node.js'
};

const templatePath = 'templates/email.pug';
message.html = pug.compileFile(templatePath)({ email: message.to });

email.sendMail(message, (err, info) => {
  if (err) return console.error(err);

  console.log(info);
});