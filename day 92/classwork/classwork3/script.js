//მომხმარებელს შემოატანინე 5ჯერ სიტყვა, ეს სიტყვა ჩაამატე სიაში.იმ შემტხვევაში თუ რომელიმე სიტყვა განმეორდება ისე, რომ თუმდაც სხვადასხვა შიფტით ეწეროს, მაშინ ეს სიტყვა გადმოიტანოს ახალ სიაში
let words = []
let Words1 = []
for (let i = 0; i < 5; i++) {
    let input = prompt("შეიყვანეთ სიტყვა:")
    words.push(input)
}
for (let i = 0; i < words.length; i++) {
    let wordLower = words[i].toLowerCase()
    if (!Words1.includes(wordLower)) {
        Words1.push(wordLower)
    }
}
console.log(Words1)
console.log(words)