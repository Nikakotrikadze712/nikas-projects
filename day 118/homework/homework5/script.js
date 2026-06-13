//შექმენი ობიექტი და მოახდინეთ ამ ობიექტის დესტრუქცია, შეუცვალეთ სახელებიც.
const user = {
    name: 'nika',
    surname: 'kotrikadze',
    age: 16
}

let {
    name: firstName,
    surname: lastName,
    age: userAge
} = user

console.log(firstName)
console.log(lastName)
console.log(userAge)