//შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად სტრინგი. და ობიექტის სახით დააბრუნეთ თითოეული ასო რამდენჯერ გვხვდება.
let func = str => {
    let result = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (result[char]) {
            result[char] = result[char] + 1
        }
        else {
            result[char] = 1
        }
    }
    return result
}

console.log(func('hello'))