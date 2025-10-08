const num = prompt("შეიყვანე რიცხვი (1-10):");

if (num == 7 || num == 3) {
  console.log("გაიმარჯვე!");
} else if (num > 8) {
  console.log("ძალიან მაღალი!");
} else if (num < 2) {
  console.log("ძალიან დაბალია!");
} else {
  console.log("ცადე კიდევ!");
}