//შექმენით სია სადაც გექნებათ იუზერების ობიექტები (id, name, age). find()-ის გამოყენებით იპოვეთ ის მომხმარებელი, რომლის id იქნება 3-ის ტოლი და დააბრუნეთ ეს ობიექტი.
let users = [
    {
        id: 1,
        name: 'Nika',
        age: 15
    },
    {
        id: 2,
        name: 'Mate',
        age: 14
    },
    {
        id: 3,
        name: 'Gio',
        age: 15
    },
    {
        id: 4,
        name: 'Luka',
        age: 15
    }
]

let user = users.find(function (item) {
    return item.id === 3
})

console.log(user)