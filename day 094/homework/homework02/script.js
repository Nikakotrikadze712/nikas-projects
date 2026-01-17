//შექმენით კალკულატორის ფუნქცია, რომელსაც უნდა გადაეცეს სამი არგუმენტი. ორი რიცხვი და 1 მოქმედება უნდა იყოს.
function calculator(num1, num2, operation) {
    if (operation === '+') {
        return num1 + num2
    }
    else if (operation === '-') {
        return num1 - num2
    }
    else if (operation === '*') {
        return num1 * num2
    }
    else if (operation === '/') {
        return num1 / num2
    }
    else{
        return 'try again'
    }
}

console.log(calculator(55, 15, '-'))