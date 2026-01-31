//შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. და ახალ სიაში დააბრუნეთ მხოლოდ ის ელემენტები რომლებიც იქნება სტრინგ ტიპის მონაცემი (for of-ით)
let list1 = [10, "nika", true, "apple", 25, false, "HelloWorld"]

let list2 = []

for (let i of list1) {
  if (typeof i === "string") {
    list2.push(i)
  }
}

console.log(list2)