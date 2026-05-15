//შექმენი ობიექტი სახელად user. Setter-ის გამოყენებით გააკეთეთ ისე, რომ მომხმარებლის სახელი (username) იყოს მინიმუმ 5 სიმბოლო, სხვა შემთხვევაში დააბრუნოს შეცდომა.
let user = {
    _username: '',
    get username() {
        return this._username
    },
    set username(newusername) {
        if (newusername.length >= 5) {
            this._username = newusername
        }
        else {
            console.log('შეცდომა: username უნდა იყოს მინიმუმ 5 სიმბოლო')
        }
    }
}

user.username = 'nika'
console.log(user.username)
user.username = 'giorgi'
console.log(user.username)