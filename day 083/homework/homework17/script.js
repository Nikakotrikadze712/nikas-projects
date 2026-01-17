let number = Number(prompt('enter number: '))
if (number > 20) {
    if (number % 2 == 0) {
        console.log(number * 2)
    } 
    else {
        console.log(number * 3)
    }
} 
else {
    if (number % 3 == 0) {
        console.log(number / 3)
    } 
    else {
        console.log(number)
    }
}