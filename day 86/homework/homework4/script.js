const age = prompt("შეიყვანე ასაკი:");
const energy = prompt("შეიყვანე ენერგიის დონე (1-10):");

if (age < 20 && energy > 7) {
  console.log("გირჩევ სირბილს!");
} else if (energy < 4) {
  console.log("გირჩევ დასვენებას!");
} else {
  console.log("გააგრძელე ჩვეულებრივად!");
}