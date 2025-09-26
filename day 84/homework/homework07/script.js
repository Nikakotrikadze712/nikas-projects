let ricxvi = prompt("შეიყვანე რიცხვი");
ricxvi = Number(ricxvi);

let sum1 = ricxvi % 2;
let sum2 = ricxvi % 3;

let sum = (sum1 === 0) || (sum2 === 0);

console.log(sum);