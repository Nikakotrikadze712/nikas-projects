const year = prompt("შეიყვანეთ წელი:");

if (
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 400 === 0)
) {
  alert(year + " ნაკიანწლიანიa.");
} else {
  alert(year + " ნაკიანწლიანი არ არის.");
}