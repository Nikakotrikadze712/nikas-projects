//გაქვს weather(მოიძიე როგორ გადავიყვანოთ F to C ) მოთხოვნები: _celsius private setter ცელსიუსზე getter fahrenheit დააბრუნოს გადაყვანილი მნიშვნელობა
const weather = {
    _celsius: 0,
    set celsius(value) {
        this._celsius = value
    },
    get fahrenheit() {
        return this._celsius * 9 / 5 + 32
    }
}

weather.celsius = 20
console.log(weather.fahrenheit)