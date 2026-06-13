//შექმენით factory function სადაც შეინახავთ მომხმარებლის სახელს, გვარს, მეილს, id-ს, ასაკს, და private property (_balance) სადაც საწყისაც შეინახავთ 100. get-მა დააბრუნოს {_balance}$ (უბრალოდ $ დაუმატოს). set-მა გაანახლოს ეს ბალანსი იმ შემთხვევაში თუ გადაცემული მნიშვნელობა იქნება Number ტიპის მონაცემი და დადებითი რიცხვი.
function User(name, surname, email, id, age) {
    let _balance = 100
    return {
        name,
        surname,
        email,
        id,
        age,

        get balance() {
            return `${_balance}$`
        },
        set balance(value) {
            if (typeof value === 'number' && value > 0) {
                _balance = value
            }
        }
    }
}
let user = User(
    'nika',
    'kotrikadze',
    'email@gmail.com',
    1,
    27
)
console.log(user.balance)
user.balance = 250
console.log(user.balance)
user.balance = -50
console.log(user.balance)