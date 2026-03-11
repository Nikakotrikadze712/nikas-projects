//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ ორობით სისტემაში მყოფ რიცხვს გადაიყვანს ათობით სისტემაში.
let function1 = (num1) => {
    let result1 = ""
    while (num1 > 0) {
        result1 = (num1 % 2) + result1
        num1 = Math.floor(num1 / 2)
    }
    return result1
}

let function2 = function (num2) {
    let result2 = ""
    while (num2 > 0) {
        result2 = (num2 % 2) + result2
        num2 = Math.floor(num2 / 2)
    }
    return result2
}

console.log (function1 (231))
console.log (function2 (562))