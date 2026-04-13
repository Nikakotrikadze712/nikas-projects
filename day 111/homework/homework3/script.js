//შექმენით სია სადაც იქნება bool ტიპის (true, false) მნიშვნელობები. და დააბრუნეთ თუ ამ სიაში ყველა არის true თუ არა.
let arr = [true, true, false, true, true, true, true]

let result = arr.reduce((a, b) => {
  return a && b
})

console.log(result)