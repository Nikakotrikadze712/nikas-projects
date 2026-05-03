//გაქვს profile მოთხოვნები: _username private setter: ყველა ასო უნდა იყოს პატარა (lowercase) getter: აბრუნებს "@" + username
const profile = {
    _username: 'nika123',
    set username(value) {
        this._username = value.toLowerCase()
    },
    get username() {
        return '@' + this._username
    }
}

console.log(profile.username)