//შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ მხოლოდ კენტი რიცხვები.
let list = [12, 4, 26, 15, 2, 33, 8]
let result = list.map((i) => {
    return i * i
})
let arr = result.filter((i) => {
    return i >= 10 && i <= 99
})

console.log(arr)