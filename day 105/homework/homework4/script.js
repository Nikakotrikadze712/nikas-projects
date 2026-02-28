let password = Number(prompt('enter password(number): '))

let score = 0
let temp = password
let length = 0
let sum = 0

if (password >= 0 || password < 0) {
    while (temp > 0) {
        let digit = temp % 10
        sum = sum + digit
        temp = Math.floor(temp / 10)
        length = length + 1
    }

    if (length >= 6) {
        score = score + 10
    }
    else if (length >= 3 && length < 6) {
        score = score + 5
    }

    if (sum > 20) {
        score = score + 10
    }
    else if (sum >= 15 && sum <= 20) {
        score = score + 5
    }

    if (score > 15) {
        alert('password is strong')
    }
    else if (score >= 10 && score <= 15) {
        alert('average')
    }
    else {
        alert('password is weak')
    }

}
else {
    alert('enter numbers')
}