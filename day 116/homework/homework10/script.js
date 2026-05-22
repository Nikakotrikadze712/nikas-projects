//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სიიდან დააბრუნებს ყველაზე ხშირად რომელი რიცხვიც მეორდება იმას.
let func = array => {
    let max = 0
    let result = array[0]
    for (let i = 0; i < array.length; i++) {
        let count = 0
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                count += 1
            }
        }
        if (count > max) {
            max = count
            result = array[i]
        }
    }
    return result
}

console.log(func([1, 2, 2, 3, 3, 3, 4]))