let number = Math.floor(Math.random() * 100) + 1

let guess = Number(prompt('Enter number 1-100: '))

if (guess === number) {
    alert('You win!')
}
else {

    let gap = 0

    if (guess > number) {
        gap = guess - number
    }
    else {
        gap = number - guess
    }

    if (gap < 10) {
        alert('You are very close!')
    }
    else {
        if (guess > number) {
            alert('Too high!')
        }
        else {
            alert('Too low!')
        }
    }
}