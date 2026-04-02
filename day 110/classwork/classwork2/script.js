//შექმენით სია, სადაც იქნება რიცხვები. დააბრუნეთ პირველივე რიცხვი რომელიც მეტია 100-ზე
let numbers = [5, 9, 45, 74, 89, 100, 122, 143]
let result = numbers.find ((num) => {
    return num > 100
})

console.log(result)