//შექმენი სია სადაც იქნება ჩამოწერილი სახელები (ზოგი განმეორდება). თქვენი დავალებაა რომ დააბრუნოთ ობიექტის სახით თითოეული სახელი რამდენჯერ მეორდება (key იქნება თვითონ სახელი და value რაოდენობა)
let names = [
    'Nika',
    'Ana',
    'Nika',
    'Gio',
    'Ana',
    'Nika',
    'Luka'
]
let result = {}

for (let i = 0; i < names.length; i++) {
    let name = names[i]

    if (result[name]) {
        result[name]++
    }
    else {
        result[name] = 1
    }
}

console.log(result)