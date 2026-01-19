//შექმენით ობიექტი სადაც შეინახავთ თქვენს შესახებ ინფორმაციას. შემდეგ მომხმარებელს შემოატანინე რომელიმე ნებისმიერი ტექსტი და ობიექტში ჩაამატეთ.
let user = {
    name: 'nika',
    lastname: 'kotrikadze',
    age: 15,
    city: 'vani'
}
let info = prompt("enter any information about you: ")
user.info = info

console.log(user)