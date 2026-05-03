//დაწერე ფუნქცია createCar(brand, year) დააბრუნოს ობიექტი: brand year შექმენი რამდენიმე ობიექტი თან შეიანხე ცვლადებში და დააკონსოლლოგე
function createCar(brand, year) {
    return {
        brand: brand,
        year: year
    }
}
let car1 = createCar('Nissan', 1990)
let car2 = createCar('BMW', 2000)
let car3 = createCar('Mercedes', 2010)

console.log(car1)
console.log(car2)
console.log(car3)