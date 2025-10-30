const number = prompt("შეიყვანე რიცხვი:");

if (number % 2 === 0 && number % 5 !== 0) {
    console.log("რიცხვი ლუწია და არა 5-ის ჯერადი");
} else {
    console.log("სხვა შემთხვევა");
}