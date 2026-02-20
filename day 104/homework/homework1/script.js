//შექმენით ობიექტი რომელშიც იქნება ოთხი მეთოდი (შეკრება, გამოკლება, გამრავლება, გაყოფა). და თითოეულ მათგანს ჰქონდეს ორი პარამეტრი, რომელსაც გამოძახების დროს გადაეცემა არგუმენტად თქვენ მიერ არჩეული რიცხვი.
let object = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    devide: function (a, b) {
        return a / b
    }
}

console.log(object.add(17, 9))
console.log(object.subtract(24, 11))
console.log(object.multiply(5, 8))
console.log(object.devide(30, 6))