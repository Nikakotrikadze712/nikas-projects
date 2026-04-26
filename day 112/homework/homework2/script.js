//შექმენი bankAccount: _balance მეთოდები: deposit(amount) withdraw(amount) წესები: amount > 0 ანუ შესატანი თანხა(0 ლარს ვერ შევიტანთ) withdraw არ უნდა აღემატებოდეს ბალანსს(თუ ბალანსზე 100 ლარი გვაქ 200 ვერ გამოვიტანთ D) შექმენი getter: რომელიც აბრუნებს balance ს
let bankAccount = {
    _balance: 0,
    get balance() {
        return this._balance
    },
    deposit(amount) {
        if (amount <= 0) {
            return 'invalid amount'
        }
        this._balance += amount
        return 'deposit successful'
    },
    withdraw(amount) {
        if (amount <= 0) {
            return 'invalid amount'
        }
        if (amount > this._balance) {
            return 'not enough balance'
        }
        this._balance -= amount
        return 'withdraw successful'
    }
}

console.log(bankAccount.balance)
console.log(bankAccount.deposit(100))
console.log(bankAccount.withdraw(200))
console.log(bankAccount.withdraw(50))
console.log(bankAccount.balance)