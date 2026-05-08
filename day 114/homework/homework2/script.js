//შექმენი 5 ცვლადი, სადაც განსხვავებული მონაცემები შეინახება. ჯერ შექმენი ობიექტი shorthand-ით, შემდეგ კი სხვა ხაზზე გამოიყენე დესტრუქცია, რომ ამოიღო მხოლოდ სახელის და მეილის მნიშვნელობა.
let name = 'nika'
let age = 20
let email = 'email@gmail.com'
let city = 'vani'
let isStudent = true

let user = {
    name,
    age,
    email,
    city,
    isStudent
}

let { name: userName, email: userEmail } = user

console.log(userName)
console.log(userEmail)