//შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი. ფუნქციამ უნდა დააბრუნოს ობიექტი, სადაც ცალ-ცალკე დაითვლით რამდენი ხმოვანია და რამდენი თანხმოვანი.
let func1 = text => {
    let vowels = "aeiou"
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase()

        if (vowels.includes(char)) {
            count1 += 1
        } else if (char >= 'a' && char <= 'z') {
            count2 += 1
        }
    }
    return {
        vowels: count1,
        consonants: count2
    }

}

console.log (func1 ('GoaisTheBest'))