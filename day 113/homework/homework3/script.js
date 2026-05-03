//გაქვს profile მოთხოვნები: _username private setter: ყველა ასო უნდა იყოს პატარა (lowercase) getter: აბრუნებს "@" + username
const profile = {
    _username: '',
    set username(value) {
        this._username = value.toLowerCase()
    },
    get username() {
        return '@' + this._username
    }
}

profile.username = 'nika123'
console.log(profile.username)