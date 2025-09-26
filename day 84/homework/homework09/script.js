const user_Number = Number(prompt("შეიყვანეთ რიცხვი:"));
const user_Word = prompt("შეიყვანეთ სიტყვა:");
const secret_Word = "goa";

if (user_Word === secret_Word) {
  alert("სიტყვა სწორია!");
}

if (user_Number > 10 && user_Number < 20) {
  alert("რიცხვი 10-ზე და 20-ზე ნაკლებია!");
}