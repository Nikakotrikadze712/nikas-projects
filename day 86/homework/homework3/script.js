const word1 = prompt("შეიყვანე პირველი სიტყვა:");
const word2 = prompt("შეიყვანე მეორე სიტყვა:");

if (word1 === word2) {
    console.log("სიტყვები ემთხვევა");
} else if (word1[0] === word2[0]) {
    console.log("პირველი ასოები ემთხვევა");
} else {
    console.log("არ ემთხვევა");
}