const nodemailer = require('nodemailer');

if (!process.env.MAILTRAP_USERNAME || !process.env.MAILTRAP_PASSWORD) {
  throw new Error("Credenciais pendentes");
}

const { MAILTRAP_USERNAME: user, MAILTRAP_PASSWORD: pass } = process.env;

module.exports = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: { user, pass }
});;