//გაქვს profile property: _username გააკეთე: setter username(value) არ უნდა შეიცავდეს space-ს უნდა იყოს მინიმუმ 3 ციფრი ამ სტრინგში შეინახე lowercase-ში getter username() დააბრუნე  "@" + username getter length() აბრუნებს username-ის სიგრძეს
const profile = {
    _username: '',
    set username(value) {
        if (value.includes(' ')) {
            console.log('არასწორი username')
        }
        else {
            let digits = 0
            for (let i = 0; i < value.length; i++) {
                if (!isNaN(value[i])) {
                    digits++
                }
            }
            if (digits >= 3) {
                this._username = value.toLowerCase()
            } else {
                console.log('არასწორი username')
            }
        }
    },
    get username() {
        return '@' + this._username
    },
    get length() {
        return this._username.length
    }
}

profile.username = 'nika123'
console.log(profile.username)
console.log(profile.length)