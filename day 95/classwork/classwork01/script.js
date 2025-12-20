//შექმენით ფუნქცია, რომელიც დაგვიბრუნებს შემოტანილი მნიშვნელობა ლუწია თუ კენტი
function number (num) {
    if (num %2 === 0) {
        return 'Even'
    }
    else {
        return 'Odd'
    }
}

console.log(number(6))