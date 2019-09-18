//Takes in a string and an offset value (key), then returns an encyrpted uppercase message.
const cipher = (str, key) =>{
    return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
}

console.log(cipher("This is taken basically word for word, letter for letter, from learnersbucket.", 13))