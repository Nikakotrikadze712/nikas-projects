let num1 = prompt("enter first num:");
let num2 = prompt("enter second num:");

let num3 = 0
let num4 = 0

if (+num1 < +num2) {
  num3 = +num1;
  num4 = +num2;
} else {
  num3 = +num2;
  num4 = +num1;
}

let sum = 0;

for (let i = num3; i <= num4; i++) {
  sum += i;
}

alert("sum is " + sum);