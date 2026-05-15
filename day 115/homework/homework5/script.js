//დაწერე Factory Function, რომელიც აბრუნებს მოტოციკლეტის/მანქანის ინფორმაციებს. გამოიყენე Property Value Shorthand კოდის შესამცირებლად.
function func (brand, model, year) {
    return {
        brand,
        model,
        year
    }
}

let car = createVehicle('BMW', 'M3', 2000)
let motorcycle = createVehicle('Kawasaki', 'Ninja H2R', 2024)

console.log(car)
console.log(motorcycle)