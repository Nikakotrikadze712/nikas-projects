//შექმენით სია სადაც იქნება რიცხვები. დააბრუნეთ პირველივე რიცხვი რომელიც არის მარტივი რიცხვი.
let list = [4, 7, 3, 11, 20, 24, 42, 33, 48]
let result = list.find((i) => {
    if (i < 2) return false
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            return false
        }
    }
    return true
})

console.log(result)