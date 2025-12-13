//შექმენით ფუნქცია რომელიც გადაცემულ სტრინგში სიმბოლოებს შეუცვლის ქეისებს. (რომელი ასოც წერია პატარად იმას დიდად დაწერს და პირიქით)
function Case(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char == char.toUpperCase()) {
            result += char.toLowerCase()
        }
        else {
            result += char.toUpperCase()
        }
    }
    return result
}

console.log(Case('HeLLo WoRLD'))