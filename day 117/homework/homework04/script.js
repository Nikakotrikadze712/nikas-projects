//შექმენით ობიექტი სადაც გექნებათ private property და ეს იქნება ბალანსი. რომლის მნიშვნელობაც იქნება თავიდან 100-ის ტოლი. get-მა დააბრუნოს ბალანსის 80%. set-ში კი დაწერეთ პირობა სადაც შეამოწმებთ რომ ბალანსზე მომხმარებელმა აუცილებლად 50-ზე მეტი მთელი რიცხვი უნდა შემოიტანოს.
let account = {
    _balance: 100,
    get balance() {
        return this._balance * 0.8
    },
    set balance(value) {
        if (Number.isInteger(value) && value > 50) {
            this._balance = value
        }
    }
}

console.log(account.balance)
account.balance = 200
console.log(account.balance)