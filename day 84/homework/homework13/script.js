const age = Number(prompt("შეიყვანეთ თქვენი ასაკი"));

if (age < 16 || age > 65) {
    console.log('თქვენი ასაკი ან 16-ზე ნაკლებია, ან 65-ზე მეტი');
} else {
    console.log('თქვენი ასაკი 16-დან 65-მდეა');
}