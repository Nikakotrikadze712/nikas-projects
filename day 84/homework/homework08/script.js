let ricxvi = prompt("შეიყვანე რიცხვი");
ricxvi = Number(ricxvi);

let multiply1 = ricxvi % 4 === 0;
let multiply2 = ricxvi % 3 === 0;
let multiply3 = ricxvi % 5 === 0;

let shedegi = (multiply1 && multiply2) || multiply3;

console.log(shedegi);