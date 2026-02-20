//შექმენით ობიექტი სადაც შეინახავთ თქვენს იმფორმაციას. მის შიგნით შექმენით მეთოდი რომელიც გამოძახების შემდეგ თქვენი ასაკის მნიშვნელობას გაზრდის 1-ით.
let object = {
    name: 'nika',
    age: 15,
    info: function () {
        this.age = this.age + 1
        console.log(this.age)
    }
}

object.info()