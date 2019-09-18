//Counts from starting number up to ending number, inclusive.
const printNumbers = (start, end) => {
    while (start < end + 1){
        console.log(start++)
    }
}

printNumbers(1,10)

//Same as above but with for loop
const printNumbers2 = (start,end) => {
    for (i = 0;start < end +1; console.log(start ++));
}

printNumbers2(0, 10)