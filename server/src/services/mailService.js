import nodemailer from 'nodemailer';

export default {
  async sendMail(to, subject, message) {
    const transporter = nodemailer.createTransport(getNodeMailerOptions());

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      html: `<p>${message}</p>`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Mail sent', info); // eslint-disable-line no-console
    } catch (error) {
      console.log('Error sending mail: ', error); // eslint-disable-line no-console
    }
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
