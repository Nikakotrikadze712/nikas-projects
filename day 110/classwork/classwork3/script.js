//შექმენით სია, სადაც იქნება სახელები ჩამოწერილი. დააბრუნეთ პირველივე ელემენტის ინდექსი, რომელის სიგრძეც მეტია 5-ზე
let names = ["Nika", "Giorgi", "Ana", "aleqsandre", "aleqsandre"]

let result = names.findIndex((name) => {
    return name.length > 5
})

console.log(result)