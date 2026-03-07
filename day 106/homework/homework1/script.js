let num1 = Number(prompt('enter first number: '))
let num2 = Number(prompt('enter second number: '))
let operator = prompt("enter operator:'+, -, *, /")

switch(operator) {
    case '+':
        console.log(num1 + num2)
        break
    case '-':
        console.log(num1 - num2)
        break
    case '*':
        console.log(num1 * num2)
        break
    case '/':
        console.log(num1 / num2)
        break
    default:
        console.log('unknown operator')
}