//შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი. ფუნქციამ უნდა დააბრუნოს ობიექტი სადაც იქნება რამდენი დიდი  და პატარა ასო არის მოცემულ ტექსტში.
let func1 = text => {
    let upper = 0
    let lower = 0

    for (let i = 0; i < text.length; i++) {
        let char = text[i]

        if (char >= "A" && char <= "Z" && char === char.toUpperCase()) {
            upper += 1
        } else if (char >= "a" && char <= "z" && char === char.toLowerCase()) {
            lower += 1
        }
    }

    return {
        upper: upper,
        lower: lower
    }
}

console.log (func1 ('GoaisTheBest'))