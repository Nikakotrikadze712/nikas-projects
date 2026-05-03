//შექმენი ობიექტი სადაც იქნება _number  , სადაც შეინახავ სტრინგ ტელეფონის ნომერს შენი დავალებაა შექმნა set tel ,რომელმაც უნდა შეცვალოს ტელეფონის ნომერი შემდგნაირად--> უნდა იყოს 6 ზე მეტი სიმბოლო და ეს სტრინგი უნდა შეიცავდეს მხოლოდ ციფრებს თუ პირობა დაკმაყოფილდა შეცვალე ნომერი თუ არა და გამოიტანე ALERT!! შემდეგ შექმენი GET რომელიც დააბრუნებს შეცვლილ მნშვნელობას შემდეგნაირად --> თუ სიგრძე არის 6 ზე მეტი დააბრუნე ნომერი,სხვა შემთხვევაშ დააბრუნე CANT RETURN NUMBER
let phone = {
    _number: '123456',

    set tel(value) {
        if (value.length > 6) {
            this._number = value
        }
        else {
            return ('ALERT!!')
        }
    },
    get tel() {
        if (this._number.length > 6) {
            return this._number
        }
        else {
            return 'CANT RETURN NUMBER'
        }
    }
}

phone.tel = '1234567'
console.log(phone.tel)