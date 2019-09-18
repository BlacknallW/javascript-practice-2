//Returns factors of given number in function
const factors = (num) => {
    factorArray = []
    for (i = 1; i < num + 1; i++){
        if (num % i === 0){
            factorArray = [i,...factorArray];
        }
    }return factorArray
}

console.log(factors(300))