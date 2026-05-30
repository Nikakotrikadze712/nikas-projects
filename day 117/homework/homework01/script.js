//შექმენით სია სადაც იქნება შენახული 5 ობიექტი პროდუქტების შესახებ. თქვენი დავალებაა რომ ამ პროდუქტების ფასები შეკრიბოთ
let products = [
    {
        name: 'Phone',
        price: 1200
    },
    {
        name: 'Laptop',
        price: 1800
    },
    {
        name: 'PC',
        price: 2500
    },
    {
        name: 'Headphones',
        price: 150
    },
    {
        name: 'Mouse',
        price: 50
    }
]

let totalPrice = 0

for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price
}

console.log(totalPrice)