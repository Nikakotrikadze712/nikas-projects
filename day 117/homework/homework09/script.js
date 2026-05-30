//შექმენით სია სადაც გექნებათ სტრინგები. დააბრუნეთ ისეთი ელემენტის ინდექსი რომლის სიგრძეც მეტია 7-ზე.
let words = [
    'apple',
    'banana',
    'kiwi',
    'oranges',
    'pear',
]
let index = words.findIndex(function (word) {
    return word.length > 7
})

console.log(index)