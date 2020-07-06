"use strict";

const path = require('path');

const nodemailer = require('nodemailer');

const hbs = require('nodemailer-express-handlebars');

const Mailgen = require('mailgen');

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER_MT,
    pass: process.env.PASS_MT
  }
});
const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'HoraCode',
    link: 'https://mailgen.js/' //logo:'https://mailgen.js/img/logo.png'

  }
});
module.exports = {
  transport,
  mailGenerator
};