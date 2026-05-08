//დაწერე ფუნქცია createCar(brand, model, year), რომელიც დააბრუნებს ობიექტს. გამოიყენე shorthand სინტაქსი პარამეტრების მისანიჭებლად.
function createCar(brand, model, year) {
    return {
        brand,
        model,
        year
    }
}

let car = createCar('BMW', 'M3', 2000)

console.log(car)