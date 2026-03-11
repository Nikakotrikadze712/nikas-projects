//შექმენით ფუნქცია რომელსაც გადაეცემა ორი რიცხვი არგუმენტად და ამ რიცხვებს შორის გაავლებს დიაპაზონს. შემდეგ დაგვიბრუნებს ამ რიცხვების ნამრავლს
let function1 = (num1, num2) => {
    let result1 = 1
    for (let i = num1; i <= num2; i++) {
        result1 = result1 * i
    }
    return result1
}

let function2 = function (num2, num3) {
    let result2 = 1
    for (let j = num2; j <= num3; j++) {
        result2 = result2 * j
    }
    return result2
}

console.log (function1 (2, 4))
console.log (function2 (4, 8))