//შექმენით სია სადაც იქნება ობიექტები მანქანების შესახებ. ახალ სიაში დააბრუნეთ ამ მანქანების ბრენდები.
let cars = [
    { brand: 'BMW', model: 'M3' },
    { brand: 'Mercedes', model: 'Cls 63s' },
    { brand: 'Nissan', model: 'GTR-R35' },
    { brand: 'Chevrolet', model: 'Impala' },
    { brand: 'Ford', model: 'Mustang' }
]

let brands = cars.map(car => car.brand)

console.log(brands)