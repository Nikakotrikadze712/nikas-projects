let char = prompt('enter operator')
let number1 = Number(prompt('enter your first number: '))
let number2 = Number(prompt('enter your second number: '))
if(char == '+') {
    console.log(number1 + number2)
}
else if(char == '-') {
    console.log(number1 - number2)
}
else if(char == '*') {
    console.log(number1 * number2)
}
else if(char == '/') {
    console.log(number1 / number2)
}
else{
    console.log('enter a valid operator')
}