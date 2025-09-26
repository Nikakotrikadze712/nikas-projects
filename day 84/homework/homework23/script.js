const monthNumber = Number(prompt("შეიყვანეთ თვეს ნომერი (1-12):"));

if (monthNumber === 1) {
    alert("იანვარი - ზამთარი");
} else if (monthNumber === 2) {
    alert("თებერვალი - ზამთარი");
} else if (monthNumber === 3) {
    alert("მარტი - გაზაფხული");
} else if (monthNumber === 4) {
    alert("აპრილი - გაზაფხული");
} else if (monthNumber === 5) {
    alert("მაისი - გაზაფხული");
} else if (monthNumber === 6) {
    alert("ივნისი - ზაფხული");
} else if (monthNumber === 7) {
    alert("ივლისი - ზაფხული");
} else if (monthNumber === 8) {
    alert("აგვისტო - ზაფხული");
} else if (monthNumber === 9) {
    alert("სექტემბერი - შემოდგომა");
} else if (monthNumber === 10) {
    alert("ოქტომბერი - შემოდგომა");
} else if (monthNumber === 11) {
    alert("ნოემბერი - შემოდგომა");
} else if (monthNumber === 12) {
    alert("დეკემბერი - ზამთარი");
} else {
    alert("შეიყვანეთ სწორი რიცხვი (1-12)");
}