//prints a box with function-defined parameters
const printBox = (width, height) =>{
    const box = "*"
    const empty = " "
    for (i = 0; i < height + 1; i++){
        if (i === 0 || i === height ){
            console.log(box.repeat(width))
        } 
        else {
            console.log(box + (empty.repeat(width -2)) + box)
        }
    }
}

printBox(5,10)  