//დაწერე ფუნქცია, რომელიც იღებს id, name და price პარამეტრებს და აბრუნებს ობიექტს
function func (id, name, price) {
    return {
        id,
        name,
        price
    }
}

let product = func(1, 'BMW', 25000)

console.log(product)