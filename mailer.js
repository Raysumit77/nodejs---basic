//write a node module to send an email(nodemailer)
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true,
   auth: {
     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
     user: ".......",
     pass: ".......",
   },
 });
const mailer = async(email,subject) => {
   const info = await transporter.sendMail({
       from: '"Raktim shrestha" <foo@example.com>', // sender address
       to: email, // list of receivers
       subject: subject, // Subject lin
       html: "<b>Hello world?</b>", // html body
     });
     return info.messageId;
};
module.exports = {mailer};


