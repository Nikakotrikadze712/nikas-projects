//შექმენით სია სადაც იქნება ათწილადები და მთელი რიცხვები. დააბრუნეთ პირველი ათწილადი რიცხვი.
let number = [10, 25, 7.5, 30, 12.8, 50]
let numbers = number.find(function (num) {
    return !Number.isInteger(num)
})

console.log(numbers)