const num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
const num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));
const num3 = Number(prompt("შეიყვანეთ მესამე რიცხვი:"));

const sum = num1 + num2 + num3;

if (sum % 2 === 0) {
    console.log(sum / 3);
} else {
    console.log(sum * 2);
}