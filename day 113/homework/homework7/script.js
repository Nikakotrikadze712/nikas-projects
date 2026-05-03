//შექმენი ფუნქცია ავტომობილზე,ქონდეს model,brand,year,color და მოიფიქრე სხვა მნიშვნელობები შენითაც თუ შეძლებ შექმენი factory function რომელიც შექმნის მანქანის ობიექტებს,შექმენი რამდენიმე ობიექტი და ნახე კონსოლში ყველა მათგანი
function createCar(model, brand, year, color, mileage) {
    return {
        model: model,
        brand: brand,
        year: year,
        color: color,
        mileage: mileage
    }
}
let car1 = createCar('GTR-R35', 'Nissan', 2007, 'Black', 37000)
let car2 = createCar('e46', 'Bmw', 2000, 'Crabon', 40000)
let car3 = createCar('Cls63s', 'Mercedes', 2013, 'White', 25000)

console.log(car1)
console.log(car2)
console.log(car3)