//შექმენით ცვლადი სადაც შეინახავთ მინიმუმ 20 წიმბოლოიან სტრინგს სადაც იქნება სფეისებიც. გადააქციეთ ეს სტრინგი სიად და დააბრუნეთ პირველივე ხმოვანი რომელ ინდექსზეა.
let text = 'skyline and bmw are the best'
let chars = text.split('')
let vowels = ['a', 'e', 'i', 'o', 'u']
let result = chars.findIndex((i) => {
    return vowels.includes(i.toLowerCase())
})

console.log(result)