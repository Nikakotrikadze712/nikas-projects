const num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
const num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));

if (num1 < 0 || num2 < 0) {
    alert("მაინც ერთი რიცხვი უარყოფითია!");
} else {
    alert("არცერთი რიცხვი უარყოფითი არ არის.");
}