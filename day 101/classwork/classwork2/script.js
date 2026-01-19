//შექმენით მანქანის ობიექტი. სადაც იქნება ბრენდი, მოგწონთ თუ არა (true/false) და გამოშვების წელი. შემდეგ გაანახლეთ გამოშვების წელი და დაამატეთ მოდელი. წაშალეთ მოგწონთ თუ არა.
let car = {
    brand: 'bmw',
    liked: true,
    year: 2004,
}

car.year = 2008
car.brand = 'gtr'
delete car.brand

console.log(car)