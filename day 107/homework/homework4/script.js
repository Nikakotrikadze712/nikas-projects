//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ ორობით სისტემაში მყოფ რიცხვს გადაიყვანს ათობით სისტემაში.
let function1 = num1 => {
    let result1 = 0
    let array1 = 0
    for (let i = num1.length - 1; i >= 0; i--) {
        result1 = result1 + Number (num1 [i]) * (2 ** array1)
        array1 = array1 + 1
    }
    return result1
}

let function2 = function (num2) {
    let result2 = 0
    let array2 = 0
    for (let i = num2.length - 1; i >= 0; i--) {
        result2 = result2 + Number (num2 [i]) * (2 ** array2)
        array2 = array2 + 1
    }
    return result2
}

console.log (function1 ("101101001"))
console.log (function2 ("010010110"))