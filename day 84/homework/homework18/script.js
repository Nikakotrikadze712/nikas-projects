const number = Number(prompt("შეიყვანეთ რიცხვი:"));

if ((number >= 0 && number <= 10) || (number >= 90 && number <= 100)) {
    alert("რიცხვი არის 0_დან 10_მდე ან 90_დან 100_მდე შუალედში.");
} else {
    alert("რიცხვი არ არის მითითებულ შუალედებში.");
}