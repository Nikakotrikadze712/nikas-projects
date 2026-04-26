//შექმენი user: სადაც იქნება :  _email setter: უნდა შეცვალოს ემაილი(_email) წესები: ახალი ემაილი უნდა შეიცავდეს "@" და "." ერთად getter: აბრუნებს _email ს
let user = {
    _email: 'email@gmail.com',
    get email() {
        return this._email
    },
    set email(newEmail) {
        if (newEmail.includes('@') && newEmail.includes(".")) {
            this._email = newEmail
        }
        else {
            return 'invalid email'
        }
    }
}

user.email = 'newmail.com'
console.log(user.email)
user.email = 'new@mail.com'
console.log(user.email)