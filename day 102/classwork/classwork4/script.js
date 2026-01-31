//შექმენით ობიექტი სადაც შეინახავთ რამოდენიმე რიცხვს როგორც კენტს ასევე ლუწს,თქვენი დავალებაა რომ იპოვოთ ყველა ლუწი რიცხვის ჯამი და კენტი რიცხვების რაოდენობა
let numbers = {
  a: 2,
  b: 5,
  c: 8,
  d: 7
}

let even = 0
let odd = 0

for (let key in numbers) {
  if (numbers[key] % 2 == 0) {
    even = even + numbers[key]
  }
  else {
    odd = odd + 1
  }
}

console.log(even)
console.log(odd)