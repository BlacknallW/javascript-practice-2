//Takes an array and returns a new array with only the positive numbers from the original array
let numbers = [4, 5, 6, 7, -3, -5, 6]

const positive = (value, index, array) => {
    return value > 0;
}

let positiveNums = numbers.filter(positive);

console.log(positiveNums)

//Same as above, but with even numbers

let fullList = [9, 8, 18, 25, 21, 5, 6]

const evenFunction = (value, index, array) => {
    return value % 2 == 0
}

let onlyEvens = fullList.filter(evenFunction)

console.log(onlyEvens)