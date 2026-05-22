//შექმენით ფუქნცია რომელსაც გადაეცემა დიდი ტექსტი. და დააბრუნებს რამდენი სიტყვისგან შედგება ეს წინადადება.
let func = function (text) {
    let words = text.split(' ')
    let count = 0
    for (let i = 0; i < words.lenght; i++) {
        if (words[i] !== '') {
            count += 1
        }
    }
    return count
}

console.log (func ('hi my name is nika'))