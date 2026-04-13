//შექმენით სია სადაც იქნება მინიმუმ 7 სტრინგი. დააბრუნეთ ყველაზე გრძელი სიტყვა.
let list = ['nika', 'luka', 'mate', 'akaki', 'saba', 'ana', 'aleqsi']

let func = list1.reduce ((a, b) => {
    if (b.length > a.length) {
        return b
    }
    else {
        return a
    }
})
console.log(func)