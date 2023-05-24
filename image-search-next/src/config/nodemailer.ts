import nodemailer from 'nodemailer';

const { EMAIL_PASS, EMAIL } = process.env;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
});

export const mailOptions = {
  from: EMAIL,
  to: 'mohamed.harbouli.hb@gmail.com',
};
