//შექმენით სია სადაც იქნება მინიმუმ 10 რიცხვი. და გადაამრავლეთ ერთმანეთზე.
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let arr = 1

numbers.forEach((num) => {
    arr = arr * num
})

console.log(arr)