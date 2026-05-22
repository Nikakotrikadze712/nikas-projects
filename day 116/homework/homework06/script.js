//შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია. და დააბრუნეთ ამ რიცხვების საშუალო. (შეკრიბავთ და გაყოფთ რაოდენობაზე)
let func = function (num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    return sum / num.length
}

console.log (func ([1, 2, 3, 4, 5]))