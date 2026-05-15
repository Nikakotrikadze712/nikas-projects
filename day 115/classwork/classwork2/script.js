//შექმენი ობიექტი შენს შესახხებ --> name , surname , age შექმენი მეორე ობიექტი სადაცვ იქნება --> adress , hobby , favColor შენი დავალებაა გააერთიანო ეს ორივე ობიექტი ერთ ობიექტში და შეინახო ცვლადში' შემდეგ მოახდინე ამ ობიექტის დესტრუქცია და გამოიტანე კონსოლში თითოეული მათგანი
let person = {
    name: 'Nika',
    surname: 'Kotrikadze',
    age: 16
}

let info = {
    address: 'Vani',
    hobby: 'Programming',
    favColor: 'Blue'
}

let obj2 = Object.assign(person, info)

let { name, surname, age, address, hobby, favColor } = obj2

console.log(name)
console.log(surname)
console.log(age)
console.log(address)
console.log(hobby)
console.log(favColor)