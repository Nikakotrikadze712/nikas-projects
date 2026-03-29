//შექმენით სია სადაც შეინახავთ სტრინგებს,შენი დავალებაა რომ დაითვალო რამდენჯერ მეორდება სიაში ისეთი ელემენტი რომლის სიგრძე მეტია 4 ზე
let arr = ["apple", "banana", "kiwi", "banana", "pear", "apple", "grapes"]
let count = 0

arr.forEach( (item) => {
    if (item.length > 4) {
        count += 1
    }
})

console.log(count)