//Prints a square based on size given when calling function.
const printSquare = (size) => {
    for (i = 0; i < size; i++){
        let square = "*"
        console.log(square.repeat(size))
    }
}

printSquare(5)
