//შექმენით ობიექტი საიდანაც ამოშლით რომელიმე ორ მნიშვბელობას და ერთს გაანახლებთ.
let cars = {
    brand: 'bmw',
    liked: true,
    year: 2010,
    model: 'm5'
}
cars.year = 2020
delete cars.liked
delete cars.model

console.log(cars)