//შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი სადაც იქნება რიცხვებიც შერეული. დათვალეთ რამდენი ლუწი ციფრია მოცემულ სტრინგში (ternary operator)
let func1 = text => {
    let count = 0

    for (let i = 0; i < text.length; i++) {
        let char = text[i]
        count += (char >= "0" && char <= "9" && char % 2 === 0) ? 1 : 0
    }

    return count
}

console.log (func1 ('84892'))