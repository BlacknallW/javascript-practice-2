//Returns a square banner wrapped around given text in function. Ridiculously brute forced.
const printBanner = (text) => {
    const box = "*"
    return `${box.repeat(text.length + 2)}\n${box + text + box}\n${box.repeat(text.length + 2)}` 
    }

console.log(printBanner("As fast as fast can get"))