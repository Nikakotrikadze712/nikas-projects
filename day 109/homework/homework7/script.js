//შექმენით სია სადაც რიცხვები. თუ რიცხვი არის 3-ის ჯერადი მაშინ დაუმატეთ თავისი ინდექსი. სხვა შემთხვევაში გაამრავლეთ ორზე.
let numbers = [2, 3, 4, 6, 7, 9, 10, 12, 14, 15]

let result = numbers.map ((num, index) => {
  if (num % 3 === 0) {
    return num + index
  } else {
    return num * 2
  }
})

console.log (result)