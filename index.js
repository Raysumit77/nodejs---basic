const http = require("http");
const fs = requiew("fs");
const os = require("os");
const slugify = require("./slugify");
const validateEmail = require("./validateEmail");

http.createServer((req , res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
        JSON.stringify({
            data:"hello world!",
})
);
})
.listen(5000);
console.log("Application is running");

//fs 
 const result = fs.readFileSync("./hello.text").toString();
 console.log({result});
//os
 const mem = os.totalmem();
 console.log({memory:mem});

 //create your custom nodejs module

 // main.js



const email = "example@example.com";
const isValid = validateEmail(email);

console.log(isValid); 
//

const slugs = ['this', 'is', 'a', 'slug'];
const separator = '-';
const joinedSlug = joinSlug(slugs, separator);

console.log(joinedSlug);



