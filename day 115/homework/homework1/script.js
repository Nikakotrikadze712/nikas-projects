//შექმენი ობიექტი robot, რომელსაც ექნება model და მეთოდი sayModel. გამოიყენე this, რომ მეთოდმა დააბრუნოს "ჩემი სახელია {model}"
const robot = {
    model: 'RX-78',
    sayModel() {
        return `ჩემი სახელია ${this.model}`
    }
}

console.log(robot.sayModel())