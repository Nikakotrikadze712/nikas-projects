//შექმენით ფუნქცია, რომელიც რენდომულად აარჩევს რიცხვს 1-დან 10-მდე. და მომხმარებელმა უნდა გამოიცნოს ეს რიცხვი. ამისთვის მას უნდა ჰქონდეს 3 ცდა.
function guessNumberGame() {

    let randomNumber = Math.floor(Math.random() * 10) + 1

    let attempts = 3

    while (attempts > 0) {
        let userGuess = Number(prompt("guess the number 1-10. attempts: " + attempts))

        if (userGuess === randomNumber) {
            alert("YOU WIN!")
            return
        } else {
            attempts--
            if (attempts > 0) {
                alert("TRY AGAIN!")
            }
        }
    }

    alert("YOU LOSE, the number was: " + randomNumber)
}

guessNumberGame()