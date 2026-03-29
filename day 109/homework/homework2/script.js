//შექმენით ცვლადი სადაც შეინახავთ რენდომ რიცხვს 1-დან 20-მდე. მომხმარებელმა კი უნდა გამოიცნოს ეს რიცხვი.
let num1 = Math.floor (Math.random() * 20)  + 1
let num2 

do {
    num2 = Number (prompt('enter  number 1-20: '))
} while (num2 !==  num1);

console.log  ('right guess!')