//შექმენი ობიექტი bankAccount, სადაც _balance იქნება private.  შექმენი getter, რომელიც დააბრუნებს ბალანსს ფორმატირებულად (მაგ: "$123") და setter, რომელიც დაუშვებს ბალანსის შეცვლას მხოლოდ იმ შემთხვევაში, თუ ახალი მნიშვნელობა დადებითი რიცხვია.
let bankaccount = {
    _balance: 123,
    get balance () {
        return `$${this._balance}`
    },
    set balance (newbalance) {
        if (newbalance > 0) {
            this._balance = newbalance
        }
    }
}

console.log (bankaccount.balance)
bankaccount.balance = 500
console.log (bankaccount.balance)
bankaccount.balance = -100
console.log (bankaccount.balance)