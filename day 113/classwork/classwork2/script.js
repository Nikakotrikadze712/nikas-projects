//შექმენით ფუნქცია სახელად createPerson() რომელმაც უნდა შექმნას ობიექტები რომლებსაც ექნებათ --> name , surname , age , eyeColor , adress  ფუნქციამ უნდა დააბრუნოსმ ობიექტი ზემოთ მოცემული მნიშვნელობებით შექმენი 5 ცვლადი და 5 ივე ცვლადში შეინახე ობიექტები გაჯსხვავებული მნიშვნელობებით დააკონსოლლოგე ყველა მათგანი რომ ნახო შედეგი
function createPerson(name, surname, age, eyeColor, adress) {
  return {
    name: name,
    surname: surname,
    age: age,
    eyeColor: eyeColor,
    adress: adress
  }
}

let person1 = createPerson('nika', 'kotrikadze', 20, 'hazel', 'vani')
let person2 = createPerson('lika', 'beridze', 22, 'blue', 'batumi')
let person3 = createPerson('giorgi', 'kapanadze', 25, 'green', 'kutaisi')
let person4 = createPerson('mariam', 'gelashvili', 19, 'brown', 'tbilisi')
let person5 = createPerson('luka', 'abashidze', 30, 'green', 'gori')

console.log(person1)
console.log(person2)
console.log(person3)
console.log(person4)
console.log(person5)