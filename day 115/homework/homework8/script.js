//შექმენით ფუნქცია სახელად displayCar, რომელიც პარამეტრად მიიღებს ობიექტს. პარამეტრების სიაშივე მოახდინეთ დესტრუქცია ({brand, model, year})
function displayCar({ brand, model, year }) {
    console.log(`ბრენდი: ${brand}`)
    console.log(`მოდელი: ${model}`)
    console.log(`წელი: ${year}`)
}

let car = {
    brand: 'BMW',
    model: 'M4',
    year: 2023
}

displayCar(car)