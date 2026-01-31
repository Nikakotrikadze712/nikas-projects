//შექმენით ობიექტი სადაც შეინახავთ ნებისმიერი ტიპის ინფორმაციას. მომხმარებელს შემოატანინეთ key. თუ ეს key არის ობიექტში მაშინ კონსოლში გამოაჩინეთ შესაბამისი მნიშვნელობა. სხვა შემთხვევაში შემოატანინე value და ობიექტში დაამატეთ.
let object = {
    car: 'bmw',
    brand: 'E60',
    year: 2004
}

let keys = prompt('enter key: ')

if (keys in object) {
    console.log(object[keys])
}

else{
    let value = prompt('enter value: ')
    object[keys] = value
    console.log(object)
}