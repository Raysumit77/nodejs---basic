//write a node module to encrypt the password(byscripyjs



const bcrypt = require('bcryptjs');
const hashPassword = (password) => {
    return bcryptjs.hashSync(password, 10);
};

const checkPassword = (password , hashPassword) => {
return bcryptjs.compareSync(passwoerd,hashPassword);
};
module.exports =( hashPassword,checkPassword);
