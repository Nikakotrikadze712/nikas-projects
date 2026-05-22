//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ ტექსტს შეამოწმებს პალინდრომეა თუ არა (საწყისი ვერსია == შებრუნებული ვერსია)
let palindrome = function (text) {
    let str = ''
    for (let i = text.length -1; i >= 0; i--) {
        str += text[i]
    }
    return text == str
}

console.log (palindrome('nika'))