import nodemailer from 'nodemailer';

export default {
  sendMail(to, message) {
    const transporter = nodemailer.createTransport(getNodeMailerOptions());

    const mailOptions = {
      from: 'jseminck.belgium@gmail.com',
      to: 'joachim@seminck.be',
      subject: 'Test',
      html: '<p>This is a test</p>',
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  },
};

function getNodeMailerOptions() {
  return {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  };
}
