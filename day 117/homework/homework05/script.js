//შექმენით ობიექტი სადაც გექნებათ private property და ეს იქნება სიჩქარე. რომლის მნიშვნელობაც იქნება თავიდან 10-ის ტოლი. თუ სიჩქარე 100-ზე მეტია, get-მა დააბრუნოს ტექსტი "Super Speed: [სიჩქარე]", სხვა შემთხვევაში უბრალოდ სიჩქარის რიცხვი. set-ში კი დაწერეთ პირობა, სადაც შეამოწმებთ, რომ ახალი შემოყვანილი სიჩქარე აუცილებლად არსებულ სიჩქარეზე მეტი იქნება.
let car = {
    _speed: 10,
    get speed() {
        if (this._speed > 100) {
            return `Super Speed: ${this._speed}`
        }
        return this._speed
    },
    set speed(value) {
        if (value > this._speed) {
            this._speed = value
        }
    }
}

console.log(car.speed)
car.speed = 120
console.log(car.speed)