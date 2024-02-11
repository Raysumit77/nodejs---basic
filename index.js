// const http = require("http");
// const fs = require("fs");
// const os = require("os");
// const slugify = require("./slugify");
// //const validateEmail = require("./validateEmail");

// http.createServer((req , res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(
//         JSON.stringify({
//             data:"hello world!",
// })
// );
// })
// .listen(5000);
// console.log("Application is running");

// //fs 
//  const result = fs.readFileSync("./hello.text").toString();
//  console.log({result});
// //os
//  const mem = os.totalmem();
//  console.log({memory:mem});

//  //create your custom nodejs module

//  // main.js
// const qrcode = require('qrcode');
// const validator = require("email-validator");
// const slugify = require('slugify');
// const toProperUpper = require("Proper-Upper-Case");
// const textParser = require("./modules/textParser");
// const result = textParser.ProperCase{

//     "CASL - roles with persisted pernission in nestjs"
// };
// const secondResult = toProperUpper{
//     "CASL - roles with persisted pernission in nestjs"
// };
// const thirdResult = slugify{
//     "CASL - roles with persisted pernission in nestjs"
// };
// const fouthResult = validator{
//     "sumitya@gmail.comn"
// }

// console.log({result, secondResult , thirdResult});






// const QRCode = require('qrcode')

// QRCode.toDataURL('I am a pony!', function (err, url) {
//   console.log(url)
// })

// const  QRCode = require('qrcode')

//  QRCode.toString( 'HAPPY CHOCALATE DAY DEAR MUSKAN JII(KAJALIYA)', {type:'terminal'}, function (err, url) {
//    console.log(url)
//  })
//  const slug = require('slug')
//  const print = console.log.bind(console, '>')
// print (slug('Develop success from failures.'))

// const isEmail = require('nice-is-email')
// isEmail('foo@bar.com') 
// isEmail('@bar') 

 // First, you need to install the qrcode package
// npm install qrcode

// const fs = require('fs');
// const qr = require('qrcode');

// // Function to generate QR code
// function generateQR(text, filename) {
//     qr.toFile(
//         filename,
//         text,
//         {
//             type: 'png',
//             errorCorrectionLevel: 'H', // High error correction level
//             scale: 10 // Size of the QR code
//         },
//         (err) => {
//             if (err) throw err;
//             console.log('QR code generated successfully!');
//         }
//     );
// }

// // Sample CV data
// const cvData = `
// Name: John Doe
// Position: Software Engineer
// Experience: 5 years
// Contact: john.doe@example.com
// Phone: +1234567890
// Address: 123 Main Street, City, Country
// `;

// // File name for the QR code
// const qrFilename = 'cv_qr.png';

// // Generate QR code for CV data
// generateQR(cvData, qrFilename);

// const qr = require('qrcode');
// const terminalImage = require('terminal-image');

// // Function to generate QR code for a given URL
// async function generateQR(url) {
//     try {
//         // Generate QR code as a data URI
//         const qrDataURI = await qr.toDataURL(url);

//         // Display the QR code in the terminal
//         console.log(await terminalImage.buffer(qrDataURI));
//     } catch (error) {
//         console.error('Error generating QR code:', error);
//     }
// }

// // Example URL (replace with your CV URL)
// const cvUrl = 'https://your-cv-url.com';

// // Generate QR code for CV URL
// generateQR(cvUrl);
 const {hashPw,checkPw } = require ("./bcrypt");
// const {mailer} = require("./mailer");
//  const sendMail =async (email,Sub) => {
//     return mailer(email,Sub)
//  };
//    sendMail("........","hlo karki kena hau" ).then((res) => {
//    console.log(res);
//     });
    
    const encryptPw = (password) => {
     return hashPw (password);
 };
 const checkPw = (password,hashPassword) => {
     return checkPw(pass, hashPassword);
 };
 const ePass = encryptPw('sumit');
 console.log({ ePass});

 const isValidPw = checkPw("sumit" ,ePass);
console.log({ isValidPw});