const email = require('./email');
const pug = require('pug');


const message = {
  from: 'contact@cleberson.dev',
  to: 'email_divertido@email.com',
  subject: 'Envio de email com Node.js',
  attachments: [
    { 
      filename: 'seu-email.jpg',
      path: 'https://i.pinimg.com/originals/62/42/c7/6242c76a8015b9d9484222e87fdcc38e.jpg'
    }
  ]
};

const templatePath = 'templates/email.pug';
message.html = pug.compileFile(templatePath)({ email: message.to });

email.sendMail(message, (err, info) => {
  if (err) return console.error(err);

  console.log(info);
});