//შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ მხოლოდ კენტი რიცხვები.
let list = ['nika', 11, false, 32, 'goa', 9]
let result = list.filter((i) => {
    return typeof i === "number" && i % 2 !== 0
})
console.log(result)