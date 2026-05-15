//შექმენი ობიექტი, სადაც ერთი მეთოდი იქნება ჩვეულებრივი function, ხოლო მეორე arrow function. ორივეში გამოიყენე this, ნახეთ რომელი იმუშავებს.
let user = {
    name: 'nika',
    func1: function () {
        return this.name
    },
    func2: () => {
        return this.name
    }
}

console.log(user.func1())
console.log(user.func2())