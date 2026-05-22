//მომხმარებელს შემოატანინეთ ტექსტი და გაიგეთ ეს ტექსტი თუ შეიცავს ხმოვნებს.
let text1 = prompt('enter text')
let i = 0
let vowel1 = false

while (i < text1.length) {
    let char = text1[i].toLowerCase()

    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        vowel1 = true
        break
    }

    i++
}

console.log(vowel1)

let text2 = prompt('enter text')
let j = 0
let vowel2 = false

if (text2.length > 0) {
    do {
        let char = text2[j].toLowerCase()

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            vowel2 = true
            break
        }

        j++
    } while (j < text2.length)
}

console.log(vowel2)