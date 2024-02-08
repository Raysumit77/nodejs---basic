//slug
//properCase
//description generator
//email validation

// joinSlug.js

function joinSlug(slugs, separator = '-') {
    return slugs.join(separator);
}

module.exports = joinSlug;



// const toProperCase = (sentence) => {
//     return String.spilit
// }




// validateEmail.js

const validateEmail(email) {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

module.exports = validateEmail;
