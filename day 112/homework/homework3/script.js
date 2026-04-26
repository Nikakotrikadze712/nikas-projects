//შექმენი ობიექტი სადაც არის _items → მასივი ობიექტების: { name: "apple", price: 5, qty: 2 } ... სხვა ობიექტების სხვადასვხ მნშვნელობებით მეთოდები: addItem(product) removeItem(index) clear() getter: დააბრუნოს ყველა პროდუქტის ფასი --> totalPrice
let store = {
    _items: [
        { name: 'apple', price: 5, qty: 2 },
        { name: 'banana', price: 3, qty: 4 },
        { name: 'orange', price: 7, qty: 1 }
    ],
    get totalPrice() {
        let sum = 0
        for (let i = 0; i < this._items.length; i++) {
            let item = this._items[i]
            sum += item.price * item.qty
        }
        return sum
    },
    addItem(product) {
        this._items.push(product)
        return 'added'
    },
    removeItem(index) {
        this._items.splice(index, 1)
        return 'removed'
    },
    clear() {
        this._items = []
        return 'cleared'
    }
}

console.log(store.totalPrice)
store.addItem({ name: 'pear', price: 4, qty: 3 })
console.log(store._items)
console.log(store.totalPrice)
store.removeItem(0)
console.log(store._items)
console.log(store.totalPrice)
store.clear()
console.log(store._items)
console.log(store.totalPrice)