//შექმენი user ობიექტი: _password username მოთხოვნები: შექმენი getter password → ყოველთვის აბრუნებს "******" (რეალური პაროლი არ უნდა ჩანდეს შექმენი მეთოდი changePassword(oldPass, newPass წესები თუ oldPass არ ემთხვევა → არ შეცვალო newPass უნდა იყოს მინიმუმ 6 სიმბოლო
let user = {
    _password: '123456',
    username: 'nika',
    get password() {
        return '******'
    },
    changePassword(oldPass, newPass) {
        if (oldPass !== this._password) {
            return 'wrong password'
        }
        if (newPass.length < 6) {
            return 'password too short'
        }
        this._password = newPass
        return 'password changed'
    }
}

console.log(user.password)
console.log(user.changePassword('111111', 'nika'))
console.log(user.changePassword('123456', 'nik'))
console.log(user.changePassword('123456', 'abcdef'))