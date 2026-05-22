//შექმენით ფუნქცია რომელიც დააბრუნებს არგუმენტად გადაცემული რიცხვი მარტივია თუ არა.
let func = num => {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log (func (10))