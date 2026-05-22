//შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ მხოლოდ სტრინგ ტიპის მონაცემები.
let list = ['nika', 'hello', 1, false, '6', 9, true]
let result = list.filter (item => typeof item === "string")

console.log (result)