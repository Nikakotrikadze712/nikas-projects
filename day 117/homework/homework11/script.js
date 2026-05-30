//შექმენით Factory ფუნქცია createRobot(name), სადაც იქნება _battery და თავიდან იქნება 100-ის ტოლი. ფუნქციამ უნდა დააბრუნოს ობიექტი, რომელსაც ექნება get battery (დააბრუნებს:  "Battery: [battery]%") და მეთოდი work(). work() მეთოდის ყოველ გამოძახებაზე ბატარეას უნდა დააკლდეს 15%. თუ ბატარეა 15-ზე ნაკლებია, მეთოდმა უნდა დაბეჭდოს "დაიტენე!"
function createRobot(name) {
    return {
        name,
        _battery: 100,
        get battery() {
            return `Battery: ${this._battery}%`
        },
        work() {
            if (this._battery < 15) {
                console.log('დაიტენე!')
            }
            else {
                this._battery -= 15
            }
        }
    }
}
let robot = createRobot('Robo')

console.log(robot.battery)
robot.work()
robot.work()
robot.work()
console.log(robot.battery)