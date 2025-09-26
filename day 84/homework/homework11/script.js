const num = Number(prompt("შეიყვანეთ რიცხვი"));

if (num % 100 === 0 || num % 150 === 0) {
    console.log('ეს რიცხვი ან 100-ზე იყოფა ან 150-ზე');
} else {
    console.log('არასწორი რიცხვია');
}