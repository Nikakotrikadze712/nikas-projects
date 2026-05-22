//შექმენით სია სადაც იქნება მინიმუმ 10 სტრინგი. გამოიტანეთ ყველა ისეთი სტრინგი რომლის პირველი სიმბოლოც არის დიდად დაწერილი (upper case)
let words = ['Hello', 'world', 'nika', 'str', 'Apple', 'banana', 'Cat', 'dog', 'Wolf', 'fox']

words.forEach (word => {
    if (word[0] === word[0].toUpperCase()) {
        console.log(word)
    }
})