//შექმენით სია,სადაც მოათავსებ რაიმე სტრინგენბს, შემნი დავალებაა რომ do while ის გამოყენებით დაითვალო თუ რამდენი სტრინგია სიაში ისეთი რომლის სიგრძე არის ლუწი
let arr = ["apple", "banana", "kiwi", "pear"]

let i = 0
let count = 0

do {
    if (arr[i].length % 2 === 0) {
        count++
    }
    i++
} while (i < arr.length)

console.log(count)