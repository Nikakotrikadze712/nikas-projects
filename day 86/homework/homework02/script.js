const score = prompt("შეიყვანე ქულა (0-100):");

if (score > 90) {
    console.log("შესანიშნავი!");
} else if (score >= 70 && score <= 90) {
    console.log("კარგია!");
} else if (score >= 50 && score < 70) {
    console.log("საშუალო შედეგი!");
} else {
    console.log("მეტი უნდა იმეცადინო!");
}