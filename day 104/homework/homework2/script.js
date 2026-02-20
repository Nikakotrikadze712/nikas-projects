//შექმენით ობიექტი სადაც შეინახავთ რომელიმე ფილმის სახელს, გამოშვების წელს და შეფასებას. შემდეგ ობიექტის გარეთ მომხმარებელს შეეკითხეთ თუ უნდა რომ ფილმი შეაფასოს, თუ უნდა რომ შეაფასოს მაშინ გაანახლეთ მისი მნიშვნელობა. თუ არ უნდა განახლება ობიექტის შიგნით არსებული მეთოდი გამოიძახეთ რომელიც დააბრუნებს ტექტს "თქვენ არ შეგიფასებიათ ფილმი"
let object = {
    title: 'Dune',
    year: 2021,
    rating: 8.0,
    notrated: function () {
        return 'you have not rated the film'
    }
}

let input = prompt('do you want to rate the film? Yes/No')

if (input === 'Yes') {
    let newrating = prompt('enter new rating')
    object.rating = newrating
    console.log(object.rating)
}

else {
    console.log(object.notrated())
}