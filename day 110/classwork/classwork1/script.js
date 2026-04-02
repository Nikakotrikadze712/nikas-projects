//შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ ისეთი ელემენტები რომლებიც სტრინგები არის.
let list = [9, "gtr", true, 3, "r35", false]
let result = list.filter(item => typeof item === "string")

console.log(result)